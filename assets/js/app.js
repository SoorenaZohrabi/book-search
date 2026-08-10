import { searchBooks } from "./api.js";

const data = await searchBooks("javascript");

console.log(data);