const booksContainer = document.getElementById("books-container");

export function renderBooks(books) {
    booksContainer.innerHTML = "";

    books.forEach(book => {
        const card = createBookCard(book);

        booksContainer.appendChild(card);
    });
}

function createBookCard(book) {
    const col = document.createElement("div");

    col.className = "col";

    const card = document.createElement("div");

    card.className = "card h-100 shadow-sm border-0";

    const cover = document.createElement("img");

    cover.className = "card-img-top";

    cover.style.height = "320px";
    cover.style.objectFit = "cover";

    cover.src = getCoverUrl(book.cover_i);
    cover.alt = book.title || "Book cover";

    const cardBody = document.createElement("div");

    cardBody.className = "card-body d-flex flex-column";

    const title = document.createElement("h5");

    title.className = "card-title fw-bold";

    title.textContent = book.title || "Unknown title";

    const author = document.createElement("p");

    author.className = "card-text text-secondary";

    author.innerHTML = `
        <strong>Author:</strong>
        ${book.author_name?.[0] || "Unknown"}
    `;

    const year = document.createElement("p");

    year.className = "card-text text-secondary mb-3";

    year.innerHTML = `
        <strong>Published:</strong>
        ${book.first_publish_year || "Unknown"}
    `;

    const button = document.createElement("a");

    button.className = "btn btn-primary mt-auto";

    button.textContent = "View Book";

    button.href = `https://openlibrary.org${book.key}`;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

    cardBody.append(title, author, year, button);
    card.append(cover, cardBody);
    col.appendChild(card);

    return col;
}

function getCoverUrl(coverId) {
    if (!coverId) {
        return "https://placehold.co/300x450?text=No+Cover";
    }

    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}