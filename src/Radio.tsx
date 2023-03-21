import { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { RadioButtons as RadioDSFR } from "@codegouvfr/react-dsfr/RadioButtons";
import { LunaticError } from "./utils/type/type";

export function Radio({
    onSelect,
    disabled,
    label,
    description,
    options,
    id,
    errors,
}: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    disabled: boolean;
    label: string;
    description: string;
    options: Array<{
        value: string;
        description: { props: { expression: string } };
        label: { props: { expression: string } };
        checked?: boolean;
    }>;
    id: string;
    errors: Record<string, Array<LunaticError>>;
}) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            onSelect(e.target.value);
        },
        [onSelect],
    );
    const radioOptions = options.map(function (option) {
        const { value, label, description, checked } = option;

        return {
            label: label.props.expression,
            hintText: description.props.expression,
            nativeInputProps: {
                value: value,
                onChange: handleChange,
                checked: checked,
            },
        };
    });
    return (
        <RadioDSFR
            disabled={disabled}
            legend={label}
            name="radio"
            hintText={description}
            className={classnames("lunatic-dsfr-radio")}
            options={radioOptions}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

Radio.defaultProps = {
    disabled: false,
};

export default Radio;
