import { LegacyRef, forwardRef } from "react";

type SuggesterInputProps = Record<string, unknown>;

const style = {
    width: "100%",
};

/**
 *
 * @param props plein de truc viennent du {...props} aria-checked ...
 * @returns
 */
export const SuggesterInput = forwardRef(function SuggesterInput(
    props: SuggesterInputProps,
    ref: LegacyRef<HTMLInputElement>,
) {
    return <input className="fr-input" type="text" {...props} ref={ref} style={style} />;
});
