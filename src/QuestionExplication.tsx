import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { themeStringToVariable } from "./utils/themeStringToVariable";
import { useCallback, useState } from "react";
import { fr } from "@codegouvfr/react-dsfr";

type QuestionExplicationType = {
    label: string;
    description: string;
    bgColor: string;
};

export function QuestionExplication({ label, description, bgColor }: QuestionExplicationType) {
    const theme = useColors();

    const [expandedDescription, setExpandedDescription] = useState<string | null>(null);

    const handleExpandedChange = useCallback(() => {
        // toggle expandedDescription between null and current description
        setExpandedDescription(v => (v === description ? null : description));
    }, [description]);

    // accordion expands if expandedDescription corresponds to current description
    const isExpanded = expandedDescription === description;

    const backgroundColor = themeStringToVariable(
        theme,
        bgColor,
        theme.decisions.background.default.grey.default,
    );

    return (
        <div
            style={{
                backgroundColor,
            }}
            className="fr-py-2w"
        >
            <div className={"fr-container fr-grid-row fr-grid-row--center fr-grid-row--middle fr-px-1w"}>
                <section className={fr.cx("fr-accordion", "fr-col-lg-6", "fr-col-md-9", "fr-col-12")}>
                    <h3 className={fr.cx("fr-accordion__title")}>
                        <button
                            className={fr.cx("fr-accordion__btn")}
                            aria-expanded={isExpanded}
                            aria-controls="accordion-106"
                            onClick={handleExpandedChange}
                        >
                            {label}
                        </button>
                    </h3>
                    <div className={fr.cx("fr-collapse")} id="accordion-106">
                        {description}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default QuestionExplication;
