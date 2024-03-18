import { fr } from "@codegouvfr/react-dsfr";
import type { ReactNode } from "react";

type FiledsetErrorProps = {
    id: string;
    state: "default" | "error" | "success";
    stateRelatedMessage: ReactNode | undefined;
};

export function FiledsetError(props: FiledsetErrorProps) {
    const { state, stateRelatedMessage, id } = props;
    if (props.state && stateRelatedMessage) {
        return (
            <div className={fr.cx("fr-messages-group")}>
                <p
                    id={`${id}-desc-${state}`}
                    className={`fr-message--${state} ${fr.cx("fr-message", "fr-col-12", "fr-mt-0")}`}
                >
                    {stateRelatedMessage}
                </p>
            </div>
        );
    }
    return null;
}
