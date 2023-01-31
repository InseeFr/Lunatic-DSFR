import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input"


function checkValue(value: string) {
	return value ?? '';
}

export default function Input({
	value,
	onChange,
	disabled,
	required,
	maxLength,
	label,
	description,
	id,
}:{
    value: string,
	onChange: Function,
	disabled: boolean,
	required: boolean,
	maxLength: number,
	label: string,
	description: string,
	id: string,
	labelledBy: number,
}
) {
	const handleChange = 
		useCallback(
			function (e: React.ChangeEvent<HTMLInputElement>) {
				const value = e.target.value;
				onChange(value);
			}, [onChange]
		);

	return (
		<InputDSFR
			label={label}
			hintText={description}
			className={classnames('lunatic-dsfr-input', { disabled })}
			nativeInputProps={{
				id: id, 
				maxLength: maxLength, 
				value: checkValue(value), 
				required: required, 
				onChange: handleChange
			}}
		/>
	);
}

Input.defaultProps = {
	disabled: false,
	required: true,
	maxLength: Number.MAX_SAFE_INTEGER,
};

