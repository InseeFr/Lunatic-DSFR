import { fr } from "@codegouvfr/react-dsfr";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { DeclarationType } from "./utils/type/type-source";
import classnames from "classnames";
import React from "react";

type SequenceType = {
    label: string;
    description?: Array<DeclarationType>;
};

function Description({ description }: { description?: DeclarationType[] }) {
    if (description) {
        return (
            <>
                {description.map(({ label, id: idD }) => {
                    if (typeof label === "string") {
                        return (
                            <p className="fr-mb-0" key={idD}>
                                {label}
                            </p>
                        );
                    }
                    return (
                        <React.Fragment key={idD}>
                            <>{label}</>
                        </React.Fragment>
                    );
                })}
            </>
        );
    }
    return null;
}

export function Sequence({ label, description }: SequenceType) {
    const theme = useColors();

    return (
        <div
            className={classnames("sequence-lunatic-dsfr", fr.cx("fr-grid-row", "fr-p-4w"))}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            <Description description={description} />
        </div>
    );
}

export default Sequence;
