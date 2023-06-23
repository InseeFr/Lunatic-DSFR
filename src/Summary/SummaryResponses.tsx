import { PropsWithChildren, ReactNode } from "react";

function ListResponses({ title, children }: PropsWithChildren<{ title: ReactNode }>) {
    return (
        <div className="lunatic-dsfr-summary-responses-iteration fr-pb-2w">
            <hr className="fr-pb-2w" />
            <h6 className="fr-mb-0">{title}</h6>
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
                        <p className="fr-mb-0">
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
