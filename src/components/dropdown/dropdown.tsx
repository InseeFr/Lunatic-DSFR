import React from 'react';
import DropdownDSFR from './DropdownDSFR'

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
	options:Object,
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
		<>
		testtttt
		<DropdownDSFR
			id={id}
			className={className}
			htmlFor={htmlFor}
			labelId={labelId}
			disabled={disabled}
			options={options}
			onSelect={onSelect}
			value={value}
			label={label}
			errors={errors}
			description={description}
		/>
		</>
	);
}

