import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
    const mockOnChange = vi.fn();
    const baseProps = {
        value: "input",
        id: "input",
        response: { name: "demo" },
        onChange: mockOnChange,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it("renders label and input", () => {
        const labelText = "Enter a number";
        const { container } = render(<Input {...baseProps} label={labelText} errors={undefined} />);

        const label = screen.getByText(labelText);
        const input = container.querySelector('input[type="text"]');

        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    it("calls onChange with parsed value", () => {
        const { container } = render(<Input {...baseProps} errors={undefined} />);

        const input = container.querySelector('input[type="text"]')!;
        fireEvent.change(input, { target: { value: "Dupont" } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith("Dupont");
    });

    it("disables input when disabled prop is true", () => {
        const { container } = render(<Input {...baseProps} disabled errors={undefined} />);

        const input = container.querySelector('input[type="text"]');
        expect(input).toBeDisabled();
    });

    it("should handle readOnly", () => {
        const { container } = render(
            <Input {...baseProps} id="number" value="toto" readOnly errors={undefined} />,
        );

        const input = container.querySelector('input[type="text"]');
        expect(input).toHaveAttribute("readonly");
        (input as HTMLElement).focus();
        expect(input).toHaveFocus();
        expect(input).toHaveValue("toto");
    });

    it("should display input value from the start when user leave input", () => {
        const setSelectionRangeMock = vi.fn();
        const { container } = render(<Input {...baseProps} />);

        const input = container.querySelector('input[type="text"]');

        fireEvent.blur(input!, {
            target: {
                ...input,
                setSelectionRange: setSelectionRangeMock,
            },
        });
        expect(setSelectionRangeMock).toHaveBeenCalledWith(0, 0);
    });
});
