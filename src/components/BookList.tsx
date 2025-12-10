import { useState } from "react";
import { Icon } from "@iconify/react";
import BookItem from "./BookItem";

interface Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    description:
      "A classic American novel set in the Jazz Age, following Nick Carraway's encounters with the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
    imageUrl: "/images/book1.webp"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    description:
      "A coming-of-age story set in the American South, where young Scout Finch learns about racial inequality and moral growth through her father's defense of a Black man falsely accused of rape.",
    imageUrl: "/images/book2.webp"
  },
  {
    id: 3,
    title: "1984",
    description: "A dystopian novel depicting a totalitarian society under constant surveillance, where Winston Smith rebels against the oppressive regime of Big Brother.",
    imageUrl: "/images/book3.webp"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    description:
      "Jane Austen's timeless romance novel about Elizabeth Bennet and Mr. Darcy, exploring themes of love, marriage, class, and social expectations in 19th-century England.",
    imageUrl: "/images/book4.webp"
  }
];

let nextId = initialBooks.length + 1;
let newBookCounter = 1;

function createNewBook(): Book {
  const id = nextId++;
  const title = `New Book ${newBookCounter++}`;
  return {
    id,
    title,
    description: "No description",
    imageUrl: ""
  };
}

function BookList(): JSX.Element {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = (): void => {
    setBooks((prev) => [...prev, createNewBook()]);
  };

  const handleUpdateBook = (id: number, updatedTitle: string, updatedDescription: string, updatedImageUrl: string): void => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, title: updatedTitle, description: updatedDescription, imageUrl: updatedImageUrl }
          : book
      )
    );
  };

  const handleDeleteBook = (id: number): void => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <section className="book-list" aria-label="Book list">
      <header className="book-list__header">
        <div>
          <h1 className="book-list__title">Book List</h1>
          <p className="book-list__subtitle">
            Discover and manage your personal collection of books. Browse through your favorite titles and add new ones to your library.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddBook}
          className="book-list__add-button"
        >
          <Icon icon="mdi:plus" className="book-list__add-button-icon" />
          <span>Add book</span>
        </button>
      </header>

      <ul className="book-list__items">
        {books.map((book) => (
          <li key={book.id} className="book-list__item">
            <BookItem
              id={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
              onUpdate={handleUpdateBook}
              onDelete={handleDeleteBook}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
