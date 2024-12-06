import { render } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { CheckboxGroup } from "./CheckboxGroup";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import { getErrorStates } from "./utils/errorStates";

vi.mock("@codegouvfr/react-dsfr/Checkbox", () => ({
    Checkbox: vi.fn(() => <div data-testid="mock-checkbox" />),
}));

vi.mock("@codegouvfr/react-dsfr/Input", () => ({
    __esModule: true,
    default: vi.fn(() => <div data-testid="mock-input" />),
}));

vi.mock("./utils/errorStates", () => ({
    getErrorStates: vi.fn(),
}));

vi.mock("react", () => ({
    useId: vi.fn(() => "mock-id"),
}));

vi.mock("./Question", () => ({
    useQuestionId: vi.fn(() => "mock-question-id"),
}));

describe("CheckboxGroup Component", () => {
    it("renders the Checkbox with correct options", () => {
        (getErrorStates as Mock).mockReturnValue({
            state: "default",
            stateRelatedMessage: undefined,
        });

        const onCheckMock = vi.fn();

        const props = {
            id: "my-id",
            options: [
                {
                    id: "option1",
                    label: "Option 1",
                    name: "option1",
                    checked: false,
                    onCheck: onCheckMock,
                    description: "Description 1",
                },
                {
                    id: "option2",
                    label: "Option 2",
                    name: "option2",
                    checked: true,
                    onCheck: onCheckMock,
                    description: "Description 2",
                },
            ],
            label: "Group Label",
            description: "Group Description",
            disabled: false,
            orientation: "vertical" as const, // type error if considered as a string
        };

        render(<CheckboxGroup {...props} />);

        expect(Checkbox).toHaveBeenCalledWith(
            {
                id: "mock-id",
                legend: "Group Label",
                hintText: "Group Description",
                disabled: false,
                options: [
                    expect.objectContaining({
                        label: expect.any(Object),
                        hintText: "Description 1",
                        nativeInputProps: expect.objectContaining({
                            name: "option1",
                            checked: false,
                            onChange: expect.any(Function),
                        }),
                    }),
                    expect.objectContaining({
                        label: expect.any(Object),
                        hintText: "Description 2",
                        nativeInputProps: expect.objectContaining({
                            name: "option2",
                            checked: true,
                            onChange: expect.any(Function),
                        }),
                    }),
                ],
                state: "default",
                stateRelatedMessage: undefined,
                orientation: "vertical",
                "aria-labelledby": undefined,
            },
            {},
        );
    });

    it("handles error state and sets aria attributes on options", () => {
        const onCheckMock = vi.fn();

        const props = {
            id: "my-id",
            options: [
                {
                    id: "option1",
                    label: "Option 1",
                    name: "option1",
                    checked: false,
                    onCheck: onCheckMock,
                    description: "Description 1",
                },
            ],
            label: "Group Label",
            description: "Group Description",
            disabled: false,
            orientation: "vertical" as const, // type error if considered as a string
        };

        // mock getErrorStates result to simulate errors even if there was no errors in props
        (getErrorStates as Mock).mockReturnValue({
            state: "error",
            stateRelatedMessage: "Error message",
        });

        render(<CheckboxGroup {...props} />);

        expect(Checkbox).toHaveBeenCalledWith(
            expect.objectContaining({
                options: [
                    expect.objectContaining({
                        nativeInputProps: expect.objectContaining({
                            "aria-invalid": true,
                            "aria-errormessage": "mock-id-messages",
                        }),
                    }),
                ],
                state: "error",
                stateRelatedMessage: "Error message",
            }),
            {},
        );
    });
});
