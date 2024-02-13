import { Description } from "./description";
import { useStyles } from "tss-react/dsfr";

type LegendType = {
    children: string;
    id: string;
    className?: string;
    description?: string | Record<string, unknown[]>;
};

export function Legend({ children, id, className, description }: LegendType) {
    const { cx } = useStyles();
    if (children) {
        return (
            <legend
                id={id}
                className={cx("lunatic-legend", "fr-fieldset__legend", "fr-h3", "fr-mb-0", className)}
            >
                {children}
                <Description value={description} className={className} />
            </legend>
        );
    }
    return null;
}
