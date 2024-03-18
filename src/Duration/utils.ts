import type { DurationValuesFormat, DurationValues } from "./type";

/**
 * Extracts duration values from a string based on a specified format.
 * @param value The string containing the duration value.
 * @param format The format of the duration value "PnYnM" or "PTnHnM"
 * @returns An object containing the extracted duration values (years and months or hours and minutes and format).
 */
export function extractDurationFromValue(
    value: string | null,
    format: DurationValuesFormat,
): DurationValues {
    // If the value is null, return default values based on the format
    if (value === null) {
        switch (format) {
            case "PnYnM":
                return { years: "", months: "", format }; // Default values for years and months
            case "PTnHnM":
                return { hours: "", minutes: "", format }; // Default values for hours and minutes
            default:
                throw new Error(`Invalid format "${format}"`); // Throw error for invalid format
        }
    }

    const regex = new RegExp(format.replaceAll("n", "(\\d+)"));

    const match = value.match(regex);

    if (!match) {
        throw new Error(`Invalid duration value "${value}" does not match the format "${format}"`);
    }

    const [, ...matches] = match;

    // Return duration values based on the format
    if (format === "PnYnM") {
        return { years: matches[0] ?? "", months: matches[1] ?? "", format }; // Extracted values for years and months
    }

    if (format === "PTnHnM") return { hours: matches[0] ?? "", minutes: matches[1] ?? "", format }; // Extracted values for hours and minutes

    throw new Error(`Incorrect format, we support only "PTnHnM" and "PnYnM"`);
}

export const buildValueFromDuration = (params: DurationValues) => {
    const { format } = params;
    if (format === "PnYnM") {
        const { years, months } = params;
        if (years === "" && months === "") {
            return null;
        }
        return `P${years === "" ? "0" : years}Y${months === "" ? "0" : months}M`;
    }
    if (format === "PTnHnM") {
        const { hours, minutes } = params;
        if (hours === "" && minutes === "") {
            return null;
        }
        return `PT${hours === "" ? "O" : hours}H${minutes === "" ? "O" : minutes}M`;
    }
    throw new Error(`Invalid format "${format}"`);
};
