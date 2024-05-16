import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticComponentProps, LunaticSlotComponents } from "@inseefr/lunatic";
import { createContext, useContext } from "react";

const ComponentParentContext = createContext<LunaticComponentProps["componentType"]>(undefined);

export const ComponentWrapper: LunaticSlotComponents["ComponentWrapper"] = props => {
    const { componentType, children } = props;

    const parentComponentType = useContext(ComponentParentContext);

    return (
        <ComponentParentContext.Provider value={componentType}>
            {parentComponentType === "Question" ? (
                <div className={fr.cx("fr-fieldset__element")}>{children}</div>
            ) : (
                children
            )}
        </ComponentParentContext.Provider>
    );
};
