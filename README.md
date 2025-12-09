# Book List Application

The Book List Application is a web application designed to help users manage their personal book collection effectively. It allows users to view their books, expand descriptions, and add new books to their collection with an intuitive and accessible interface.

Go to Live 👉 https://deloitte-react-book-list.netlify.app/

## Features

- **View Book Collection**: Display your books with cover images, titles, and descriptions in a clean card layout.

- **Expandable Descriptions**: Toggle book descriptions on and off to see more details about each book.

- **Add New Books**: Dynamically add new books to your collection with a single click.

- **Image Error Handling**: Graceful fallback display for missing or broken book cover images.

- **Accessibility**: Built with accessibility in mind, featuring ARIA labels and semantic HTML.

- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React 18.3, TypeScript 5.0

- **Build Tool**: Vite 6.0

- **State Management**: React Hooks (useState)

- **Testing**: Vitest, React Testing Library

- **Styling**: Custom CSS

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd deloitte-react-book-list
   ```

2. **Install Dependencies**: Use `npm` to install the project dependencies.

   ```bash
   npm install
   ```

3. **Run the Development Server**: Start the application in development mode.

   ```bash
   npm run dev
   ```

   Open [http://localhost:5175](http://localhost:5175) in your browser to see the app (or the port shown in your terminal).

## Usage

- **View Books**: Browse through your book collection displayed in a grid layout.

- **Read Descriptions**: Click the "Show description" button on any book card to view its full description. Click again to hide it.

- **Add a New Book**: Click the "+ Add book" button in the header to add a new book to your collection. New books are automatically generated with random titles and descriptions.

- **Handle Missing Images**: If a book cover image fails to load, a placeholder message will be displayed automatically.

## Components Overview

### Book Management Components

- **BookList.tsx**: Main container component that manages the book collection state, handles adding new books, and renders the list of book items.

- **BookItem.tsx**: Individual book card component that displays book information including cover image, title, and expandable description with toggle functionality.

### Application Components

- **App.tsx**: Root application component that wraps the BookList component.

- **main.tsx**: Application entry point that renders the App component into the DOM.

### Testing

- **BookItem.test.tsx**: Test suite for the BookItem component, covering description toggle functionality.

## Project Structure

```
src/
├── components/
│   ├── BookItem.tsx      # Individual book card component
│   └── BookList.tsx      # Main book list container
├── __tests__/
│   └── BookItem.test.tsx # Component tests
├── App.tsx               # Root application component
├── main.tsx              # Application entry point
├── setupTests.ts         # Test configuration
└── styles.css            # Global styles
```

## Development

The project uses Vite for fast development with hot module replacement. Changes to your code will reflect immediately in the browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. Preview the production build:

```bash
npm run preview
```

### Run Tests

```bash
npm test
```

