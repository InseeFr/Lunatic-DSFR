import { LunaticComponents } from "@inseefr/lunatic";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { slotComponents } from "./index";
import { ComponentContextProvider } from "./hooks/useComponentContext";
import { type ComponentProps, type ReactNode } from "react";

type Props = Omit<ComponentProps<typeof LunaticComponents>, "slots" | "wrapper">;

/**
 * Custom components to loop other components providing context to DSFR
 */
export function DSFRLunaticComponents({ ...props }: Props) {
    return (
        <MuiDsfrThemeProvider>
            <LunaticComponents
                {...props}
                slots={slotComponents}
                wrapper={args => (
                    <ComponentContextProvider
                        type={args.componentType}
                        label={"label" in args ? (args.label as ReactNode) : null}
                        children={args.children}
                    />
                )}
            />
        </MuiDsfrThemeProvider>
    );
}
