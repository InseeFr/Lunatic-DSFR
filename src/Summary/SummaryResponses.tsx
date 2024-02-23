import { fr } from "@codegouvfr/react-dsfr";
import type { PropsWithChildren, ReactNode } from "react";
import { useStyles } from "tss-react/dsfr";

function ListResponses({ title, children }: PropsWithChildren<{ title: ReactNode }>) {
    const { cx } = useStyles();

    return (
        <div className={cx("lunatic-dsfr-summary-responses-iteration", fr.cx("fr-pb-2w"))}>
            <hr className={fr.cx("fr-pb-2w")} />
            <h3 className={fr.cx("fr-mb-0", "fr-h6")}>{title}</h3>
            {children}
        </div>
    );
}

function Responses({
    values,
}: {
    values?: Array<{
        label: ReactNode;
        value: ReactNode;
    }>;
}) {
    if (!values) {
        return null;
    }
    return (
        <>
            {values.map(({ label, value }, index) => {
                return (
                    <div key={index}>
                        <p className={fr.cx("fr-mb-0")}>
                            {label} {value}
                        </p>
                    </div>
                );
            })}
        </>
    );
}

export function SummaryResponses({
    sections,
}: {
    sections: Array<{
        title?: ReactNode;
        values?: Array<{ label: ReactNode; value: ReactNode }>;
    }>;
}) {
    return (
        <>
            {sections.map((section, index) => {
                if (section) {
                    const { title, values } = section;
                    return (
                        <ListResponses title={title} key={index}>
                            <Responses values={values} />
                        </ListResponses>
                    );
                }
                return null;
            })}
        </>
    );
}
