// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "The woods",
    author: "john freeman",
    year: 1984
  };
  console.log("Book Object:", book);
// Task 2: Access and log the title and author properties of the book object.
  console.log("Title:", book.title);
  console.log("Author:", book.author);
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.title_author = function() {
    return `${book.title}is written by ${book.author}`;
  };
  console.log( book.title_author());
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
  };
  book.updateYear(2020);
  console.log("Updated year of the book is :", book.year);
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "City Library",
    books: [
      { title: "Gitanjali", genre: "suspens", year: 1910 },
      { title: "The Guide", genre: "self help", year: 1958 },
      { title: "The God of Small Things", genre: "religioud", year: 1997 }
    ]
  };
  console.log("Library Object:", library);
  
  // Task 6: Access and log the name of the library and the titles of all the books in the library.
  console.log("Library Name:", library.name);
  library.books.forEach(book => console.log("Book genre:", book.genre));
// Task 7: Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
  book.title_author = function() {
    return `${book.title}is written in ${book.year}`;
  };
  console.log( book.title_author());
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
//feature request
let book_iteration = {
    title: "The good deed",
    author: "paul goodman",
    year: 1989
  };
  for (let key in book_iteration) {
    console.log(`${key}: ${book_iteration[key]}`);
  }
