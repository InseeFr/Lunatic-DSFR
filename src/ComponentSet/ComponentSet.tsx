import { PropsWithChildren } from "react";
import Legend from "./html/legend";
import { LunaticError } from "../utils/type/type";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";

const useStyles = makeStyles()({
    root: {
        ".lunatic-dsfr-component-set-component:last-child": {
            ".fr-fieldset__element": {
                marginBottom: "0",
            },
            ".fr-fieldset--error > .fr-fieldset__element": {
                marginBottom: "1rem",
            },
        },
        ".lunatic-dsfr-component-set-component": {
            ".checkbox-lunatic-dsfr, .lunatic-dsfr-radio": {
                "> legend": {
                    fontSize: "1rem !important",
                    lineHeight: "2.25rem !important",
                    paddingBottom: "1rem",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    marginLeft: "-0.25rem",
                    marginRight: "-0.25rem",
                    fontWeight: "400 !important",
                },
            },
        },
        "> .fr-fieldset__element:last-child": {
            marginBottom: "0",
        },
        "> .fr-fieldset__element": {
            ".fr-fieldset": {
                marginBottom: "0",
            },
        },
    },
});

type ComponentSetType = {
    id: string;
    errors: Record<string, Array<LunaticError>>;
    description?: Record<string, unknown[]>;
    legendText: string;
    className?: string;
};

export function ComponentSet({
    id,
    errors,
    description,
    legendText,
    className,
    children,
}: PropsWithChildren<ComponentSetType>) {
    const labelId = `label-${id}`;
    const { classes, cx } = useStyles();

    if (errors && id in errors) {
        console.warn(
            "Lunatic-DSFR warning: Controls should be defined on the sub-component level, and not in the ComponentSet. Add your controls to one or more components within the 'components' attribute of your SetComponent component.",
        );
    }

    return (
        <fieldset className={cx(classes.root, "lunatic-dsfr-component-set", "fr-fieldset")}>
            <Legend id={labelId} description={description} className={className}>
                {legendText}
            </Legend>
            {children}
        </fieldset>
    );
}

export default ComponentSet;
