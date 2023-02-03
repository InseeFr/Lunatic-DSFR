import React, { useCallback } from "react";
import classnames from "classnames";
import { isElement } from "./utils/is-element";
import { Button as ButtonDSFR } from "@codegouvfr/react-dsfr/Button";

export function Button({
    children,
    onClick,
    disabled,
    className,
    priority,
}: {
    children: string | React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    // label: string,
    className: string;
    priority?: "primary" | "secondary" | "tertiary" | "tertiary no outline" | undefined;
}) {
    const handleClick = useCallback(
        function (e: React.MouseEvent<HTMLButtonElement>) {
            e.stopPropagation();
            e.preventDefault();
            onClick(e);
        },
        [onClick],
    );

    if (isElement(children))
        return (
            <ButtonDSFR
                disabled={disabled}
                className={classnames("button-lunatic-dsfr", className, { disabled })}
                onClick={handleClick}
                priority={priority}
            >
                {children}
            </ButtonDSFR>
        );

    return (
        <ButtonDSFR
            disabled={disabled}
            className={classnames("button-lunatic-dsfr", className, { disabled })}
            onClick={handleClick}
            priority={priority}
        >
            {children}
        </ButtonDSFR>
    );
}

export default Button;
