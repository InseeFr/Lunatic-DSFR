import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useComponentLabel } from "./hooks/useComponentContext";

export const Table: LunaticSlotComponents["Table"] = props => {
    const { children, id } = props;
    const label = useComponentLabel();

    return (
        <div id={id} className={fr.cx("fr-table", "fr-table--bordered")}>
            <table>
                {label && <caption>{label}</caption>}
                {children}
            </table>
        </div>
    );
};
