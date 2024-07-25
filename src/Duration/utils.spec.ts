import { describe, it, expect } from "vitest";
import { extractDurationFromValue, buildValueFromDuration } from "./utils";
import type { DurationValuesFormat, DurationValues } from "./type";

describe("extractDurationFromValue", () => {
    it("should return default values for PnYnM format if value is null", () => {
        const result = extractDurationFromValue(null, "PnYnM");
        expect(result).toEqual({ years: "", months: "", format: "PnYnM" });
    });

    it("should return default values for PTnHnM format if value is null", () => {
        const result = extractDurationFromValue(null, "PTnHnM");
        expect(result).toEqual({ hours: "", minutes: "", format: "PTnHnM" });
    });

    it("should extract values for PnYnM format", () => {
        const result = extractDurationFromValue("P3Y5M", "PnYnM");
        expect(result).toEqual({ years: "3", months: "5", format: "PnYnM" });
    });

    it("should extract values for PTnHnM format", () => {
        const result = extractDurationFromValue("PT2H30M", "PTnHnM");
        expect(result).toEqual({ hours: "2", minutes: "30", format: "PTnHnM" });
    });

    it("should throw an error for invalid format", () => {
        expect(() =>
            extractDurationFromValue(null, "InvalidFormat" as DurationValuesFormat),
        ).toThrowError('Invalid format "InvalidFormat"');
    });

    it("should throw an error for value not matching the format", () => {
        expect(() => extractDurationFromValue("InvalidValue", "PnYnM")).toThrowError(
            'Invalid duration value "InvalidValue" does not match the format "PnYnM"',
        );
    });

    it("should handle edge cases for PnYnM format", () => {
        const result = extractDurationFromValue("P0Y0M", "PnYnM");
        expect(result).toEqual({ years: "0", months: "0", format: "PnYnM" });
    });

    it("should handle edge cases for PTnHnM format", () => {
        const result = extractDurationFromValue("PT0H0M", "PTnHnM");
        expect(result).toEqual({ hours: "0", minutes: "0", format: "PTnHnM" });
    });
});

describe("buildValueFromDuration", () => {
    it("should build value for PnYnM format", () => {
        const params: DurationValues = { years: "3", months: "5", format: "PnYnM" };
        const result = buildValueFromDuration(params);
        expect(result).toEqual("P3Y5M");
    });

    it("should build value for PTnHnM format", () => {
        const params: DurationValues = { hours: "2", minutes: "30", format: "PTnHnM" };
        const result = buildValueFromDuration(params);
        expect(result).toEqual("PT2H30M");
    });

    it("should return null for empty years and months in PnYnM format", () => {
        const params: DurationValues = { years: "", months: "", format: "PnYnM" };
        const result = buildValueFromDuration(params);
        expect(result).toBeNull();
    });

    it("should return null for empty hours and minutes in PTnHnM format", () => {
        const params: DurationValues = { hours: "", minutes: "", format: "PTnHnM" };
        const result = buildValueFromDuration(params);
        expect(result).toBeNull();
    });

    it("should handle zero values for PnYnM format", () => {
        const params: DurationValues = { years: "0", months: "0", format: "PnYnM" };
        const result = buildValueFromDuration(params);
        expect(result).toEqual("P0Y0M");
    });

    it("should handle zero values for PTnHnM format", () => {
        const params: DurationValues = { hours: "0", minutes: "0", format: "PTnHnM" };
        const result = buildValueFromDuration(params);
        expect(result).toEqual("PT0H0M");
    });
});
