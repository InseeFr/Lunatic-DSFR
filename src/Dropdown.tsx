import { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import Select from "@codegouvfr/react-dsfr/Select";
import { LunaticError } from "./utils/type/type";

type OptionType = {
    value: string | number;
    label: string;
};

function getOptions(options?: Array<OptionType>) {
    if (options) {
        return options.map(function (option) {
            const { value, label } = option;
            return <option value={value}>{label}</option>;
        });
    }
    return [];
}

export function Dropdown({
    disabled,
    options,
    onSelect,
    className,
    label,
    description,
    errors,
    id,
}: {
    disabled: boolean;
    options: Array<OptionType>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    description: string;
    className: string;
    label: string;
    id: string;
    errors: Record<string, Array<LunaticError>>;
}) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLSelectElement>) {
            onSelect(e.target.value);
        },
        [onSelect],
    );
    return (
        <Select
            className={classnames("dropdown-lunatic-dsfr", className, { disabled })}
            nativeSelectProps={{ onChange: handleChange }}
            disabled={disabled}
            label={label}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
            hint={description}
        >
            {getOptions(options)}
        </Select>
    );
}

export default Dropdown;
