import type { KeyboardEvent } from "react";
import React, { PropsWithChildren } from "react";
import { useStyles } from "tss-react/dsfr";

type Props = PropsWithChildren<{
    focused?: boolean;
    onFocus: () => void;
    handleKeyDown: (e: KeyboardEvent<Element>) => void;
    className?: string;
    ref: React.RefObject<HTMLDivElement>;
}>;

export function ComboboxContentBox({ children, className, focused }: Props) {
    const { cx } = useStyles();
    return (
        <div
            className={cx(`${className ?? "lunatic"}-dsfr-combo-box`, {
                focused,
            })}
        >
            {children}
        </div>
    );
}
