import { fr } from "@codegouvfr/react-dsfr";
import { Declarations as DeclarationsComponent } from "../src/Declarations/Declarations";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { DeclarationType } from "./utils/type/type-source";

type SequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

export function Sequence({ label, declarations }: SequenceType) {
    const theme = useColors();

    return (
        <div
            className={fr.cx("fr-grid-row", "fr-p-4w")}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            <DeclarationsComponent declarations={declarations} />
        </div>
    );
}

export default Sequence;
