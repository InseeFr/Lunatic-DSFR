import { PropsWithChildren } from "react";

type SuggesterLabelProps = {
    id?: string;
};

/**
 * à remplacer par du DSFR ?
 */
const style = { display: "block" };

export function SuggesterLabel(props: PropsWithChildren<SuggesterLabelProps>) {
    const { children, id } = props;

    if (children) {
        return (
            <label className="todo Julia!" htmlFor={id} style={style}>
                {children}
            </label>
        );
    }
    return null;
}
