// import { useId } from "react";
import classnames from "classnames";
import Select from "@codegouvfr/react-dsfr/Select";

export function Dropdown({
    disabled,
    options,
    onSelect,
    className,
    label,
    state,
    stateRelatedMessage,
}: {
    disabled: boolean;
    options: { value: string; label: { props: { expression: string } } }[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    className: string;
    label: string;
    state: "success" | "error" | "default" | undefined;
    stateRelatedMessage: string;
}) {
    // const selectId = `select-${useId()}`;
    return (
        <Select
            className={classnames("dropdown-lunatic-dsfr", className, { disabled })}
            nativeSelectProps={{ onSelect: onSelect() }}
            disabled={disabled}
            label={label}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        >
            {options.map(function (option: { value: string; label: { props: { expression: string } } }) {
                const { value, label } = option;
                const { expression } = label.props;
                return <option value={value}>{expression}</option>;
            })}
        </Select>
    );
}

export default Dropdown;
