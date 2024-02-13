import { fr } from "@codegouvfr/react-dsfr";
import { Declarations } from "@inseefr/lunatic";
import { DeclarationType } from "./utils/type/type-source";
type SubsequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

export function Subsequence({ label, declarations }: SubsequenceType) {
    return (
        <div className="subsequence-lunatic-dsfr">
            <Declarations type="BEFORE_QUESTION_TEXT" declarations={declarations} />
            <div className={fr.cx("fr-col-12")}>{label}</div>
            <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
            <Declarations type="DETACHABLE" declarations={declarations} />
        </div>
    );
}
