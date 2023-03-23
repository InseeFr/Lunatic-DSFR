import React, { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { LunaticError } from "@inseefr/lunatic";

function checkValue(value: string) {
    return value ?? "";
}

// {
//     id: [
//         Pick<
//             {
//                 id: string;
//                 criticality: "INFO" | "WARN" | "ERROR";
//                 typeOfControl: "FORMAT" | "CONSISTENCY";
//                 control: { value: string; type: "VTL" | "VTL|MD" };
//                 errorMessage: { value: string; type: "VTL" | "VTL|MD" };
//                 bindingDependencies: string[];
//             },
//             "id" | "criticality" | "typeOfControl"
//         > & {
//             id: string;
//             criticality: "INFO" | "WARN" | "ERROR";
//             formula: string;
//             labelFormula: string;
//             errorMessage: ReactNode;
//         },
//     ];
// };

export type TypeError = Record<string, Array<LunaticError>>;

export function Input({
    value,
    onChange,
    disabled,
    required,
    maxLength,
    label,
    description,
    id,
    errors,
}: {
    value: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function;
    disabled: boolean;
    required: boolean;
    maxLength: number;
    label: string;
    description: string;
    id: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    errors: TypeError;
}) {
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.value;
            onChange(value);
        },
        [onChange],
    );

    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);
    return (
        <InputDSFR
            label={label}
            className={classnames("lunatic-dsfr-input", { disabled })}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: checkValue(value),
                required: required,
                onChange: handleChange,
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

Input.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER,
};

export default Input;
