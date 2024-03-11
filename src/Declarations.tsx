import type { LunaticSlotComponents } from "@inseefr/lunatic";
import type { ComponentProps } from "react";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

export const Declarations: LunaticSlotComponents["Declarations"] = props => {
    const { declarations, type } = props;

    const filtredDeclaration = declarations?.filter(d => d.position === type);

    if (!filtredDeclaration) return null;

    switch (type) {
        case "AFTER_QUESTION_TEXT":
            return <DeclarationAfter declarations={filtredDeclaration} />;
        case "BEFORE_QUESTION_TEXT":
            return <DeclarationBefore declarations={filtredDeclaration} />;
        case "DETACHABLE":
        default:
            //TODO throw error ?
            console.error(`The declaration type : ${type} is not supported, nothing is displayed`);
            return null;
    }
};

type Declaration = Pick<ComponentProps<LunaticSlotComponents["Declarations"]>, "declarations">;

const DeclarationAfter = (props: Declaration) => {
    const { declarations } = props;

    if (!declarations || declarations.length === 0) return null;

    if (declarations[1]) {
        console.error("Only one declaration by type is permitted, we display the first");
    }

    const { id, label } = declarations[0];

    return <Alert description={label ?? ""} id={id} severity="info" closable={false} title="Consigne" />;
};

const DeclarationBefore = (props: Declaration) => {
    const { declarations } = props;

    if (!declarations || declarations.length === 0) return null;

    console.log(declarations);
    if (declarations[1]) {
        console.error("Only one declaration by type is permitted, we display the first");
    }

    const { id, label } = declarations[0];

    return <CallOut id={id}>{label}</CallOut>;
};
