import * as uiElements from "./elements.js";
import * as uiStats from "./stats.js";
import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";
import { nextPage, prePage } from "./pagination.js";

export const currentStats = { books: [], page: 1, pages: 1 };

export async function getBooks() {
    const query = uiElements.searchInput.value.trim();

    if (!query) {
        return;
    }
    try {
        uiStats.showLoading();
        uiStats.hideError();

        const data = await searchBooks(query, currentStats.page, uiElements.languageFilter.value, uiElements.sortFilter.value, uiElements.yearFilter.value);

        uiStats.hideLoading();

        uiElements.resultsCount.textContent = `${data.numFound} books`;
        uiElements.searchQuery.textContent = `Results for "${query}"`;

        if (data.docs.length === 0) {
            uiElements.emptyState.classList.remove("d-none");
            return;
        } else {
            return data;
        }
    } catch (error) {
        uiStats.hideLoading();

        uiStats.showError("Unable to load books. Please try again.");

        console.error(error);
    }
}

async function handleSearch() {
    currentStats.page = 1;
    const data = await getBooks();
    currentStats.books = data.docs;
    uiElements.emptyState.classList.add("d-none");
    renderBooks(currentStats.books);
    currentStats.pages = data.numFound / 20;

    if (data.numFound > 20) {
        uiStats.showPagination();
    } else {
        uiStats.hidePagination();
    }
}

uiElements.searchButton.addEventListener("click", handleSearch);
uiElements.languageFilter.addEventListener("change", handleSearch);
uiElements.yearFilter.addEventListener("change", handleSearch);
uiElements.sortFilter.addEventListener("change", handleSearch);
uiElements.nextPage.addEventListener("click", nextPage);
uiElements.prePage.addEventListener("click", prePage);

uiElements.searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        handleSearch();
    }
});

uiElements.clearFilters.addEventListener("click", () => {
    if (uiElements.languageFilter.value === "" &&
        uiElements.yearFilter.value === "all" &&
        uiElements.sortFilter.value === "") {
        return;
    }

    uiElements.languageFilter.value = "";
    uiElements.yearFilter.value = "all";
    uiElements.sortFilter.value = "";

    handleSearch();
    uiElements.currentPage.innerText = currentStats.page;
});