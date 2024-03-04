import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Sequence: LunaticSlotComponents["Sequence"] = props => {
    const { id, label } = props;
    return (
        <div
            id={id}
            className={fr.cx("fr-p-4w")}
            style={{ backgroundColor: fr.colors.decisions.background.alt.grey.default }}
        >
            <h2>{label}</h2>
            <div>
                Todo : Déclarations
                {/* <Declarations
				type="AFTER_QUESTION_TEXT"
				declarations={declarations}
				id={id}
			/>             */}
            </div>
        </div>
    );
};
