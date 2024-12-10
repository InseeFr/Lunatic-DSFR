import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

const defaultProps = {
    items: [
        { label: "Item 1", body: "This is the body of item 1" },
        { label: "Item 2", body: "This is the body of item 2" },
        { label: "Item 3", body: null },
    ],
    id: "",
    value: "",
    handleChanges: () => {},
};

describe("Accordion", () => {
    it("renders only items with a body", () => {
        const { getAllByRole } = render(<Accordion {...defaultProps} />);

        const labels = getAllByRole("button");
        expect(labels.length).toBe(2);
        expect(labels[0].textContent).toBe("Item 1");
        expect(labels[1].textContent).toBe("Item 2");
    });

    it("renders the body content correctly", () => {
        const { getByText } = render(<Accordion {...defaultProps} />);

        expect(getByText("This is the body of item 1")).toBeInTheDocument();
        expect(getByText("This is the body of item 2")).toBeInTheDocument();
    });
});
