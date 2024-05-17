import { fr } from "@codegouvfr/react-dsfr";
import Alert from "@codegouvfr/react-dsfr/Alert";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";

export const Table: LunaticSlotComponents["Table"] = props => {
    const { children, errors } = props;

    const id = useId();

    return (
        <div id={id} className={fr.cx("fr-table", "fr-table--bordered")}>
            {errors?.map(error =>
                error.errorMessage ? (
                    <Alert
                        severity="error"
                        description={error.errorMessage}
                        small
                        className={fr.cx("fr-mt-1w")}
                        key={error.id}
                    />
                ) : null,
            )}
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
