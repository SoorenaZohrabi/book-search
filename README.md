# 📚 Bookena

Bookena is a simple book discovery web application built with **Vanilla JavaScript** and the **Open Library API**.

The project allows users to search for books, filter and sort results, and browse books through a clean Bootstrap-based interface.

---

## 🌐 Demo

🔗 **[Bookena](https://soorenazohrabi.github.io/book-search/)**

---

## ✨ Features

* 🔎 Search books by title, author, or subject
* 📚 Fetch book data from the Open Library API
* 🖼️ Display book covers
* ✍️ Display book title and author
* 📅 Display publication year
* 🌐 Filter books by language
* 📆 Filter books by publication year
* 🔤 Sort books by title
* 📅 Sort books by publication year
* 🔄 Clear filters
* ⏳ Loading state
* ⚠️ Error handling
* 📭 Empty search results state
* 🔢 Display search result count
* 📄 Pagination
* 🔗 Open the book's Open Library page

---

## 🛠️ Technologies

* HTML5
* JavaScript (ES6+)
* Bootstrap 5
* REST API
* Open Library API

---

## 🌐 API

Bookena uses the **Open Library Search API** to retrieve book information.

[Open Library](https://openlibrary.org)

Example request:

```text
https://openlibrary.org/search.json?q=javascript
```

The application uses information such as:

```javascript
book.title
book.author_name
book.first_publish_year
book.cover_i
book.language
book.key
```

Book covers are retrieved using the Open Library Covers API.

---

## 📁 Project Structure

```text
bookena/
│
├── index.html
│
├── assets/
│   └── js/
│       ├── app.js
│       ├── api.js
│       ├── filter.js
│       └── render.js
```

---

## 🧩 JavaScript Architecture

Bookena uses a modular JavaScript structure where each module has a specific responsibility.

### `app.js`

The main application controller.

Responsible for:

* Managing application state
* Handling user events
* Connecting API, filtering, and rendering
* Managing loading and error states
* Handling pagination

### `api.js`

Responsible for communication with the Open Library API.

Main function:

```javascript
searchBooks(query, page)
```

### `filter.js`

Contains book filtering and sorting logic.

Responsibilities include:

```javascript
filterByLanguage()
filterByYear()
sortBooks()
```

### `render.js`

Responsible for updating the DOM.

Main responsibilities:

* Rendering books
* Creating Bootstrap cards
* Creating book cover images
* Creating book information
* Creating links to Open Library

---

## 🔄 Application Flow

```text
User
 │
 ▼
Search Input
 │
 ▼
app.js
 │
 ▼
api.js
 │
 ▼
Open Library API
 │
 ▼
Book Data
 │
 ▼
filter.js
 │
 ├── Language Filter
 ├── Year Filter
 └── Sorting
 │
 ▼
render.js
 │
 ▼
DOM
 │
 ▼
Book Cards
```

---

## 🔎 Search Flow

```text
User enters search
        ↓
Validate input
        ↓
Call Open Library API
        ↓
Receive JSON response
        ↓
Extract books
        ↓
Apply filters
        ↓
Sort results
        ↓
Render cards
```

---

## 📖 Book Card

Each book is displayed with:

* Book cover
* Title
* Author
* Publication year
* Link to Open Library

Example:

<img src="./assets/images/book-card-preview.png" alt="Bookena Book Card Preview" width="300"/>