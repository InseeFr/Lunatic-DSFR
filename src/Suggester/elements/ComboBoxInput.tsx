import { useRef, useEffect, HTMLAttributes, KeyboardEventHandler } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

export type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    labelledBy?: string;
    focused?: boolean;
} & HTMLAttributes<HTMLInputElement>;

export function ComboboxInput({
    placeholder,
    disabled,
    onChange,
    value,
    id,
    labelledBy,
    focused,
}: InputProps) {
    const inputEl = useRef<HTMLInputElement>(null);
    const { cx } = useStyles();

    useEffect(() => {
        if (inputEl.current && focused) {
            inputEl.current.focus();
        }
    }, [inputEl, focused]);

    const onKeydown: KeyboardEventHandler = e => {
        const { key } = e;
        if (key === "ArrowUp" || key === "ArrowDown") {
            e.preventDefault();
        }
    };

    return (
        <input
            ref={inputEl}
            id={id}
            role="combobox"
            className={cx("lunatic-dsfr-combo-box-input", fr.cx("fr-input"))}
            type="text"
            onChange={onChange}
            value={value}
            aria-label="lunatic-combo-box"
            title="combo-box"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder={placeholder}
            disabled={disabled}
            aria-labelledby={labelledBy}
            onKeyDown={onKeydown}
        />
    );
}
