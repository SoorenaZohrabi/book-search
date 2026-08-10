import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-btn")
const loading = document.getElementById("loading");
const errorState = document.getElementById("error-state");
const errorMessage = document.getElementById("error-message");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchQuery = document.getElementById("search-query");

function showLoading() {
    loading.classList.remove("d-none");
    errorState.classList.add("d-none");
    emptyState.classList.add("d-none");
}

function hideLoading() {
    loading.classList.add("d-none");
}

function showError(message) {
    errorMessage.textContent = message;
    errorState.classList.remove("d-none");
}

function hideError() {
    errorState.classList.add("d-none");
}

async function handleSearch() {
    const query = searchInput.value.trim();

    if (!query) {
        return;
    }

    try {
        showLoading();
        hideError();

        const data = await searchBooks(query);

        hideLoading();

        resultsCount.textContent = `${data.numFound} books`;
        searchQuery.textContent = `Results for "${query}"`;

        if (data.docs.length === 0) {
            emptyState.classList.remove("d-none");
            return;
        }

        emptyState.classList.add("d-none");

        renderBooks(data.docs);

    } catch (error) {
        hideLoading();

        showError(
            "Unable to load books. Please try again."
        );

        console.error(error);
    }
}

searchButton.addEventListener("click", handleSearch);