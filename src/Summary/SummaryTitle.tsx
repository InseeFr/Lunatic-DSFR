import type { LunaticComponentProps } from "@inseefr/lunatic";

export function SummaryTitle(props: LunaticComponentProps<"Summary">) {
    const { label } = props;
    if (label) {
        return (
            <div className="lunatic-dsfr-summary-label">
                <h2>{label}</h2>
            </div>
        );
    }

    return null;
}
