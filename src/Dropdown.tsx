import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";

export const Dropdown: LunaticSlotComponents["Dropdown"] = props => {
    const {
        id,
        onChange,
        options,
        value,
        declarations,
        description,
        disabled,
        errors,
        label,
        readOnly,
    } = props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const { state, stateRelatedMessage } = getErrorStates(errors);

    return (
        <Select
            id={id}
            nativeSelectProps={{ value: value ?? undefined, onChange: e => onChange(e.target.value) }}
            label={label}
            // react-dsfr has changed state type only for this components let's see what's going on later
            state={state === "success" ? "valid" : state}
            stateRelatedMessage={stateRelatedMessage}
            hint={description}
            disabled={disabled || readOnly}
            // @ts-expect-error due to https://github.com/codegouvfr/react-dsfr/blob/main/src/SelectNext.tsx#L72
            options={options.map(({ label, value }) => ({
                label,
                value,
            }))}
        />
    );
};
