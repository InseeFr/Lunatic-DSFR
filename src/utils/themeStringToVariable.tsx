import { ColorTheme } from "@codegouvfr/react-dsfr";

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

    const colorPath = (theme.decisions.background.alt as unknown as { [k: string]: any })[nestedPath[0]];
    if (!colorPath) {
        return defaultIfInvalid;
    }
    return colorPath[nestedPath[1]] || defaultIfInvalid;
}
