import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";

type OptionType = {
    id?: string;
    label: string;
    value?: unknown;
    description?: string;
    name: string;
    onClick: (checked: boolean) => void;
};

type CheckboxGroupType = {
    disabled: boolean;
    label: string;
    description: string;
    id: string;
    className: string;
    options: Array<OptionType>;
    errors: Record<string, Array<LunaticError>>;
    value: Record<string, boolean | undefined>;
};

function getValue(value: Record<string, boolean | undefined>, name: string) {
    if (name in value) {
        return value[name] ?? false;
    }
    return false;
}

function getOptions(options: Array<OptionType>, value: Record<string, boolean | undefined>) {
    if (options) {
        return options.map(function (option) {
            const { label, id, description, name, onClick } = option;
            const checked = getValue(value, name);
            return {
                label,
                id,
                hintText: description,
                nativeInputProps: {
                    name: id,
                    checked,
                    onChange: () => onClick(!checked),
                },
            };
        });
    }
    return [];
}

export function CheckboxGroup({
    label,
    description,
    id,
    disabled,
    className,
    options,
    errors,
    value,
}: CheckboxGroupType) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={description}
            options={getOptions(options, value)}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default CheckboxGroup;
