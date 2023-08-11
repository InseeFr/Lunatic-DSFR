import type { KeyboardEvent } from "react";
import React, { PropsWithChildren } from "react";
import classnames from "classnames";

type Props = PropsWithChildren<{
    focused?: boolean;
    onFocus: () => void;
    handleKeyDown: (e: KeyboardEvent<Element>) => void;
    className?: string;
    ref: React.RefObject<HTMLDivElement>;
}>;

export function ComboboxContentBox({
    children,
    className,
    onFocus,
    handleKeyDown,
    focused,
    ref,
}: Props) {
    return (
        <div
            className={classnames(`${className ?? "lunatic"}-dsfr-combo-box`, {
                focused,
            })}
            onFocus={onFocus}
            onClick={onFocus}
            onKeyDown={handleKeyDown}
            ref={ref}
            tabIndex={0}
        >
            {children}
        </div>
    );
}
