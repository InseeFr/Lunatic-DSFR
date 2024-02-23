import { type ReactNode } from "react";
import { tss } from "tss-react/dsfr";

type ComboBoxOptionType = {
    id?: string;
    description?: ReactNode;
    label?: ReactNode;
    value: string;
    search?: string;
};

type Props = {
    option?: ComboBoxOptionType | null;
    placeholder?: string;
    search?: string;
    disabled?: boolean;
};

function isPlaceholder(option: Props["option"], search: Props["search"]) {
    return !option && (!search || search.length === 0);
}

const useStyles = tss.create({
    root: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    placeholder: {
        opacity: 1,
        fontStyle: "italic",
        color: "var(--text-mention-grey)",
    },
});

function getContent(option: Props["option"], search?: Props["search"], placeholder?: string) {
    if (option) {
        const { id, value, label } = option;
        return label ? `${label}` : id || value;
    }
    // TODO : Remove this when the cause for search not being a string is found
    if (search && typeof search !== "string") {
        console.error('Error in ComboxLabelSelection, unexpected object for "search"', search);
        return placeholder ?? "";
    }
    if (search && search.trim().length) {
        return search;
    }
    return placeholder ?? "";
}

export function ComboboxLabelSelection({ option, placeholder, search, disabled = false }: Props) {
    const isPh = isPlaceholder(option, search);
    const { classes, cx } = useStyles();

    return (
        <div
            className={cx("lunatic-dsfr-combo-box-selected", cx(classes.root), "fr-input", {
                disabled,
            })}
        >
            <span
                className={cx(
                    {
                        placeholder: isPh,
                        selection: !isPh,
                    },
                    isPh ? cx(classes.placeholder) : null,
                )}
            >
                {getContent(option, search, placeholder)}
            </span>
        </div>
    );
}
