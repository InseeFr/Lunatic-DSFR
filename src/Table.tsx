import { fr } from "@codegouvfr/react-dsfr";
import Alert from "@codegouvfr/react-dsfr/Alert";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";

export const Table: LunaticSlotComponents["Table"] = props => {
    const { children, errors } = props;

    const id = useId();
    const hasErrors = errors && errors.length > 0;
    const errorMessageId = `${id}-messages`;
    return (
        <>
            {hasErrors && (
                <div id={errorMessageId} role="alert">
                    {errors.map(error => {
                        if (!error.errorMessage) {
                            //TODO throw error
                            console.error(`The error : ${error} do not contains message`);
                            return;
                        }
                        return (
                            <Alert
                                severity="error"
                                description={error.errorMessage}
                                small
                                className={fr.cx("fr-mt-1w")}
                                key={error.id}
                                id={error.id}
                            />
                        );
                    })}
                </div>
            )}
            <div id={id} className={fr.cx("fr-table", "fr-table--lg")}>
                <div className={fr.cx("fr-table__wrapper")}>
                    <div className={fr.cx("fr-table__container")}>
                        <div className={fr.cx("fr-table__content")}>
                            <table
                                {...(hasErrors
                                    ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                                    : {})}
                            >
                                {children}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Tr: LunaticSlotComponents["Tr"] = props => {
    const { children, className } = props;
    const rowHasErrors = className ? ["lunatic-row-has-error"].includes(className) : false;
    const rowDisplayError = className ? ["lunatic-errors"].includes(className) : false;
    //TODO To improve accessibilité we should add aria-labelledBy and "aria-errormessage" but we can't with this component structure
    return (
        <tr
            {...(rowHasErrors ? { "aria-invalid": true } : {})}
            style={
                rowDisplayError
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
    const { children, ...rest } = props;

    return (
        <td className={fr.cx("fr-text--md")} {...rest}>
            {children}
        </td>
    );
};
