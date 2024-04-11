import { getErrorStates } from "./utils/errorStates";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const CheckboxBoolean: LunaticSlotComponents["CheckboxBoolean"] = props => {
    const { disabled, checked, id, onChange, label, declarations, description, errors, readOnly } =
        props;

    const { state, stateRelatedMessage } = getErrorStates(errors);

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    return (
        <Checkbox
            id={id}
            disabled={disabled || readOnly}
            options={[
                {
                    label: <span>{label}</span>,
                    hintText: description,
                    nativeInputProps: {
                        onChange: onChange,
                        checked: checked,
                    },
                },
            ]}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
