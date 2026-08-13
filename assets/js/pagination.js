import * as uiElements from "./elements.js";
import * as uiStats from "./stats.js";
import { currentStats, getBooks } from "./app.js";
import { renderBooks } from "./render.js";

export async function prePage() {
    if (currentStats.page === 1) {
        return;
    }
    currentStats.page--;
    const data = await getBooks();
    currentStats.books = data.docs;
    renderBooks(currentStats.books);
    uiElements.currentPage.innerText = currentStats.page;
}

export async function nextPage() {
    currentStats.page++;
    if (currentStats.page === currentStats.pages) {
        currentStats.page--;
        return;
    }
    const data = await getBooks();
    currentStats.books = data.docs;
    renderBooks(currentStats.books);
    uiElements.currentPage.innerText = currentStats.page;
}