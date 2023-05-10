import React, { useCallback } from "react";
import classnames from "classnames";
import { isElement } from "./utils/is-element";
import { Button as ButtonDSFR } from "@codegouvfr/react-dsfr/Button";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

export function Button({
    children,
    disabled,
    className,
    priority,
    onClick,
}: {
    children: string | React.ReactNode;
    disabled: boolean;
    className: string;
    priority: ButtonProps.Common["priority"];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
                className={classnames("button-lunatic-dsfr", className)}
                priority={priority}
                onClick={handleClick}
            >
                {children}
            </ButtonDSFR>
        );

    return (
        <ButtonDSFR
            disabled={disabled}
            className={classnames("button-lunatic-dsfr", className)}
            priority={priority}
            onClick={handleClick}
        >
            {children}
        </ButtonDSFR>
    );
}

export default Button;
