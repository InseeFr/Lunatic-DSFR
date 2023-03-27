import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";

type OptionType = {
    label: string;
    checked?: boolean;
    name?: string;
    description?: string;
    onClick: (status: boolean) => void;
};

function getOptions(options?: Array<OptionType>) {
    if (options) {
        return options.map(function (option) {
            const { label, name, checked, onClick } = option;

            return {
                label,
                nativeInputProps: {
                    name,
                    check: checked,
                    onClick: () => onClick(!checked),
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
}: {
    disabled: boolean;
    label: string;
    description: string;
    id: string;
    className: string;
    options: Array<OptionType>;
    errors: Record<string, Array<LunaticError>>;
}) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={description}
            options={getOptions(options)}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default CheckboxGroup;
