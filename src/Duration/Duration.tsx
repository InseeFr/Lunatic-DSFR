import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { getErrorStates } from "../utils/errorStates";
import { fr } from "@codegouvfr/react-dsfr";
import { FiledsetError } from "../shared/FieldsetError";
import { type NumberFormatValues } from "react-number-format";
import { useState } from "react";
import { buildValueFromDuration, extractDurationFromValue } from "./utils";
import type { DurationKey, DurationValues, DurationValuesFormat } from "./type";
import { DateElement } from "./DateElement";
import { TimeElement } from "./TimeElement";

export const Duration: LunaticSlotComponents["Duration"] = props => {
    const { errors, value, label, format, onChange, declarations, description, id, disabled, readOnly } =
        props;

    const { state, stateRelatedMessage } = getErrorStates(errors);

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const [durationValues, setDurationValues] = useState<DurationValues>(() =>
        extractDurationFromValue(value, format),
    );

    const onDurationChange = (durationValues: DurationValues) => {
        onChange(buildValueFromDuration(durationValues));
    };

    const updateDuration = <T extends DurationValuesFormat>(key: DurationKey<T>, value: string) => {
        const newDuration = {
            ...durationValues,
            [key]: value,
        };

        setDurationValues(newDuration);
        onDurationChange(newDuration);
    };

    const onValueChange = <T extends DurationValuesFormat>(
        values: NumberFormatValues,
        key: DurationKey<T>,
    ) => {
        updateDuration<T>(key, values.value);
    };

    return (
        <fieldset
            className={fr.cx("fr-fieldset", state === "error" && "fr-fieldset--error")}
            id={`${id}-fieldset`}
            aria-labelledby={`${id}-fieldset-legend ${id}-fieldset-messages`}
        >
            <legend className={fr.cx("fr-fieldset__legend")} id={`${id}-fieldset-legend`}>
                {label}
                <span className={fr.cx("fr-hint-text")}>{description}</span>
            </legend>

            {(() => {
                switch (durationValues.format) {
                    case "PnYnM":
                        return (
                            <DateElement
                                disabled={disabled}
                                durationValues={durationValues}
                                id={id}
                                readOnly={readOnly}
                                onValueChange={onValueChange}
                            />
                        );
                    case "PTnHnM":
                        return (
                            <TimeElement
                                disabled={disabled}
                                durationValues={durationValues}
                                id={id}
                                readOnly={readOnly}
                                onValueChange={onValueChange}
                            />
                        );
                }
            })()}

            <FiledsetError state={state} stateRelatedMessage={stateRelatedMessage} id={id} />
        </fieldset>
    );
};
