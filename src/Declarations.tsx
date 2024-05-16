import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId, type ComponentProps } from "react";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { fr } from "@codegouvfr/react-dsfr";

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
            if (filtredDeclaration.length > 0) {
                console.error(`The declaration type : ${type} is not supported, nothing is displayed`);
            }
            return;
    }
};

type Declaration = Pick<ComponentProps<LunaticSlotComponents["Declarations"]>, "declarations">;

const DeclarationAfter = (props: Declaration) => {
    const { declarations } = props;

    const id = useId();

    if (!declarations || declarations.length === 0) return null;

    if (declarations[1]) {
        console.error("Only one declaration by position is permitted, we display the first");
    }

    const { label } = declarations[0];

    return (
        //@ts-expect-error Disabling title rendering until it's added to the model. Even though it's mandatory, we won't provide it for now.
        <Alert
            className={fr.cx("fr-fieldset__legend--regular")}
            description={label ?? ""}
            id={id}
            severity="info"
            closable={false}
            title={undefined}
        />
    );
};

const DeclarationBefore = (props: Declaration) => {
    const { declarations } = props;

    if (!declarations || declarations.length === 0) return null;

    if (declarations[1]) {
        console.error("Only one declaration by position is permitted, we display the first");
    }

    const { id, label } = declarations[0];

    return <CallOut id={id}>{label}</CallOut>;
};
