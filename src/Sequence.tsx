import { fr } from "@codegouvfr/react-dsfr";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import React from "react";
import { useStyles } from "tss-react/dsfr";

/**
 * REMOVE THIS TYPES WHEN REFACTO !!!!!!!
 */
export type LabelType = { value: string; type: "VTL" | "VTL|MD" };

export type DeclarationType = {
    id: string;
    declarationType: "INSTRUCTION" | "COMMENT" | "HELP" | "CODECARD" | "WARNING" | "STATEMENT";
    position: "AFTER_QUESTION_TEXT" | "AFTER_RESPONSE" | "BEFORE_QUESTION_TEXT" | "DETACHABLE";
    label: LabelType;
};

type SequenceType = {
    label: string;
    description?: Array<DeclarationType>;
};

function Description({ description }: { description?: DeclarationType[] }) {
    if (description) {
        return (
            <>
                {description.map(({ label, id }) => {
                    if (typeof label === "string") {
                        return (
                            <p className={fr.cx("fr-mb-0")} key={id}>
                                {label}
                            </p>
                        );
                    }
                    return (
                        <React.Fragment key={id}>
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
    const { cx } = useStyles();
    return (
        <div
            className={cx("sequence-lunatic-dsfr", fr.cx("fr-grid-row", "fr-p-4w"))}
            style={{ backgroundColor: theme.decisions.background.alt.grey.default }}
        >
            <h2 className={fr.cx("fr-h3", "fr-col-12")}>{label}</h2>
            <div className={fr.cx("fr-col-12")}>
                <Description description={description} />
            </div>
        </div>
    );
}
