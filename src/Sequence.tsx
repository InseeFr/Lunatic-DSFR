import { fr } from "@codegouvfr/react-dsfr";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { Declarations } from "@inseefr/lunatic";
import { DeclarationType } from "./utils/type/type-source";
import classnames from "classnames";
type SequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

const afterPostion = "AFTER_QUESTION_TEXT";

export function Sequence({ label, declarations }: SequenceType) {
    const theme = useColors();
    return (
        <div
            className={classnames("sequence-lunatic-dsfr", fr.cx("fr-grid-row", "fr-p-4w"))}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            <Declarations type={afterPostion} declarations={declarations} />
        </div>
    );
}

export default Sequence;
