# Book List Application

The Book List Application is a modern, feature-rich web application designed to help users manage their personal book collection effectively. It provides a comprehensive interface for viewing, adding, editing, and deleting books with an intuitive and accessible design.

Go to Live 👉 https://deloitte-react-book-list.netlify.app/

## Features

### Core Functionality

- **View Book Collection**: Display your books with cover images, titles, and descriptions in a clean, professional card layout.

- **Expandable Descriptions**: Descriptions are shown by default and can be toggled on and off to see more details about each book.

- **Add New Books**: Dynamically add new books to your collection with a single click. New books are automatically named "New Book 1", "New Book 2", etc.

### Book Management

- **Edit Books**: Edit book titles, descriptions, and cover images with an intuitive inline editing interface.
  - Click the edit icon to enter edit mode
  - Modify title and description fields
  - Upload new cover images from your computer
  - Preview images before saving
  - Save or cancel changes

- **Delete Books**: Remove books from your collection with a confirmation dialog to prevent accidental deletions.

- **Image Upload**: Upload book cover images directly from your computer with support for:
  - Multiple image formats (JPEG, PNG, WebP, etc.)
  - File size validation (max 5MB)
  - Real-time image preview
  - Base64 encoding for storage

- **Image Error Handling**: Graceful fallback display for missing or broken book cover images with informative placeholder messages.

- **Accessibility**: Built with accessibility in mind, featuring ARIA labels, semantic HTML, and keyboard navigation support.

- **Responsive Design**: Optimized for both desktop and mobile devices with adaptive layouts.

## Technologies Used

- **Frontend**: React 18.3, TypeScript 5.0

- **Build Tool**: Vite 6.0

- **State Management**: React Hooks (useState, useRef)

- **Icons**: Iconify React (@iconify/react) - Material Design Icons

- **Testing**: Vitest, React Testing Library

- **Styling**: Custom CSS with modern design patterns (gradients, backdrop blur, box shadows)

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

### Viewing Books

- **Browse Collection**: View your book collection displayed in a clean grid layout with cover images, titles, and descriptions.

- **Read Descriptions**: Book descriptions are shown by default. Click the "Hide description" button to collapse it, or "Show description" to expand it again.

### Managing Books

- **Add a New Book**: 
  - Click the "Add book" button (with plus icon) in the header
  - A new book will be added with the title "New Book 1", "New Book 2", etc.
  - New books have "No description" by default

- **Edit a Book**:
  1. Click the edit icon (pencil) on any book card
  2. The book enters edit mode with form fields
  3. Modify the title, description, or upload a new image
  4. Click "Save" to apply changes or "Cancel" to discard

- **Upload Book Cover**:
  - In edit mode, hover over the image preview area
  - Click the upload icon button to select an image from your computer
  - The image will be previewed immediately
  - Click the delete icon to remove the image

- **Delete a Book**:
  - Click the delete icon (trash) on any book card
  - Confirm the deletion in the dialog
  - The book will be permanently removed from your collection

- **Handle Missing Images**: If a book cover image fails to load, a placeholder with an icon and message will be displayed automatically.

## Components Overview

### Book Management Components

- **BookList.tsx**: Main container component that manages the book collection state. Handles:
  - Adding new books to the collection
  - Updating existing books (title, description, image)
  - Deleting books from the collection
  - Rendering the list of book items

- **BookItem.tsx**: Individual book card component that displays book information and provides:
  - Book cover image display with error handling
  - Title and description display
  - Expandable/collapsible descriptions (shown by default)
  - Edit mode with form fields for title, description, and image upload
  - Image upload functionality with preview
  - Delete functionality with confirmation
  - Professional icon-based action buttons

### Application Components

- **App.tsx**: Root application component that wraps the BookList component.

- **main.tsx**: Application entry point that renders the App component into the DOM.

### Testing

- **BookItem.test.tsx**: Test suite for the BookItem component, covering description toggle functionality and component rendering.

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




