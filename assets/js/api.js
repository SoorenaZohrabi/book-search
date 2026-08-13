const API_URL = "https://openlibrary.org/search.json";

export async function searchBooks(query, page = 1, language, sort, fromYear, toYear = 2026, limit = 20) {
    const params = new URLSearchParams();

    let searchQuery = query;

    if (fromYear) {
        searchQuery += ` first_publish_year:[${fromYear} TO ${toYear}]`;
    }

    params.set("q", searchQuery);

    if (language) {
        params.set("lang", language);
    }

    if (sort) {
        params.set("sort", sort);
    }

    params.set("limit", limit);
    params.set("page", page);

    const url = `${API_URL}?${params}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    return await response.json();
}