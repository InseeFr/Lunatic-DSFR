import { LegacyRef, forwardRef } from "react";

type SuggesterInputProps = {
    suggestionsids: Array<string>;
    value: string;
    activeid: unknown;
} & Record<string, unknown>;

/**
 *
 * @param props plein de truc viennent du {...props} aria-checked ...
 * @returns
 */
export const SuggesterInput = forwardRef(function SuggesterInput(
    props: SuggesterInputProps,
    ref: LegacyRef<HTMLInputElement>,
) {
    const { activeid, value, suggestionsids } = props;

    if (activeid || (suggestionsids.length && suggestionsids.includes(value))) {
        return null;
    }
    return <input className="fr-input" type="text" {...props} ref={ref} />;
});
