import * as uiElements from "./elements.js";

export function showLoading() {
    uiElements.loading.classList.remove("d-none");
    uiElements.errorState.classList.add("d-none");
    uiElements.emptyState.classList.add("d-none");
}

export function hideLoading() {
    uiElements.loading.classList.add("d-none");
}

export function showError(message) {
    uiElements.errorMessage.textContent = message;
    uiElements.errorState.classList.remove("d-none");
}

export function hideError() {
    uiElements.errorState.classList.add("d-none");
}