import { useState } from "react";
import BookItem from "./BookItem";

interface Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  pages: number;
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    description:
      "A classic American novel set in the Jazz Age, following Nick Carraway's encounters with the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
    imageUrl: "/images/book1.webp",
    year: 1925,
    pages: 180
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    description:
      "A coming-of-age story set in the American South, where young Scout Finch learns about racial inequality and moral growth through her father's defense of a Black man falsely accused of rape.",
    imageUrl: "/images/book2.webp",
    year: 1960,
    pages: 281
  },
  {
    id: 3,
    title: "1984",
    description: "A dystopian novel depicting a totalitarian society under constant surveillance, where Winston Smith rebels against the oppressive regime of Big Brother.",
    imageUrl: "/images/book3.webp",
    year: 1949,
    pages: 328
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    description:
      "Jane Austen's timeless romance novel about Elizabeth Bennet and Mr. Darcy, exploring themes of love, marriage, class, and social expectations in 19th-century England.",
    imageUrl: "/images/book4.webp",
    year: 1813,
    pages: 432
  }
];

let nextId = initialBooks.length + 1;

const bookData = [
  {
    title: "The Catcher in the Rye",
    description: "A controversial coming-of-age story about Holden Caulfield, a teenager navigating the complexities of adolescence and society.",
    year: 1951,
    pages: 234
  },
  {
    title: "Moby Dick",
    description: "An epic tale of Captain Ahab's obsessive quest for revenge against the white whale, Moby Dick.",
    year: 1851,
    pages: 635
  },
  {
    title: "War and Peace",
    description: "A sweeping historical novel set during Napoleon's invasion of Russia, exploring the impact of war on multiple families.",
    year: 1869,
    pages: 1225
  },
  {
    title: "Jane Eyre",
    description: "A Gothic romance following the life of the orphaned Jane Eyre as she becomes a governess and falls in love.",
    year: 1847,
    pages: 464
  },
  {
    title: "The Odyssey",
    description: "An ancient Greek epic poem recounting Odysseus's ten-year journey home after the Trojan War.",
    year: -800,
    pages: 541
  },
  {
    title: "Crime and Punishment",
    description: "A psychological thriller about a student who commits murder and grapples with guilt and redemption.",
    year: 1866,
    pages: 671
  },
  {
    title: "The Lord of the Rings",
    description: "An epic fantasy trilogy following the quest to destroy the One Ring and save Middle-earth from darkness.",
    year: 1954,
    pages: 1178
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    description: "The first book in the magical series about a young wizard discovering his destiny at Hogwarts School.",
    year: 1997,
    pages: 320
  },
  {
    title: "The Kite Runner",
    description: "A powerful story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's turbulent history.",
    year: 2003,
    pages: 371
  },
  {
    title: "The Alchemist",
    description: "A philosophical novel about a young Andalusian shepherd's journey to find a treasure and discover his personal legend.",
    year: 1988,
    pages: 163
  }
];

function createNewBook(): Book {
  const id = nextId++;
  const randomIndex = Math.floor(Math.random() * bookData.length);
  const book = bookData[randomIndex];
  return {
    id,
    title: book.title,
    description: book.description,
    year: book.year,
    pages: book.pages,
    imageUrl: ""
  };
}

function BookList(): JSX.Element {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = (): void => {
    setBooks((prev) => [...prev, createNewBook()]);
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
              year={book.year}
              pages={book.pages}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
