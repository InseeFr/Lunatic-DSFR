import { fr } from "@codegouvfr/react-dsfr";
import { DeclarationType } from "../src/utils/type/type-source";
import { useColors } from "@codegouvfr/react-dsfr/useColors";

type SequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};

function getDeclarations(declarations: Array<DeclarationType>) {
    if (declarations) {
        return declarations.map(function (declaration, index) {
            const { label } = declaration;
            return <p key={index}>{label.value}</p>;
        });
    }
    return;
}

export function Sequence({ label, declarations }: SequenceType) {
    const theme = useColors();

    return (
        <div
            className={fr.cx("fr-grid-row", "fr-p-4w")}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            {getDeclarations(declarations)}
        </div>
    );
}

export default Sequence;
