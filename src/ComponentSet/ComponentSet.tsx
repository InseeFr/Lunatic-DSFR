import { PropsWithChildren } from "react";
import Legend from "./html/legend";
import { LunaticError } from "../utils/type/type";

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

    if (errors && id in errors) {
        console.warn(
            "Lunatic-DSFR warning: Controls should be defined on the sub-component level, and not in the ComponentSet. Add your controls to one or more components within the 'components' attribute of your SetComponent component.",
        );
    }

    return (
        <fieldset className="lunatic-dsfr-component-set">
            <Legend id={labelId} description={description} className={className}>
                {legendText}
            </Legend>
            {children}
        </fieldset>
    );
}

export default ComponentSet;
