import type { PropsWithChildren } from "react";
import { getState, getStateRelatedMessage } from "../../utils/errorStates";
import { useStyles } from "tss-react/dsfr";
import type { LunaticError } from "@inseefr/lunatic";

type Props = PropsWithChildren<{
    className?: string;
    id?: string;
    classStyle?: string;
    errors?: LunaticError[];
}>;

function Errors({ ...props }) {
    const { state, stateRelatedMessage, id } = props;
    if (!stateRelatedMessage || !state) {
        return null;
    }
    return (
        <p id={`${id}-desc-${state}`} className={`fr-${state}-text`}>
            {stateRelatedMessage}
        </p>
    );
}

export function ComboboxContainer({
    children,
    className,
    id,
    classStyle = "default-style",
    errors,
}: Props) {
    let state = undefined;
    let stateRelatedMessage = undefined;
    if (errors && id) {
        state = getState(errors);
        stateRelatedMessage = getStateRelatedMessage(errors);
    }
    const { cx } = useStyles();

    return (
        <div
            id={`${className ?? "lunatic"}-dsfr-combo-box-container-${id}`}
            className={cx(
                `${className ?? "lunatic"}-dsfr-combo-box-container`,
                `${className ?? "lunatic"}-dsfr-suggester-${classStyle}`,
                `lunatic-dsfr-suggester-default-style`,
                `fr-input-group`,
                state ? `fr-input-group--${state}` : null,
                classStyle,
            )}
        >
            {children}
            <Errors state={state} stateRelatedMessage={stateRelatedMessage} />
        </div>
    );
}
