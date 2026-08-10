const API_URL = "https://openlibrary.org/search.json";

export async function searchBooks(query, page = 1) {
    const url = `${API_URL}?q=${encodeURIComponent(query)}&page=${page}&limit=20`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    return data;
}