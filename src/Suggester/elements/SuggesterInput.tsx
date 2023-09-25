import { fr } from "@codegouvfr/react-dsfr";
import { LegacyRef, forwardRef } from "react";

type SuggesterInputProps = Record<string, unknown>;

/**
 *
 * @param props plein de truc viennent du {...props} aria-checked ...
 * @returns
 */
export const SuggesterInput = forwardRef(function SuggesterInput(
    props: SuggesterInputProps,
    ref: LegacyRef<HTMLInputElement>,
) {
    return <input className={fr.cx("fr-input")} type="text" {...props} ref={ref} />;
});
