import React, { useState } from "react";

function BookItem({ title, description, imageUrl }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasDescription = Boolean(description && description.trim());
  const handleToggle = () => {
    if (!hasDescription) return;
    setShowDescription((prev) => !prev);
  };

  const handleImageError = () => {
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
        <h2 className="book-item__title">
          {title && title.trim().length > 0 ? title : "Untitled book"}
        </h2>

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
