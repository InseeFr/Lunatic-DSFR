import { fr } from "@codegouvfr/react-dsfr";
import { type ReactNode } from "react";

type FiledsetErrorProps = {
    id: string;
    state: "default" | "error" | "success";
    stateRelatedMessage: ReactNode | undefined;
};

export function FiledsetError(props: FiledsetErrorProps) {
    const { id, state, stateRelatedMessage } = props;

    if (props.state && stateRelatedMessage) {
        return (
            <div id={id} className={fr.cx("fr-messages-group")} role="alert">
                <p
                    id={`${id}-${state}`}
                    className={fr.cx(
                        "fr-message",
                        "fr-col-12",
                        "fr-mt-0",
                        (() => {
                            switch (state) {
                                case "error":
                                    return "fr-message--error";
                                case "success":
                                    return "fr-message--valid";
                            }
                        })(),
                    )}
                >
                    {stateRelatedMessage}
                </p>
            </div>
        );
    }
    return null;
}
