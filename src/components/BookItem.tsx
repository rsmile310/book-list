import { useState } from "react";

interface BookItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

function BookItem({ title, description, imageUrl }: BookItemProps): JSX.Element {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  const hasDescription = Boolean(description && description.trim());
  const handleToggle = (): void => {
    if (!hasDescription) return;
    setShowDescription((prev) => !prev);
  };

  const handleImageError = (): void => {
    setImageError(true);
  };

  const shouldShowImage = Boolean(imageUrl && !imageError);
  const placeholderMessage = imageError 
    ? "Image unavailable" 
    : "No image";

  return (
    <article className="book-item">
      {shouldShowImage ? (
        <img
          src={imageUrl}
          alt={title ? `Cover of ${title}` : "Book cover"}
          className="book-item__image"
          onError={handleImageError}
        />
      ) : (
        <div
          className="book-item__image book-item__image--placeholder"
          aria-label={placeholderMessage}
        >
          {placeholderMessage}
        </div>
      )}

      <div className="book-item__content">
        <div className="book-item__header">
          <h2 className="book-item__title">
            {title && title.trim().length > 0 ? title : "Untitled book"}
          </h2>
        </div>

        <button
          type="button"
          className="book-item__toggle"
          onClick={handleToggle}
          disabled={!hasDescription}
          aria-expanded={showDescription}
        >
          {hasDescription
            ? showDescription
              ? "Hide description"
              : "Show description"
            : "No description"}
        </button>

        {showDescription && hasDescription && (
          <p className="book-item__description">{description}</p>
        )}
      </div>
    </article>
  );
}

export default BookItem;
