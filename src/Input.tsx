import { type ChangeEventHandler } from "react";
import { getErrorStates } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { tss } from "tss-react/dsfr";
import type { LunaticCustomizedComponent } from "@inseefr/lunatic";

export const Input: LunaticCustomizedComponent["Input"] = props => {
    const {
        value,
        handleChange,
        response,
        disabled,
        required,
        maxLength,
        label,
        description,
        id,
        errors,
        readOnly,
        declarations,
    } = props;

    const { classes, cx } = useStyles();

    const onChange: ChangeEventHandler<HTMLInputElement> = e => {
        handleChange(response, e.target.value);
    };

    const { state, stateRelatedMessage } = getErrorStates(errors, id);

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    return (
        <InputDSFR
            label={label}
            disabled={disabled}
            className={cx("lunatic-dsfr-input", cx(classes.readOnly))}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: (value ?? "").toString(),
                required: required,
                onChange: onChange,
                readOnly: readOnly,
                "aria-invalid": state === "error",
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};

const useStyles = tss.create({
    readOnly: {
        ".fr-input:read-only": {
            "color": "var(--text-disabled-grey)",
            "boxShadow": "inset 0 -2px 0 0 var(--border-disabled-grey)",
        },
    },
});
