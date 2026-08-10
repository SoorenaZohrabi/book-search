import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";
import { filterByLanguage, filterByYear, sortBooks } from "./filter.js";

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-btn")
const loading = document.getElementById("loading");
const errorState = document.getElementById("error-state");
const errorMessage = document.getElementById("error-message");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchQuery = document.getElementById("search-query");
const languageFilter = document.getElementById("language-filter");
const yearFilter = document.getElementById("year-filter");
const sortFilter = document.getElementById("sort-filter");
const clearFilters = document.getElementById("clear-filters");

let books = [];

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

        books = data.docs;

        renderBooks(books);

    } catch (error) {
        hideLoading();

        showError("Unable to load books. Please try again.");

        console.error(error);
    }
}

function applyFilters() {
    let filteredBooks = [...books];

    filteredBooks = filterByLanguage(filteredBooks, languageFilter.value);
    filteredBooks = filterByYear(filteredBooks, yearFilter.value);
    filteredBooks = sortBooks(filteredBooks, sortFilter.value);

    resultsCount.textContent = `${filteredBooks.length} books`;
    renderBooks(filteredBooks);
}

searchButton.addEventListener("click", handleSearch);
languageFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

clearFilters.addEventListener("click", () => {
    languageFilter.value = "all";
    yearFilter.value = "all";
    sortFilter.value = "relevance";

    renderBooks(books);
});