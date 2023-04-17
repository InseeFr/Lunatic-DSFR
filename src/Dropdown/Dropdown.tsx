import { useCallback } from "react";
import Select from "@codegouvfr/react-dsfr/Select";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "../utils/errors/getErrorStates";
import { LunaticError } from "../utils/type/type";
import { getOptions, OptionType } from "./getOptions";

type DropdownType = {
    disabled: boolean;
    options: Array<OptionType>;
    onSelect: (value?: string | boolean | number) => void;
    description: string;
    className: string;
    label: string;
    id: string;
    errors: Record<string, Array<LunaticError>>;
    value?: string | number;
    writable?: boolean;
};

export function Dropdown({
    options,
    onSelect,
    className,
    label,
    description,
    errors,
    id,
    value,
    disabled,
}: DropdownType) {
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
            className={classnames("dropdown-lunatic-dsfr", className)}
            nativeSelectProps={{ onChange: handleChange, value }}
            label={label}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
            hint={description}
            disabled={disabled ?? false}
        >
            {getOptions(options)}
        </Select>
    );
}

export default Dropdown;
