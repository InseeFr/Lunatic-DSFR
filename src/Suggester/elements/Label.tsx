import type { CSSProperties, PropsWithChildren, ReactNode } from "react";
import React from "react";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    style?: CSSProperties;
    description?: ReactNode | Array<{ label: ReactNode; declarationType: string }>;
}>;

type DescriptionProps = {
    value?: ReactNode | Array<{ label: ReactNode; declarationType: string }>;
    className?: string;
};

function OneDescription({ value, className }: { value?: ReactNode; className?: string }) {
    const { cx } = useStyles();
    if ((typeof value === "string" && value.length > 0) || React.isValidElement(value)) {
        return (
            <span className={cx("label-description", fr.cx("fr-hint-text"), className)}>{value}</span>
        );
    }

    return null;
}

function Description({ value, className }: DescriptionProps) {
    const { cx } = useStyles();
    if (Array.isArray(value)) {
        return (
            <>
                {value.map(({ label, declarationType }, index) => (
                    <OneDescription
                        key={`description-${index}`}
                        value={label}
                        className={cx(className, declarationType)}
                    />
                ))}
            </>
        );
    }
    return <OneDescription value={value} className={cx(className)} />;
}

export function Label({ children, id, className, style, description }: Props) {
    const { cx } = useStyles();
    if (children) {
        return (
            <label
                id={id}
                className={cx("lunatic-dsfr-label", fr.cx("fr-label", "fr-mb-1w"), className)}
                style={style}
            >
                {children}
                <Description className={fr.cx("fr-mb-1w")} value={description} />
            </label>
        );
    }
    return null;
}
