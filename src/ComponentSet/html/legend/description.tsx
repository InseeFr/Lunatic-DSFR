import classnames from "classnames";
import React from "react";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react";

type DescriptionType = {
    value?: string | Record<string, unknown[]>;
    className?: string;
};

function OneDescription({ value, className }: DescriptionType) {
    const { cx } = useStyles();

    if ((typeof value === "string" && value.length > 0) || React.isValidElement(value)) {
        return (
            <span className={cx("label-description", fr.cx("fr-hint-text"), className)}>{value}</span>
        );
    }
    return null;
}

function Description({ value, className }: DescriptionType) {
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

export default Description;
