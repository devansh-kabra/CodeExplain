import fs from "fs";
import path from "path";
import { db } from "../lib/db.js";


// ----------------------------------------------------------
//                 FRONTMATTER (NO DEPENDENCIES)
// ----------------------------------------------------------
function extractFrontMatter(text) {
  if (!text.startsWith("---")) return {};

  const endIndex = text.indexOf("\n---", 3);
  if (endIndex === -1) {
    return {};
  }
  const fm = text.substring(3, endIndex).trim();
  const lines = fm.split("\n");

  const meta = {};
  let currentKey = null;

  for (let line of lines) {
    line = line.trim();

    // key:
    if (line.includes(":") && !line.startsWith("-")) {
      const [key, ...rest] = line.split(":");
      const value = rest.join(":").trim();

      if (value === "") {
        meta[key.trim()] = [];    // array key
        currentKey = key.trim();
      } else {
        meta[key.trim()] = value; // basic key:value
        currentKey = null;
      }
      continue;
    }

    // array item
    if (line.startsWith("-")) {
      if (!currentKey) continue;
      const item = line.replace("-", "").trim();
      meta[currentKey].push(item);
    }
  }

  return meta;
}

// ----------------------------------------------------------
//                 SECTION EXTRACTOR
// ----------------------------------------------------------
function extractSections(content) {
  return {
    description: extract(content, "## Description"),
    examples: extractExamplesAsJson(content, "## Examples"),
    constraints: extractList(content, "## Constraints"),
    perfect_explanations: extractSectionAsParagraphArray(content, "## Perfect Explanations")
  };
}

function extract(text, title) {
  const parts = text.split(title);
  if (parts.length < 2) return "";
  const after = parts[1];
  const next = after.indexOf("##");
  return next === -1 ? after.trim() : after.substring(0, next).trim();
}

function extractSectionAsParagraphArray(text, title) {
  const parts = text.split(title);
  if (parts.length < 2) return [];

  const after = parts[1];
  const nextSectionIdx = after.search(/^##\s/m); // find next '##' heading
  let sectionText = nextSectionIdx === -1 ? after.trim() : after.substring(0, nextSectionIdx).trim();

  // Remove leading '-' from the very first line only
  sectionText = sectionText.replace(/^-\s*/, '');

  return [sectionText];
}


function extractExamplesAsJson(text, title) {
  const parts = text.split(title);
  if (parts.length < 2) return [];

  const after = parts[1];
  const nextSectionIdx = after.search(/^##\s/m);
  const sectionText = nextSectionIdx === -1 ? after.trim() : after.substring(0, nextSectionIdx).trim();

  const lines = sectionText.split("\n");

  const examples = [];
  let current = null;

  for (let raw of lines) {
    const line = raw.trim();

    if (line.startsWith("- Input:")) {
      // Store previous example if exists
      if (current) examples.push(current);

      current = {
        input: "",
        output: "",
        explanation: ""
      };

      current.input = raw.replace("- Input:", "").trim() + "\n";
      continue;
    }

    if (!current) continue; // skip until first example found

    if (line.startsWith("Output:")) {
      current.output = raw.replace("Output:", "").trim() + "\n";
      continue;
    }

    if (line.startsWith("Explanation:")) {
      current.explanation = raw.replace("Explanation:", "").trim() + "\n";
      continue;
    }

    // Append continuation lines
    if (current.explanation !== "") {
      current.explanation += raw + "\n";
    } else if (current.output !== "") {
      current.output += raw + "\n";
    } else {
      current.input += raw + "\n";
    }
  }

  // push last one
  if (current) {
    // trim multiline values
    current.input = current.input.trim();
    current.output = current.output.trim();
    if (current.explanation.trim() === "") delete current.explanation;
    else current.explanation = current.explanation.trim();

    examples.push(current);
  }

  return examples;
}



// extract lines starting with "-"
function extractList(text, title) {
  const raw = extract(text, title);
  const lines = raw.split("\n").map(l => l.trim());
  return lines.filter(l => l.startsWith("-")).map(l => l.substring(1).trim());
}

// ----------------------------------------------------------
//                 SEEDER MAIN
// ----------------------------------------------------------
async function main() {
  const problemsDir = path.join(process.cwd(), "problems");
  const files = fs.readdirSync(problemsDir).filter(f => f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(problemsDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");

    const meta = extractFrontMatter(raw);
    const sections = extractSections(raw);

    if (!meta.Name || !meta.Slug || !meta.Difficulty) {
      console.log("❌ Missing metadata in:", file);
      continue;
    }

    // INSERT PROBLEM
    const problemRes = await db.query(
      `
      INSERT INTO problems
      (name, slug, difficulty, leetcode_link, description, examples, constraints, perfect_explanations)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING id
      `,
      [
        meta.Name,
        meta.Slug,
        meta.Difficulty,
        meta.leetcode_link || null,
        sections.description,
        sections.examples,
        sections.constraints,
        sections.perfect_explanations
      ]
    );

    const problemId = problemRes.rows[0].id;

    // INSERT TOPICS
    for (const topicName of meta.topics || []) {
      const topicRes = await db.query(
        `INSERT INTO topics (name)
         VALUES ($1)
         ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
         RETURNING id`,
        [topicName]
      );

      const topicId = topicRes.rows[0].id;

      // INSERT PROBLEM → TOPIC
      await db.query(
        `
        INSERT INTO problem_topics (problem_id, topic_id)
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING
        `,
        [problemId, topicId]
      );
    }

    console.log("✔ Inserted:", meta.Name);
  }

  await db.end();
  console.log("\n🎉 Seeding complete!\n");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

