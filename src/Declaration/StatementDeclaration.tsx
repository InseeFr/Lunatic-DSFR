import { PropsWithChildren } from "react";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { fr } from "@codegouvfr/react-dsfr";

export function StatementDeclaration(props: PropsWithChildren) {
    const { children } = props;
    return <CallOut className={fr.cx("fr-col-12")}>{children}</CallOut>;
}
