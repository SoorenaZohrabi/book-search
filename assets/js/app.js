import * as uiElements from "./elements.js";
import * as uiStats from "./stats.js";
import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";
let books = [];

async function handleSearch(filter) {
    const query = uiElements.searchInput.value.trim();

    if (!query) {
        return;
    }

    try {
        uiStats.showLoading();
        uiStats.hideError();

        let data;

        if (filter) {
            data = await searchBooks(query, uiElements.languageFilter.value, uiElements.sortFilter.value, uiElements.yearFilter.value);
        } else {
            data = await searchBooks(query);
        }

        uiStats.hideLoading();

        uiElements.resultsCount.textContent = `${data.numFound} books`;
        uiElements.searchQuery.textContent = `Results for "${query}"`;

        if (data.docs.length === 0) {
            uiElements.emptyState.classList.remove("d-none");
            return;
        }

        uiElements.emptyState.classList.add("d-none");

        books = data.docs;

        renderBooks(books);
    } catch (error) {
        uiStats.hideLoading();

        uiStats.showError("Unable to load books. Please try again.");

        console.error(error);
    }
}

uiElements.searchButton.addEventListener("click", handleSearch.bind(this, 0));
uiElements.languageFilter.addEventListener("change", handleSearch.bind(this, 1));
uiElements.yearFilter.addEventListener("change", handleSearch.bind(this, 1));
uiElements.sortFilter.addEventListener("change", handleSearch.bind(this, 1));

uiElements.searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        handleSearch();
    }
});

uiElements.clearFilters.addEventListener("click", () => {
    uiElements.languageFilter.value = "";
    uiElements.yearFilter.value = "all";
    uiElements.sortFilter.value = "";
    
    uiElements.resultsCount.textContent = `${data.numFound} books`;
    renderBooks(books);
});