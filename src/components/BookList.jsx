import React, { useState } from "react";
import BookItem from "./BookItem";

const initialBooks = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/book1.webp"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/book2.webp"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/book3.webp"
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/book4.webp"
  }
];

let nextId = initialBooks.length + 1;

function createNewBook() {
  const id = nextId++;
  return {
    id,
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: ""
  };
}

function BookList() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    setBooks((prev) => [...prev, createNewBook()]);
  };

  return (
    <section className="book-list" aria-label="Book list">
      <header className="book-list__header">
        <div>
          <h1 className="book-list__title">Book List</h1>
          <p className="book-list__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddBook}
          className="book-list__add-button"
        >
          + Add book
        </button>
      </header>

      <ul className="book-list__items">
        {books.map((book) => (
          <li key={book.id} className="book-list__item">
            <BookItem
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
