import { ReactNode } from "react";
import { fr } from "@codegouvfr/react-dsfr";

type AfterDeclarationType = {
    label: ReactNode;
};

export function AfterDeclaration({ label }: AfterDeclarationType) {
    return (
        <div className={fr.cx("fr-col-12", "fr-alert", "fr-alert--info")}>
            <p>{label}</p>
        </div>
    );
}

export default AfterDeclaration;
