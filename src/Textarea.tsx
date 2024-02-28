import Input from "@codegouvfr/react-dsfr/Input";
import type { LunaticComponentProps } from "@inseefr/lunatic";

export function Textarea(props: LunaticComponentProps<"Textarea">) {
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
        readOnly,
    } = props;

    console.log(props);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value);
    return (
        <Input
            label={label}
            hintText={description}
            id={id}
            textArea
            nativeTextAreaProps={{
                value: value ?? "",
                rows,
                required,
                maxLength,
                onChange: handleChange,
                cols,
                placeholder: placeHolder,
                readOnly,
                "aria-invalid": !!errors,
            }}
        />
    );
}
