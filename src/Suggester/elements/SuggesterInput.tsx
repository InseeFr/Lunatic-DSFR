import { LegacyRef, forwardRef } from "react";

type SuggesterInputProps = Record<string, unknown>;

// const Input = styled("input")(({ theme }) => ({
//     width: 200,
//     backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
//     color: theme.palette.mode === "light" ? "#000" : "#fff",
// }));

/**
 *
 * @param props plein de truc viennent du {...props} aria-checked ...
 * @returns
 */
export const SuggesterInput = forwardRef(function SuggesterInput(
    props: SuggesterInputProps,
    ref: LegacyRef<HTMLInputElement>,
) {
    return <input type="text" {...props} ref={ref} />;
});
