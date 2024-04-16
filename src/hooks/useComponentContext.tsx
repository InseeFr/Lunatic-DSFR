import { createContext, type PropsWithChildren, type ReactNode, useContext } from "react";

/**
 * Custom context to drill down component properties
 */

const ComponentTypeContext = createContext<string | null>(null);
const ComponentLabelContext = createContext<ReactNode | null>(null);

export const ComponentContextProvider = ({
    label,
    type,
    children,
}: PropsWithChildren<{ label: ReactNode; type: string }>) => {
    return (
        <ComponentTypeContext.Provider value={type}>
            <ComponentLabelContext.Provider value={label}>{children}</ComponentLabelContext.Provider>
        </ComponentTypeContext.Provider>
    );
};

export const useComponentType = (): string => {
    return useContext(ComponentTypeContext) ?? "";
};

export const useComponentLabel = (): ReactNode => {
    return useContext(ComponentLabelContext) ?? "";
};
