import { PropsWithChildren } from "react";
import Legend from "./html/legend";
import { LunaticError } from "../utils/type/type";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";

const useStyles = makeStyles()({
    root: {
        "> .fr-fieldset__element:last-child": {
            marginBottom: "0",
        },
        "> .fr-fieldset__element": {
            ".fr-fieldset, .fr-fieldset__element": {
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
