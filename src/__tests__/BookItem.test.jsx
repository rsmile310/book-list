import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookItem from "../components/BookItem";

describe("BookItem", () => {
  it("toggles description visibility when clicking the button", () => {
    const descriptionText = "A simple test description for this book.";
    render(
      <BookItem
        title="Test Book"
        description={descriptionText}
        imageUrl=""
      />
    );

    expect(screen.queryByText(descriptionText)).toBeNull();

    const toggleButton = screen.getByRole("button", {
      name: /show description/i
    });

    fireEvent.click(toggleButton);

    expect(screen.getByText(descriptionText)).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(screen.queryByText(descriptionText)).toBeNull();
  });
});
