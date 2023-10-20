import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import { PropsWithChildren, ReactNode } from "react";

function ListResponses({ title, children }: PropsWithChildren<{ title: ReactNode }>) {
    return (
        <div className={classnames("lunatic-dsfr-summary-responses-iteration", fr.cx("fr-pb-2w"))}>
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

function SummaryResponses({
    sections,
}: {
    sections: Array<{
        title?: ReactNode;
        values?: Array<{ label: ReactNode; value: ReactNode }>;
    }>;
}) {
    return (
        <>
            {sections.map(section => {
                if (section) {
                    const { title, values } = section;
                    return (
                        <ListResponses title={title}>
                            <Responses values={values} />
                        </ListResponses>
                    );
                }
                return null;
            })}
        </>
    );
}

export default SummaryResponses;
