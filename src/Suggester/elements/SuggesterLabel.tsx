import { PropsWithChildren } from "react";

type SuggesterLabelProps = {
    id?: string;
    description?: string;
};

export function SuggesterLabel(props: PropsWithChildren<SuggesterLabelProps>) {
    const { children, id } = props;

    if (children) {
        return (
            <label className="fr-label" htmlFor={id}>
                {children}
                <span className="fr-hint-text">Texte de description additionnel</span>
            </label>
        );
    }
    return null;
}
