export default async function fetchSubmissions(slug) {
    try {
        console.log("Going to fetch")
        const response = await fetch(`/api/submissions/${slug}`);
        const data = await response.json();

        return data.submissions;
    } catch (err) {
        throw new Error("Cannot fetch right now")
    }
}