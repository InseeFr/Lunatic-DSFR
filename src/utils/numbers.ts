/**
 * Retrieves number separators used in the current locale.
 * @returns An object containing the decimal separator and thousand separator.
 */
export function getNumberSeparators() {
    // Create a number formatter using the default locale settings
    const formatter = new Intl.NumberFormat(undefined, { style: "decimal" });

    // Format a small number to retrieve the decimal separator
    const decimalParts = formatter.formatToParts(0.1);
    const decimalSeparator = decimalParts.find(part => part.type === "decimal")?.value ?? "."; // Default to period if not found

    // Format a thousand to retrieve the thousand separator
    const thousandParts = formatter.formatToParts(1000);
    const thousandSeparator = thousandParts.find(part => part.type === "group")?.value ?? ","; // Default to comma if not found

    return { decimalSeparator, thousandSeparator };
}
