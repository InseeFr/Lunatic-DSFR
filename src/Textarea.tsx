import Input from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Textarea: LunaticSlotComponents["Textarea"] = props => {
    const {
        value,
        onChange,
        label,
        description,
        errors,
        required,
        id,
        rows,
        maxLength,
        cols,
        placeHolder,
        disabled,
        readOnly,
    } = props;

    return (
        <Input
            label={label}
            hintText={description}
            id={id}
            textArea
            nativeTextAreaProps={{
                value: value ?? "",
                disabled,
                rows,
                required,
                maxLength,
                onChange: e => onChange(e.target.value),
                cols,
                placeholder: placeHolder,
                readOnly,
                "aria-invalid": !!errors,
            }}
        />
    );
};
