import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";

export const MarkdownLink: LunaticSlotComponents["MarkdownLink"] = props => {
    const { href, children, tooltip } = props;

    console.log(props);
    const id = useId();

    return (
        <>
            <a
                {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                id={id}
                href={href}
                aria-describedby={tooltip ? `tooltip-${id}` : undefined}
            >
                {children}
            </a>
            {tooltip && (
                <span
                    className="fr-tooltip fr-placement"
                    id={`tooltip-${id}`}
                    role="tooltip"
                    aria-hidden="true"
                >
                    {tooltip}
                </span>
            )}
        </>
    );
};
