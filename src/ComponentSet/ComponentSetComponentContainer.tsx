import classnames from "classnames";
import { PropsWithChildren } from "react";

type ComponentSetComponentContainerType = {
    className?: string;
};

export function ComponentSetComponentContainer({
    className,
    children,
}: PropsWithChildren<ComponentSetComponentContainerType>) {
    return (
        <div
            className={classnames("lunatic-component-set-component", "fr-fieldset__element", className)}
        >
            {children}
        </div>
    );
}

export default ComponentSetComponentContainer;
