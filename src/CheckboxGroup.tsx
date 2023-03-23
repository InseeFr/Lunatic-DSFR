import { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";

function Options(
    options: {
        label: string;
        checked?: boolean;
        name?: string;
        description?: string;
        // eslint-disable-next-line @typescript-eslint/ban-types
        onClick: Function;
    }[],
) {
    return options.map(function (option, index) {
        const { label, name, description, checked, onClick } = option;
        const checkboxId = `lunatic-dsfr-checkbox-${index}-${name}`;

        const onClickOption = useCallback(
            function () {
                onClick(!checked);
            },
            [checked, onClick],
        );

        const handleKeyDown = useCallback(
            function (e: { code: string }) {
                const { code } = e;
                if (code === "Space") {
                    onClickOption();
                }
            },
            [onClickOption],
        );
        return {
            label: label,
            id: checkboxId,
            hintText: description,
            nativeInputProps: {
                name: checkboxId,
                checked: checked,
                onClick: onClickOption,
                onKeyDown: handleKeyDown,
                onChange: onClickOption,
            },
        };
    });
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
    options: {
        label: string;
        checked?: boolean;
        name?: string;
        description?: string;
        // eslint-disable-next-line @typescript-eslint/ban-types
        onClick: Function;
    }[];
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
            options={Options(options)}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default CheckboxGroup;
