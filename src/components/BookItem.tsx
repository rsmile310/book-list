import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

interface BookItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  onUpdate: (id: number, title: string, description: string, imageUrl: string) => void;
  onDelete: (id: number) => void;
}

function BookItem({ id, title, description, imageUrl, onUpdate, onDelete }: BookItemProps): JSX.Element {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editDescription, setEditDescription] = useState<string>(description);
  const [editImageUrl, setEditImageUrl] = useState<string>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasDescription = Boolean(description && description.trim());
  const handleToggle = (): void => {
    if (!hasDescription) return;
    setShowDescription((prev) => !prev);
  };

  const handleImageError = (): void => {
    setImageError(true);
  };

  const handleEdit = (): void => {
    setIsEditing(true);
    setEditTitle(title);
    setEditDescription(description);
    setEditImageUrl(imageUrl);
    setImageError(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert('Image size should be less than 5MB');
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          setEditImageUrl(result);
          setImageError(false);
        };
        reader.onerror = () => {
          alert('Error reading image file');
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleUploadClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleSave = (): void => {
    onUpdate(
      id,
      editTitle.trim() || "Untitled book",
      editDescription.trim() || "No description",
      editImageUrl.trim()
    );
    setIsEditing(false);
  };

  const handleCancel = (): void => {
    setEditTitle(title);
    setEditDescription(description);
    setEditImageUrl(imageUrl);
    setIsEditing(false);
    setImageError(false);
  };

  const handleDelete = (): void => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      onDelete(id);
    }
  };

  const shouldShowImage = Boolean(imageUrl && !imageError);
  const placeholderMessage = imageError 
    ? "Image unavailable" 
    : "No image";

  return (
    <article className={`book-item ${isEditing ? 'book-item--editing' : ''}`}>
      {!isEditing && (
        <>
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
              <Icon icon="mdi:image-outline" className="book-item__image-placeholder-icon" />
              <span>{placeholderMessage}</span>
            </div>
          )}
        </>
      )}

      <div className="book-item__content">
        {isEditing ? (
          <div className="book-item__edit">
            <div className="book-item__edit-image-preview">
              {editImageUrl && editImageUrl.trim() ? (
                <img
                  src={editImageUrl}
                  alt="Preview"
                  className="book-item__edit-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="book-item__edit-image-placeholder">
                  <Icon icon="mdi:image-outline" className="book-item__edit-image-placeholder-icon" />
                  <span>No image</span>
                </div>
              )}
              <div className="book-item__edit-image-actions">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="book-item__file-input"
                />
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="book-item__edit-image-button"
                  title="Upload image"
                  aria-label="Upload image"
                >
                  <Icon icon="mdi:upload" />
                </button>
                {editImageUrl && editImageUrl.trim() && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditImageUrl("");
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                    className="book-item__edit-image-button book-item__edit-image-button--remove"
                    title="Remove image"
                    aria-label="Remove image"
                  >
                    <Icon icon="mdi:delete" />
                  </button>
                )}
              </div>
            </div>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="book-item__edit-title"
              placeholder="Book title"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="book-item__edit-description"
              placeholder="Book description"
              rows={4}
            />
            <div className="book-item__edit-actions">
              <button
                type="button"
                onClick={handleSave}
                className="book-item__save-button"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="book-item__cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="book-item__header">
              <h2 className="book-item__title">
                {title && title.trim().length > 0 ? title : "Untitled book"}
              </h2>
              <div className="book-item__header-actions">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="book-item__edit-button"
                  aria-label="Edit book"
                  title="Edit book"
                >
                  <Icon icon="mdi:pencil" />
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="book-item__delete-button"
                  aria-label="Delete book"
                  title="Delete book"
                >
                  <Icon icon="mdi:delete" />
                </button>
              </div>
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
          </>
        )}
      </div>
    </article>
  );
}

export default BookItem;
