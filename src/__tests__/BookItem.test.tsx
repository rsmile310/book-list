import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "../components/BookItem";

describe("BookItem", () => {
  it("toggles description visibility when clicking the button", () => {
    const descriptionText = "A simple test description for this book.";
    const mockOnUpdate = vi.fn();
    const mockOnDelete = vi.fn();
    render(
      <BookItem
        id={1}
        title="Test Book"
        description={descriptionText}
        imageUrl=""
        onUpdate={mockOnUpdate}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {
      name: /hide description/i
    });

    fireEvent.click(toggleButton);

    expect(screen.queryByText(descriptionText)).toBeNull();

    fireEvent.click(toggleButton);

    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });
});
