import React, { PropsWithChildren, useCallback } from "react";
import { useStyles } from "tss-react/dsfr";
import { isElement } from "./utils/is-element";
import { Button as ButtonDSFR } from "@codegouvfr/react-dsfr/Button";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

export function Button({
    children,
    disabled,
    className,
    priority = "primary",
    onClick,
    type,
    value,
}: PropsWithChildren<{
    disabled: boolean;
    className?: string;
    priority?: ButtonProps.Common["priority"];
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    value?: string;
}>) {
    const handleClick = useCallback(
        function (e: React.MouseEvent<HTMLButtonElement>) {
            if (onClick) {
                e.stopPropagation();
                e.preventDefault();
                onClick(e);
            }
        },
        [onClick],
    );

    const { cx } = useStyles();

    if (isElement(children))
        return (
            <ButtonDSFR
                disabled={disabled}
                className={cx("button-lunatic-dsfr", className)}
                priority={priority}
                onClick={handleClick}
                type={type}
                value={value}
            >
                {children}
            </ButtonDSFR>
        );

    return (
        <ButtonDSFR
            disabled={disabled}
            className={cx("button-lunatic-dsfr", className)}
            priority={priority}
            onClick={handleClick}
            type={type}
            value={value}
        >
            {children}
        </ButtonDSFR>
    );
}
