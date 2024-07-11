import { useId, type ComponentProps } from "react";
import { Checkbox } from "@codegouvfr/react-dsfr/Checkbox";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { getErrorStates } from "./utils/errorStates";
import Input from "@codegouvfr/react-dsfr/Input";
import { useQuestionId } from "./Question";

export const CheckboxGroup: LunaticSlotComponents["CheckboxGroup"] = props => {
    const { options, label, description, errors, disabled, orientation } = props;

    const { state, stateRelatedMessage } = getErrorStates(errors);

    const id = useId();
    const questionId = useQuestionId();

    /**
     * Note that the error message ID follows the format `${id}-messages` because this is the convention used by the underlying library react-dsfr
     * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/shared/Fieldset.tsx#L101
     */
    const errorOptions = { state, messageId: `${id}-messages` };
    return (
        <Checkbox
            id={id}
            legend={label}
            hintText={description}
            disabled={disabled}
            options={getOptions({ options, error: errorOptions })}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
            orientation={orientation}
            aria-labelledby={!label ? questionId : undefined}
        />
    );
};

function getOptions({
    options,
    error,
}: {
    options: ComponentProps<LunaticSlotComponents["CheckboxGroup"]>["options"];
    error: { state: "default" | "error" | "success"; messageId: string };
}) {
    return options.map(option => {
        const { label, description, name, onCheck, checked } = option;
        const displayArbitraryInput = !!option.onDetailChange && option.checked;
        return {
            label: <span>{label}</span>,
            hintText: displayArbitraryInput ? (
                <>
                    {description}
                    <Input
                        label={option.detailLabel}
                        nativeInputProps={{
                            id: "detailId",
                            value: option.detailValue ?? "",
                            onChange: e => option.onDetailChange!(e.target.value), //can't be undefined if displayArbitraryInput is true
                        }}
                    />
                </>
            ) : (
                description
            ),
            nativeInputProps: {
                name,
                checked,
                onChange: () => onCheck(!checked),
                ...(error.state === "error"
                    ? { "aria-invalid": true, "aria-errormessage": error.messageId }
                    : {}),
            },
        };
    });
}
