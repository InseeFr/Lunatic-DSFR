import { LunaticBaseProps } from "../type";

type SummaryTitleProps = Pick<LunaticBaseProps<string>, "label">;

export function SummaryTitle(props: SummaryTitleProps) {
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
