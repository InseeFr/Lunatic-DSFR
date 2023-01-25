import React from 'react';
// import DropdownDSFR from './DropdownDSFR'
import classnames from 'classnames';
import Select from "@codegouvfr/react-dsfr/Select"
import classNames from 'classnames';

export default function Dropdown({
	disabled,
	options,
	onSelect,
	className,
	label,
	errors,
}: {
	disabled:boolean,
	options:{value: string, label: {props: {expression: string}}}[],
	onSelect:Function,
	className:string,
	label:string,
	errors:Object,
}) {
	return (
		<Select
			className={classnames('dropdown-lunatic-dsfr', className, { disabled })}
			// hintText is not currently operational in react-dsfr
			// hintText={description}
			nativeSelectProps={{onSelect: onSelect()}}
			disabled={disabled}
			// onSelect={onSelect}
			label={label}
			// errors={errors}
		>
			{options.map(function(option: {value: string, label: {props: {expression: string}}}) {
				const { value, label } = option;
				const { expression } = label.props; 
                return (
                    <option value={value}>{expression}</option>
        	        )
                })}
		</Select>
	);
}

