import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Table: LunaticSlotComponents["Table"] = props => {
    const { children, id } = props;
    return (
        <div id={id} className={fr.cx("fr-table", "fr-table--bordered")}>
            <table>{children}</table>
        </div>
    );
};

export const Tr: LunaticSlotComponents["Tr"] = props => {
    const { children, className } = props;
    return (
        <tr
            style={
                className && ["lunatic-errors", "lunatic-row-has-error"].includes(className)
                    ? {
                          color: fr.colors.decisions.background.flat.error.default,
                      }
                    : {}
            }
        >
            {children}
        </tr>
    );
};

export const Td: LunaticSlotComponents["Td"] = props => {
    const { children } = props;
    return <td className={fr.cx("fr-text--md")}>{children}</td>;
};
