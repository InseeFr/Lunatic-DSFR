import classnames from "classnames";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";

export function CheckboxGroup({
    label,
    id,
    disabled,
    className,
    options,
}: {
    disabled: boolean;
    label: string;
    id: string;
    className: string;
    options: { label: string; description: { value: string; type: string } }[];
}) {
    const parsedOptions = options.map(function ({
        label,
        description,
    }: {
        label: string;
        description: {
            value: string;
            type: string;
        };
    }) {
        return {
            label: label,
            hintText: description.value,
            nativeInputProps: {
                name: label,
                value: label,
            },
        };
    });

    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id, { disabled })}
            legend={label}
            options={parsedOptions}
        />
    );
}

export default CheckboxGroup;
