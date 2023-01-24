import React from 'react';
// import DropdownDSFR from './DropdownDSFR'
import Select from "@codegouvfr/react-dsfr/Select"

export default function Dropdown({
	id,
	labelId,
	disabled,
	options,
	onSelect,
	htmlFor,
	writable,
	className,
	value,
	description,
	label,
	errors,
}: {
	id:string,
	labelId:string,
	disabled:boolean,
	options:{value: string, label: {props: {expression: string}}}[],
	onSelect:Function,
	htmlFor:string,
	writable:boolean,
	className:string,
	value:string,
	description:string,
	label:string,
	errors:Object,
}) {
	return (
		<Select
			// id={id}
			// className={className}
			nativeSelectProps={{className: "test"}}
			// htmlFor={htmlFor}
			// labelId={labelId}
			// disabled={disabled}
			// options={options}
			// onSelect={onSelect}
			// value={value}
			label={label}
			// errors={errors}
			// description={description}
		>
			{options.map(function(option: {value: string, label: {props: {expression: string}}}) {
                    return (
                        <option value={option.value}>{option.label.props.expression}</option>
                    )
                })}
		</Select>
	);
}

