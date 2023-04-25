import { PropsWithChildren } from "react";
import { fr } from "@codegouvfr/react-dsfr";

export function HelpDeclaration(props: PropsWithChildren) {
    const { children } = props;
    return <div className={fr.cx("fr-col-12", "fr-alert", "fr-alert--info")}>{children}</div>;
}

export default HelpDeclaration;
