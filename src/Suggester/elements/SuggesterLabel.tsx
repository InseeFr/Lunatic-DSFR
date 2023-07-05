import { PropsWithChildren } from "react";

type SuggesterLabelProps = {
    id?: string;
    description?: string;
};

export function SuggesterLabel(props: PropsWithChildren<SuggesterLabelProps>) {
    const { description, children, id } = props;

    if (children) {
        return (
            // Label takes responsibilty of margin-bottom since the .fr-input element is not the next element after .fr-label
            <label className="fr-label fr-mb-1w" htmlFor={id}>
                {children}
                <span className="fr-hint-text">{description}</span>
            </label>
        );
    }
    return null;
}
