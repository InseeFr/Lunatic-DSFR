import { fr } from "@codegouvfr/react-dsfr";
import { Declarations } from "@inseefr/lunatic";
import type { LunaticComponentProps } from "@inseefr/lunatic";

export function Subsequence({ label, declarations }: LunaticComponentProps<"Subsequence">) {
    return (
        <div className="subsequence-lunatic-dsfr">
            <Declarations type="BEFORE_QUESTION_TEXT" declarations={declarations} />
            <div className={fr.cx("fr-col-12")}>{label}</div>
            <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
            <Declarations type="DETACHABLE" declarations={declarations} />
        </div>
    );
}
