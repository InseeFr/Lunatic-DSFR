import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useComponentType } from "./hooks/useComponentContext";

// Some components use a custom label and overwrite the default one
const componentWithLabelOverwrite = ["Table"];

export const Label: LunaticSlotComponents["Label"] = ({ children, htmlFor, id, style, description }) => {
    const component = useComponentType();

    if (!children || componentWithLabelOverwrite.includes(component)) {
        return null;
    }

    return (
        <label htmlFor={htmlFor} id={id} className={"lunatic-label"} style={style}>
            {children}
            {component}
            {description && <span className="label-description">{description}</span>}
        </label>
    );
};
