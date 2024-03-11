import type { ComponentProps } from "react";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { getErrorStates } from "./utils/errorStates";

export const CheckboxGroup: LunaticSlotComponents["CheckboxGroup"] = props => {
    const { options, id, label, description, errors } = props;

    const { state, stateRelatedMessage } = getErrorStates(errors);
    return (
        <Checkbox
            id={id}
            legend={label}
            hintText={description}
            options={getOptions(options)}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};

function getOptions(options: ComponentProps<LunaticSlotComponents["CheckboxGroup"]>["options"]) {
    return options.map(option => {
        const { label, description, name, onClick, checked } = option;
        return {
            label,
            hintText: description,
            nativeInputProps: {
                name,
                checked,
                onChange: () => onClick(!checked),
            },
        };
    });
}
