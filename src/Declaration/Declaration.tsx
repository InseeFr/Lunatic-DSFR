import { PropsWithChildren } from "react";
import { StatementDeclaration } from "./StatementDeclaration";
import { HelpDeclaration } from "./HelpDeclaration";

enum DT {
    STATEMENT = "STATEMENT",
    HELP = "HELP",
    CODECARD = "CODECARD",
    INSTRUCTION = "INSTRUCTION",
}

type DeclarationProps = {
    type: string;
};

export function Declaration(props: PropsWithChildren<DeclarationProps>) {
    const { type, children } = props;
    switch (type.toUpperCase()) {
        case DT.STATEMENT:
            return <StatementDeclaration>{children}</StatementDeclaration>;
        case DT.HELP:
            return <HelpDeclaration>{children}</HelpDeclaration>;
        case DT.CODECARD:
        case DT.INSTRUCTION:
            //TODO
            return <>{children}</>;
        default:
            return null;
    }
}
