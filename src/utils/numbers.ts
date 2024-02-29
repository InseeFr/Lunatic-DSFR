export function getDecimalSeparator() {
    const formatter = new Intl.NumberFormat(undefined, { style: "decimal" });
    const parts = formatter.formatToParts(0.1);

    // Find the part that represents the decimal separator
    const decimalPart = parts.find(part => part.type === "decimal");

    return decimalPart ? decimalPart.value : ".";
}

export function getNumberSeparators(): { decimalSeparator: string; thousandSeparator: string } {
    const formatter = new Intl.NumberFormat(undefined, { style: "decimal" });

    // Format a small number to retrieve the decimal separator
    const decimalParts = formatter.formatToParts(0.1);
    const decimalSeparator = decimalParts.find(part => part.type === "decimal")?.value || ".";

    // Format a thousand to retrieve the thousand separator
    const thousandParts = formatter.formatToParts(1000);
    const thousandSeparator = thousandParts.find(part => part.type === "group")?.value || ",";

    return { decimalSeparator, thousandSeparator };
}
