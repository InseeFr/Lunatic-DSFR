import React, { useCallback } from "react";
import classnames from "classnames";
import { isElement } from "./utils/is-element";
import { Button as ButtonDSFR } from "@codegouvfr/react-dsfr/Button";

export function Button({
    children,
    disabled,
    className,
    priority,
}: {
    children: string | React.ReactNode;
    disabled: boolean;
    // label: string,
    className: string;
    priority?: "primary" | "secondary" | "tertiary" | "tertiary no outline" | undefined;
}) {
    if (isElement(children))
        return (
            <ButtonDSFR
                disabled={disabled}
                className={classnames("button-lunatic-dsfr", className, { disabled })}
                priority={priority}
            >
                {children}
            </ButtonDSFR>
        );

    return (
        <ButtonDSFR
            disabled={disabled}
            className={classnames("button-lunatic-dsfr", className, { disabled })}
            priority={priority}
        >
            {children}
        </ButtonDSFR>
    );
}

export default Button;
