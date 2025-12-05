export default async function toggleBookmark(id, book) {
    const response = await fetch("/api/bookmark", {
        method: book ? "POST":"DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            problem_id: id
        }),
    });

    if (!response.ok) {
        alert("The bookmark was unsuccessful.\napologies");
        const errorData = await response.json();
        console.error("Error in bookmarking: ", errorData.message);
        return false;
    }

    return true;
}