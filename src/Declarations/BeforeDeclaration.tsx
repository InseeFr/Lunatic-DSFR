import { ReactNode } from "react";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { fr } from "@codegouvfr/react-dsfr";

type BeforeDeclarationType = {
    label: ReactNode;
};

export function BeforeDeclaration({ label }: BeforeDeclarationType) {
    return <CallOut className={fr.cx("fr-col-12")}>{label}</CallOut>;
}

export default BeforeDeclaration;
