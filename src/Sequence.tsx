import { fr } from "@codegouvfr/react-dsfr";
import { Declarations } from "@inseefr/lunatic";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { DeclarationType } from "./utils/type/type-source";

type SubsequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

export function Subsequence({ label, declarations }: SubsequenceType) {
    const theme = useColors();

    return (
        <div
            className={fr.cx("fr-grid-row", "fr-p-4w")}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            <Declarations type="BEFORE_QUESTION_TEXT" declarations={declarations} />
        </div>
    );
}

export default Subsequence;
