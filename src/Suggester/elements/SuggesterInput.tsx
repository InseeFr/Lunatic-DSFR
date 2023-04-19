type SuggesterInputProps = Record<string, unknown>;

/**
 *
 * @param props plein de truc viennent du {...props} aria-checked ...
 * @returns
 */
export function SuggesterInput(props: SuggesterInputProps) {
    return <input type="text" {...props} />;
}
