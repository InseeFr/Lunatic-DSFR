import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";
import { useStyles } from "tss-react";

export const MarkdownLink: LunaticSlotComponents["MarkdownLink"] = props => {
    const { href, children, tooltip } = props;

    const id = useId();
    const { css } = useStyles();

    return (
        <>
            {href !== "." ? (
                <a
                    {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    id={id}
                    href={href}
                    aria-describedby={tooltip ? `tooltip-${id}` : undefined}
                >
                    {children}
                </a>
            ) : (
                <span
                    id={id}
                    tabIndex={0}
                    aria-describedby={tooltip ? `tooltip-${id}` : undefined}
                    className={css({
                        textDecoration: "underline",
                        textDecorationThickness: "var(--underline-thickness)",
                        textUnderlineOffset: 4,
                        ":hover": { textDecorationThickness: "calc(var(--underline-thickness) * 2)" },
                    })}
                >
                    {children}
                </span>
            )}
            {tooltip && (
                <span
                    className={fr.cx("fr-tooltip", "fr-placement")}
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
