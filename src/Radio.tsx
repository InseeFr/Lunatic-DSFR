import { useCallback } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { RadioButtons as RadioDSFR } from "@codegouvfr/react-dsfr/RadioButtons";
import { LunaticError } from "./utils/type/type";
import { makeStyles } from "tss-react/dsfr";

const useStyles = makeStyles()({
    root: {
        "> legend": {
            fontSize: "1.75rem !important",
            lineHeight: "2.25rem !important",
            paddingBottom: "1rem",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            marginLeft: "-0.25rem",
            marginRight: "-0.25rem",
            fontWeight: "700 !important",
        },
    },
});

type RadioGroupType = {
    onSelect: (value?: unknown) => void;
    disabled?: boolean;
    label: string;
    description: string;
    options: Array<{
        value: string;
        description?: string;
        label: string;
    }>;
    id: string;
    errors: Array<LunaticError>;
    value?: number | string;
};

type OptionType = {
    label: string;
    value?: number | string;
    description?: string;
};

function getOptions(
    options: Array<OptionType>,
    selection: string | number | undefined | null,
    handleChange: (value?: string | number) => void,
) {
    return options.map(function (option) {
        const { value, label, description } = option;
        return {
            label,
            hintText: description,
            nativeInputProps: {
                value,
                onChange: () => handleChange(value),
                checked: selection === value,
            },
        };
    });
}

export function Radio({
    onSelect,
    disabled,
    label,
    description,
    options,
    id,
    errors,
    value,
}: RadioGroupType) {
    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);
    const { classes, cx } = useStyles();
    const handleChange = useCallback(
        function (value?: unknown) {
            onSelect(value);
        },
        [onSelect],
    );

    const htmlOptions = getOptions(options, value, handleChange);

    return (
        <RadioDSFR
            name={id}
            disabled={disabled}
            legend={label}
            hintText={description}
            className={cx(classes.root, "lunatic-dsfr-radio")}
            options={htmlOptions}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default Radio;
