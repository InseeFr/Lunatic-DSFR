import { describe, it /*, expect*/ } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./Button";

const defaultProps = {
    id: "",
    label: "Click me",
    disbled: false,
    onclick: () => {},
};

describe("Button", () => {
    it("Render button default", () => {
        const { getByRole } = render(<Button {...defaultProps} />);

        const findButton = getByRole("button");

        expect(findButton.getAttribute("title")).toBe("Click me");
        expect(findButton.getAttribute("value")).toBe("Click me");
        expect(findButton.getAttribute("disabled")).toBe(null);
        expect(findButton.getAttribute("class")?.split(" ")).toStrictEqual(["fr-btn"]);
        expect(findButton.textContent).toBe("");
    });

    it("Render disabled button", () => {
        const { getByRole } = render(<Button {...defaultProps} disabled />);

        const findButton = getByRole("button");

        expect(findButton.getAttribute("title")).toBe("Click me");
        expect(findButton.getAttribute("value")).toBe("Click me");
        expect(findButton.getAttribute("disabled")).toBe("");
        expect(findButton.getAttribute("class")?.split(" ")).toStrictEqual(["fr-btn"]);
    });

    it("Render delete button disabled", () => {
        const { getByRole } = render(<Button {...defaultProps} id={"delete"} disabled />);

        const findButton = getByRole("button");

        expect(findButton.getAttribute("title")).toBe("Click me");
        expect(findButton.getAttribute("value")).toBe("Click me");
        expect(findButton.getAttribute("disabled")).toBe("");
        expect(findButton.getAttribute("class")?.split(" ")).toStrictEqual([
            "fr-btn",
            "fr-icon-delete-line",
        ]);
    });

    it("Render button with children", () => {
        const { getByRole } = render(<Button {...defaultProps}>Click inside</Button>);

        const findButton = getByRole("button");
        expect(findButton.getAttribute("title")).toBe("Click me");
        expect(findButton.getAttribute("value")).toBe("Click me");
        expect(findButton.getAttribute("disabled")).toBe(null);
        expect(findButton.getAttribute("class")?.split(" ")).toStrictEqual(["fr-btn"]);
        expect(findButton.textContent).toBe("Click inside");
    });
});
