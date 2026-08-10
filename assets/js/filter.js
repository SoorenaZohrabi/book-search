export function filterByLanguage(books, language) {
    if (language === "all") {
        return books;
    }

    return books.filter(book => {
        return book.language?.includes(language);
    });
}

export function filterByYear(books, year) {
    if (year === "all") {
        return books;
    }

    const selectedYear = Number(year);

    return books.filter(book => {
        return (
            book.first_publish_year &&
            book.first_publish_year >= selectedYear
        );
    });
}

export function sortBooks(books, sortType) {
    const sortedBooks = [...books];

    if (sortType === "title") {
        sortedBooks.sort((a, b) => {
            return (a.title || "").localeCompare(b.title || "");
        });
    }

    if (sortType === "year") {
        sortedBooks.sort((a, b) => {
            return (
                (b.first_publish_year || 0) -
                (a.first_publish_year || 0)
            );
        });
    }

    return sortedBooks;
}