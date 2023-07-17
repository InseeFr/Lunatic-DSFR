import { Accordion as AccordionDSFR } from "@codegouvfr/react-dsfr/Accordion";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { themeStringToVariable } from "./utils/themeStringToVariable";

type QuestionExplicationType = {
    label: string;
    description: string;
    bgColor: string;
};

export function QuestionExplication({ label, description, bgColor }: QuestionExplicationType) {
    const theme = useColors();
    const backgroundColor = themeStringToVariable(
        theme,
        bgColor,
        theme.decisions.background.default.grey.default,
    );
    const boxShadowColor = theme.decisions.border.default.grey.default;

    return (
        <div
            style={{
                backgroundColor,
                boxShadow: `inset 0 1px 0 0 ${boxShadowColor}, 0 1px 0 0 ${boxShadowColor}`,
            }}
        >
            <div className={"fr-container fr-grid-row fr-grid-row--center fr-grid-row--middle fr-px-1w"}>
                <AccordionDSFR label={label} className={"fr-col-lg-6 fr-col-md-9 fr-col-12"}>
                    {description}
                </AccordionDSFR>
            </div>
        </div>
    );
}

export default QuestionExplication;
