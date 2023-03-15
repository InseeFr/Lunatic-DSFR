import {
    // useCallback,
    ReactNode,
} from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { RadioButtons as RadioDSFR } from "@codegouvfr/react-dsfr/RadioButtons";

export function Radio({
    value,
    onSelect,
    disabled,
    required,
    maxLength,
    label,
    description,
    options,
    id,
    errors,
}: {
    value: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    disabled: boolean;
    required: boolean;
    maxLength: number;
    label: string;
    description: string;
    options: {
        value: string;
        description: { props: { expression: string } };
        label: { props: { expression: string } };
    }[];
    id: string;
    // TODO: Clean types after merge of fix-typage branchgit
    // eslint-disable-next-line @typescript-eslint/ban-types
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
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);
    // Below can be uncommented to test errors in storybook
    // const handleChange = useCallback(
    //     function (e: React.ChangeEvent<HTMLSelectElement>) {
    //         onSelect(e.target.value);
    //     },
    //     [onSelect],
    // );

    return (
        <RadioDSFR
            legend={label}
            name="radio"
            hintText={description}
            className={classnames("lunatic-dsfr-radio", { disabled })}
            options={options.map(function (option) {
                const { value, label, description } = option;

                return {
                    label: label.props.expression,
                    hintText: description.props.expression,
                    nativeInputProps: {
                        value: value,
                        // onClick: handleChange
                    },
                };
            })}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

Radio.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER,
};

export default Radio;
