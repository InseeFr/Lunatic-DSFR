import { ReactNode, useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import Select from "@codegouvfr/react-dsfr/Select";

export function Dropdown({
    disabled,
    options,
    onSelect,
    className,
    label,
    errors,
    id,
}: {
    disabled: boolean;
    options: { value: string; label: { props: { expression: string } } }[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    className: string;
    label: string;
    id: string;
    errors: {
        id: [
            Pick<
                {
                    id: string;
                    criticality: "INFO" | "WARN" | "ERROR";
                    typeOfControl: "FORMAT" | "CONSISTENCY";
                    control: { value: string; type: "VTL" | "VTL|MD" };
                    errorMessage: { value: string; type: "VTL" | "VTL|MD" };
                    bindingDependencies: string[];
                },
                "id" | "criticality" | "typeOfControl"
            > & {
                id: string;
                criticality: "INFO" | "WARN" | "ERROR";
                formula: string;
                labelFormula: string;
                errorMessage: ReactNode;
            },
        ];
    };
}) {
    // const selectId = `select-${useId()}`;
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
        >
            {options.map(function (option: { value: string; label: { props: { expression: string } } }) {
                const { value, label } = option;
                const { expression } = label.props;
                return <option value={value}>{expression}</option>;
            })}
        </Select>
    );
}

export default Dropdown;
