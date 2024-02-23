import { type ColorTheme } from "@codegouvfr/react-dsfr/useColors";

export function themeStringToVariable(
    theme: ColorTheme,
    themeString: string | undefined,
    defaultIfInvalid: string,
): string {
    if (!themeString) {
        return defaultIfInvalid;
    }
    const nestedPath = themeString.split(".");
    if (nestedPath.length !== 2) return defaultIfInvalid;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const colorPath = (theme.decisions.background.alt as unknown as { [k: string]: any })[nestedPath[0]];
    if (!colorPath) {
        return defaultIfInvalid;
    }
    return colorPath[nestedPath[1]] || defaultIfInvalid;
}
