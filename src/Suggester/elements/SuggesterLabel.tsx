import { fr } from "@codegouvfr/react-dsfr";
import { PropsWithChildren } from "react";

type SuggesterLabelProps = {
    id?: string;
};

export function SuggesterLabel(props: PropsWithChildren<SuggesterLabelProps>) {
    const { children, id } = props;

    if (children) {
        return (
            <label className={fr.cx("fr-label")} htmlFor={id}>
                {children}
            </label>
        );
    }
    return null;
}
