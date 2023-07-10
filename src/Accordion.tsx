import { Accordion as AccordionDSFR } from "@codegouvfr/react-dsfr/Accordion";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { themeStringToVariable } from "./utils/themeStringToVariable";

type AccordionType = {
    label: string;
    description: string;
    bgColor: string;
};

export function Accordion({ label, description, bgColor }: AccordionType) {
    const theme = useColors();
    const backgroundColor = themeStringToVariable(
        theme,
        bgColor,
        theme.decisions.background.default.grey.default,
    );

    return (
        <div style={{ backgroundColor }}>
            <AccordionDSFR label={label}>{description}</AccordionDSFR>
        </div>
    );
}

export default Accordion;
