import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import classnames from "classnames";
import React from "react";

type Props = PropsWithChildren<{
    id?: string;
    htmlFor?: string;
    className?: string;
    style?: CSSProperties;
    description?: ReactNode | Array<{ label: ReactNode; declarationType: string }>;
}>;

type DescriptionProps = {
    value?: ReactNode | Array<{ label: ReactNode; declarationType: string }>;
    className?: string;
};

function OneDescription({ value, className }: { value?: ReactNode; className?: string }) {
    if ((typeof value === "string" && value.length > 0) || React.isValidElement(value)) {
        return (
            <span className={classnames("label-description", "fr-hint-text", className)}>{value}</span>
        );
    }

    return null;
}

function Description({ value, className }: DescriptionProps) {
    if (Array.isArray(value)) {
        return (
            <>
                {value.map(({ label, declarationType }, index) => (
                    <OneDescription
                        key={`description-${index}`}
                        value={label}
                        className={classnames(className, declarationType)}
                    />
                ))}
            </>
        );
    }
    return <OneDescription value={value} className={classnames(className)} />;
}

export function Label({ children, id, htmlFor, className, style, description }: Props) {
    if (children) {
        return (
            <label
                htmlFor={htmlFor}
                id={id}
                className={classnames("lunatic-dsfr-label fr-label fr-mb-1w", className)}
                style={style}
            >
                {children}
                <Description className="fr-mb-1w" value={description} />
            </label>
        );
    }
    return null;
}
