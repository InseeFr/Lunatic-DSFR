import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Accordion as DSFRAccordion } from "@codegouvfr/react-dsfr/Accordion";
import { fr } from "@codegouvfr/react-dsfr";

export const Accordion: LunaticSlotComponents["Accordion"] = props => {
    const { items } = props;
    return (
        <div className={fr.cx("fr-accordions-group")}>
            {items.map(
                (item, k) =>
                    item.body && (
                        <DSFRAccordion key={k} label={item.label}>
                            {item.body}
                        </DSFRAccordion>
                    ),
            )}
        </div>
    );
};
