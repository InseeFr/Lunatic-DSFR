import { PropsWithChildren } from "react";
import { StatementDeclaration } from "./StatementDeclaration";
import { HelpDeclaration } from "./HelpDeclaration";
import classnames from "classnames";

export enum DeclarationTypeEnum {
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
        case DeclarationTypeEnum.STATEMENT:
            return <StatementDeclaration>{children}</StatementDeclaration>;
        case DeclarationTypeEnum.HELP:
            return <HelpDeclaration>{children}</HelpDeclaration>;
        case DeclarationTypeEnum.CODECARD:
        case DeclarationTypeEnum.INSTRUCTION:
        default:
            return <div className={classnames("lunatic-declaration-dsfr", type)}>{children}</div>;
    }
    return <>{children}</>;
}
