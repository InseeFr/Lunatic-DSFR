import { useId } from "react";
import classnames from "classnames";
import Select from "@codegouvfr/react-dsfr/Select";
import Errors from "./utils/errors";

export function Dropdown({
    disabled,
    options,
    onSelect,
    className,
    label,
    errors,
}: {
    disabled: boolean;
    options: { value: string; label: { props: { expression: string } } }[];
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSelect: Function;
    className: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    errors: Object;
}) {
    const selectId = `select-${useId()}`;
    return (
        <Select
            className={classnames("dropdown-lunatic-dsfr", className, { disabled })}
            // hintText is not currently operational in react-dsfr
            // hintText={description}
            nativeSelectProps={{ onSelect: onSelect() }}
            disabled={disabled}
            // onSelect={onSelect}
            label={label}
        >
            {options.map(function (option: { value: string; label: { props: { expression: string } } }) {
                const { value, label } = option;
                const { expression } = label.props;
                return <option value={value}>{expression}</option>;
            })}
            <Errors errors={errors} activeId={selectId} />
        </Select>
    );
}

export default Dropdown;
