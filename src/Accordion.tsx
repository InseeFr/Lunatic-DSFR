import { Accordion as AccordionDSFR } from "@codegouvfr/react-dsfr/Accordion";

type AccordionType = {
    label: string;
    description: string;
    bgColor: string;
};

export function Accordion({ label, description, bgColor }: AccordionType) {
    const defaultBgcolor = "#FFFFFF";

    return (
        <div style={{ backgroundColor: bgColor ? bgColor : defaultBgcolor }}>
            <AccordionDSFR label={label}>{description}</AccordionDSFR>
        </div>
    );
}

export default Accordion;
