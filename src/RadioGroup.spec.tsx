import { render } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { RadioGroup } from "./RadioGroup";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { getErrorStates } from "./utils/errorStates";

vi.mock("@codegouvfr/react-dsfr/RadioButtons", () => ({
    RadioButtons: vi.fn(() => <div data-testid="radio-buttons"></div>),
}));

vi.mock("react", async importOriginal => {
    // needs to import the actual React module, else it does not work
    const actual = (await importOriginal()) as typeof import("react");
    return {
        ...actual,
        useId: vi.fn(() => "mock-id"),
    };
});

vi.mock("./utils/errorStates", () => ({
    getErrorStates: vi.fn(),
}));

describe("RadioGroup Component", () => {
    it("renders the radio buttons correctly", () => {
        (getErrorStates as Mock).mockReturnValue({
            state: "default",
            stateRelatedMessage: undefined,
        });

        const onCheckMock = vi.fn();

        const props = {
            id: "my-id",
            value: null,
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
            orientation: "vertical" as const, // type error if considered as a string
        };

        render(<RadioGroup {...props} />);

        expect(RadioButtons).toHaveBeenCalledWith(
            {
                id: "mock-id",
                legend: "Group Label",
                hintText: "Group Description",
                options: [
                    expect.objectContaining({
                        label: expect.any(Object),
                        hintText: "Description 1",
                        nativeInputProps: expect.objectContaining({
                            checked: false,
                            onChange: expect.any(Function),
                        }),
                    }),
                    expect.objectContaining({
                        label: expect.any(Object),
                        hintText: "Description 2",
                        nativeInputProps: expect.objectContaining({
                            checked: true,
                            onChange: expect.any(Function),
                        }),
                    }),
                ],
                state: "default",
                stateRelatedMessage: undefined,
                orientation: "vertical",
                disabled: undefined,
                "aria-labelledby": undefined,
            },
            {},
        );
    });

    it("handles errors", () => {
        const onCheckMock = vi.fn();

        const props = {
            id: "my-id",
            value: null,
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
            orientation: "vertical" as const, // type error if considered as a string
        };

        // mock getErrorStates result to simulate errors even if there was no errors in props
        (getErrorStates as Mock).mockReturnValue({
            state: "error",
            stateRelatedMessage: "Error message",
        });

        render(<RadioGroup {...props} />);

        expect(RadioButtons).toHaveBeenCalledWith(
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
