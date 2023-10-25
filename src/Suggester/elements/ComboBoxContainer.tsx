import type { PropsWithChildren } from "react";
import classnames from "classnames";
import { LunaticBaseProps } from "../../type";
import { getState, getStateRelatedMessage } from "../../utils/errors/getErrorStates";

type Props = PropsWithChildren<{
    className?: string;
    id?: string;
    classStyle?: string;
    errors?: LunaticBaseProps["errors"];
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
        state = getState(errors, id);
        stateRelatedMessage = getStateRelatedMessage(errors, id);
    }
    return (
        <div
            id={`${className ?? "lunatic"}-dsfr-combo-box-container-${id}`}
            className={classnames(
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
