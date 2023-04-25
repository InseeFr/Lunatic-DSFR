import { fr } from "@codegouvfr/react-dsfr";
import { Declarations } from "@inseefr/lunatic";
import { DeclarationType } from "./utils/type/type-source";

type SequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

export function Sequence({ label, declarations }: SequenceType) {
    return (
        <div>
            <h2 className={fr.cx("fr-h4", "fr-col-12")}>{label}</h2>
            <Declarations type="BEFORE_QUESTION_TEXT" declarations={declarations} />
        </div>
    );
}

export default Sequence;
