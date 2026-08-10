import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-btn")

async function handleSearch() {
    const query = searchInput.value.trim();

    if (!query) {
        return;
    }

    const data = await searchBooks(query);

    renderBooks(data.docs);
}

searchButton.addEventListener("click", handleSearch);