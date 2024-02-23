import { type PropsWithChildren } from "react";
import { useStyles } from "tss-react/dsfr";

type ComponentSetComponentContainerType = {
    className?: string;
};

export function ComponentSetWrapper({
    className,
    children,
}: PropsWithChildren<ComponentSetComponentContainerType>) {
    const { cx } = useStyles();

    return (
        <div className={cx("lunatic-dsfr-component-set-component", "fr-fieldset__element", className)}>
            {children}
        </div>
    );
}
