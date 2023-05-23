import { fr } from "@codegouvfr/react-dsfr";
import { Declarations } from "@inseefr/lunatic";
import { DeclarationType } from "./utils/type/type-source";
type SubsequenceType = {
    label: string;
    declarations: Array<DeclarationType>;
};
const detachable = "DETACHABLE";
export function Subsequence({ label, declarations }: SubsequenceType) {
    return (
        <div className="subsequence-lunatic-dsfr">
            <h2 className={fr.cx("fr-h4", "fr-col-12")}>{label}</h2>
            <Declarations type={detachable} declarations={declarations} />
        </div>
    );
}

export default Subsequence;
