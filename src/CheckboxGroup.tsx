import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";
import { ReactNode, useState } from "react";

type CheckboxGroupOption = {
    label: ReactNode;
    name: string;
    checked: boolean;
    description?: ReactNode;
    onClick: (b: boolean) => void;
};

type Props = {
    options: CheckboxGroupOption[];
    errors?: Record<string, LunaticError[]>;
    id: string;
    label?: ReactNode;
    description?: ReactNode;
    shortcut?: boolean;
    disabled?: boolean;
    className?: string;
};

const [state, setState] = useState<"error" | "success" | "default" | undefined>(undefined);
const [stateRelatedMessage, setStateRelatedMessage] = useState<null | string>(null);

export function CheckboxGroup({ label, description, id, disabled, className, options, errors }: Props) {
    if (errors) {
        setState(getState(errors, id));
        console.log(getStateRelatedMessage(errors, id));
        setStateRelatedMessage("toto");
    }
    console.log(options);
    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={description}
            options={[]}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default CheckboxGroup;
