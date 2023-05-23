import classnames from "classnames";
import Description from "./description";

type LegendType = {
    children: string;
    id: string;
    className?: string;
    description?: string | Record<string, unknown[]>;
};

function Legend({ children, id, className, description }: LegendType) {
    if (children) {
        return (
            <>
                <legend
                    id={id}
                    className={classnames("lunatic-legend", "fr-fieldset__legend", "fr-h3", className)}
                >
                    {children}
                    <Description value={description} className={className} />
                </legend>
            </>
        );
    }
    return null;
}

export default Legend;
