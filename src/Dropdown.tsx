import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";
import { useId } from "react";
import { renderToString } from "react-dom/server";

export const Dropdown: LunaticSlotComponents["Dropdown"] = props => {
    const { onChange, options, value, declarations, description, disabled, errors, label, readOnly } =
        props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const { state, stateRelatedMessage } = getErrorStates(errors);

    const id = useId();

    return (
        <Select
            id={id}
            nativeSelectProps={{
                value: value ?? undefined,
                onChange: e => onChange(e.target.value),
                ...(state === "error"
                    ? {
                          "aria-invalid": state === "error",
                          /**
                           * Note that the error message ID follows the format `${id}-desc` because this is the convention used by the underlying library react-dsfr.
                           * See: https://github.com/codegouvfr/react-dsfr/blob/main/src/SelectNext.tsx#L120
                           */
                          "aria-errormessage": `${id}-desc`,
                      }
                    : {}),
            }}
            label={label}
            // react-dsfr has changed state type only for this components let's see what's going on later
            state={state === "success" ? "valid" : state}
            stateRelatedMessage={stateRelatedMessage}
            hint={description}
            disabled={disabled || readOnly}
            options={options.map(({ label, value }) => ({
                // MD is not yet forbidden in options so in this case we must convert label in string
                label: typeof label === "object" ? renderToString(label) : label,
                value,
            }))}
        />
    );
};
