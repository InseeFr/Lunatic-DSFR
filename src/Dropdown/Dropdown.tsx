import { useCallback } from "react";
import Select from "@codegouvfr/react-dsfr/Select";
import { getState, getStateRelatedMessage } from "../utils/errors/getErrorStates";
import { getOptions, type OptionType } from "./getOptions";
import { useStyles } from "tss-react/dsfr";
import type { LunaticError } from "@inseefr/lunatic";

type DropdownType = {
    disabled: boolean;
    options: Array<OptionType>;
    onSelect: (value?: string | boolean | number) => void;
    description: string;
    className: string;
    label: string;
    errors: Array<LunaticError>;
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
    value,
    disabled,
}: DropdownType) {
    const { cx } = useStyles();
    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLSelectElement>) {
            onSelect(e.target.value);
        },
        [onSelect],
    );

    return (
        <Select
            className={cx("dropdown-lunatic-dsfr", className)}
            nativeSelectProps={{ onChange: handleChange, value: value ?? "" }}
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
