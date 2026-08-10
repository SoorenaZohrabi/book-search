import { searchBooks } from "./api.js";
import { renderBooks } from "./render.js";

const data = await searchBooks("javascript");

renderBooks(data.docs);