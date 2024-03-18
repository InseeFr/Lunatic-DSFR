/**
 * Represents the possible formats of duration values.
 */
export type TimeDuration = { hours: string; minutes: string; format: "PTnHnM" };
export type DateDuration = { years: string; months: string; format: "PnYnM" };

// Define DurationValues as a union of TimeDuration and DateDuration
export type DurationValues = TimeDuration | DateDuration;

export type DurationValuesFormat = DurationValues["format"];

/**
 * Represents a utility type for inferring the keys of duration values based on the format.
 * It returns the appropriate key excluding properties that are not relevant to the specified format.
 * @template Format The type of format ("PnYnM" or "PTnHnM").
 */
export type DurationKey<Format extends DurationValues["format"]> = keyof Omit<
    Extract<DurationValues, DurationValues & { format: Format }>,
    "format"
>;
