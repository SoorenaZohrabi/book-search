# 📚 Bookena

Bookena is a simple book discovery web application built with **Vanilla JavaScript** and the **Open Library API**.

The project allows users to search for books, filter and sort results, and browse books through a clean Bootstrap-based interface.

---

## 🌐 Demo

🔗 **[Bookena](https://bookena.soorenadev.ir)**

---

## ✨ Features

* 🔎 Search books by title, author, or subject
* 📚 Fetch book data from the Open Library API
* 🖼️ Display book covers
* ✍️ Display book title and author
* 📅 Display publication year
* 🌐 Filter books by language
* 📆 Filter books by publication year
* 🔤 Sort books
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
│       ├── api.js
│       ├── app.js
│       ├── elements.js
│       ├── pagination.js
│       ├── render.js
│       └── stats.js
```

---

## 🧩 JavaScript Architecture

Bookena uses a modular JavaScript structure where each module has a specific responsibility.

### `api.js`

Responsible for communication with the Open Library API.

Main function:

```javascript
searchBooks(query, page, language, sort, fromYear, toYear , limit)
```

### `app.js`

The main application controller.

Responsible for:

* Handling user events
* Connecting API, filtering, and rendering
* Managing loading and error states

### `elements.js`

The `elements.js` module centralizes references to the application's DOM elements. It provides reusable references for the search input, search button, filters, loading state, error state, empty state and other UI elements.

This module helps keep DOM access organized and allows other modules to import the elements they need without repeatedly using `document.getElementById()`.

**Responsibilities:**
- Store references to search-related elements
- Store references to filter controls
- Store references to loading, error, and empty states
- Store references to result and statistics elements
- Provide shared DOM references to other modules

### `pagination.js`

The `pagination.js` module manages navigation between pages of search results. It handles changing the current page, fetching the corresponding books, updating the displayed results, and synchronizing the current page indicator in the UI.

**Responsibilities:**
- Navigate to the previous and next pages
- Prevent navigation beyond available pages
- Update the current page state
- Fetch new book data when the page changes
- Refresh the book list after pagination
- Update the current page display in the interface

### `render.js`

Responsible for updating the DOM.

Main responsibilities:

* Rendering books
* Creating Bootstrap cards
* Creating book cover images
* Creating book information
* Creating links to Open Library

### `uiState.js`

The `uiState.js` module manages the visibility and state of different UI components. It provides reusable functions for displaying and hiding loading indicators, error messages, and pagination controls.

**Responsibilities:**
- Show and hide the loading state during API requests
- Display and clear error messages
- Control the visibility of empty states
- Show and hide pagination controls
- Keep UI state changes consistent across the application

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