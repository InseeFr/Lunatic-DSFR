import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Datepicker } from "./Datepicker"; // Assuming your Datepicker component is in this file

vi.mock("./shared/CustomInputDsfr", () => ({
    CustomInputDsfr: vi.fn(({ value, onChange, dsfrProps, id }) => (
        <div>
            <label htmlFor={id}>{dsfrProps?.label}</label>
            <input id={id} value={value} onChange={onChange} data-testid="custom-input" />
        </div>
    )),
}));

describe("Datepicker Component", () => {
    const onChangeMock = vi.fn();
    const defaultProps = {
        id: "my-id",
        value: "2024-01-01",
        response: { name: "date" },
        onChange: onChangeMock,
    };

    it("renders the Datepicker fields correctly for format YYYY-MM-DD", () => {
        const { getByLabelText } = render(<Datepicker {...defaultProps} dateFormat={"YYYY-MM-DD"} />);

        // Check that the input fields for day, month, and year are rendered
        expect(getByLabelText("Année")).toBeInTheDocument();
        expect(getByLabelText("Mois")).toBeInTheDocument();
        expect(getByLabelText("Jour")).toBeInTheDocument();
    });

    it("renders the Datepicker fields correctly for format YYYY-MM", () => {
        const { getByLabelText, queryByLabelText } = render(
            <Datepicker {...defaultProps} dateFormat={"YYYY-MM"} />,
        );

        // Check that the only input fields for month, and year are rendered
        expect(getByLabelText("Année")).toBeInTheDocument();
        expect(getByLabelText("Mois")).toBeInTheDocument();

        expect(queryByLabelText("Jour")).not.toBeInTheDocument();
    });

    it("renders the Datepicker fields correctly for format YYYY", () => {
        const { getByLabelText, queryByLabelText } = render(
            <Datepicker {...defaultProps} dateFormat={"YYYY"} />,
        );

        // Check that only the input field for year is rendered
        expect(getByLabelText("Année")).toBeInTheDocument();

        expect(queryByLabelText("Mois")).not.toBeInTheDocument();
        expect(queryByLabelText("Jour")).not.toBeInTheDocument();
    });

    it("handle change correctly for format YYYY-MM-DD", () => {
        const { getByLabelText } = render(<Datepicker {...defaultProps} dateFormat="YYYY-MM-DD" />);

        const yearInput = getByLabelText("Année");
        const monthInput = getByLabelText("Mois");
        const dayInput = getByLabelText("Jour");

        // handle valid dates
        fireEvent.change(yearInput, { target: { value: "2025" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025-01-01");
        fireEvent.change(monthInput, { target: { value: "02" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025-02-01");
        fireEvent.change(dayInput, { target: { value: "05" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025-02-05");

        // handle invalid date. Ex : 2025-02-30
        fireEvent.change(dayInput, { target: { value: "30" } });
        expect(onChangeMock).toHaveBeenCalledWith(null);

        // handle year with less than 4 digits, and month/day with 1 digit
        fireEvent.change(yearInput, { target: { value: "25" } });
        fireEvent.change(monthInput, { target: { value: "5" } });
        fireEvent.change(dayInput, { target: { value: "8" } });
        expect(onChangeMock).toHaveBeenCalledWith("0025-05-08");
    });

    it("handle change correctly for format YYYY-MM", () => {
        const { getByLabelText } = render(
            <Datepicker {...defaultProps} dateFormat="YYYY-MM" value="2024-01" />,
        );

        const yearInput = getByLabelText("Année");
        const monthInput = getByLabelText("Mois");

        fireEvent.change(yearInput, { target: { value: "2025" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025-01");
        fireEvent.change(monthInput, { target: { value: "02" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025-02");

        // handle year with less than 4 digits, and month with 1 digit
        fireEvent.change(yearInput, { target: { value: "25" } });
        fireEvent.change(monthInput, { target: { value: "5" } });
        expect(onChangeMock).toHaveBeenCalledWith("0025-05");
    });

    it("handle change correctly for format YYYY", () => {
        const { getByLabelText } = render(
            <Datepicker {...defaultProps} dateFormat="YYYY" value="2024" />,
        );

        const yearInput = getByLabelText("Année");

        fireEvent.change(yearInput, { target: { value: "2025" } });
        expect(onChangeMock).toHaveBeenCalledWith("2025");

        // handle year with less than 4 digits
        fireEvent.change(yearInput, { target: { value: "25" } });
        expect(onChangeMock).toHaveBeenCalledWith("0025");
    });
});
