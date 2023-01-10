import React, { useCallback } from 'react';
import classnames from 'classnames';


function checkValue(value: string) {
	return value ?? '';
}

export default function Input({
	value,
	onChange,
	disabled,
	required,
	maxLength,
	id,
	labelledBy,
}:{
    value: string,
	onChange: Function,
	disabled: boolean,
	required: boolean,
	maxLength: number,
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
		<input
			id={id}
			// labelledbby={labelledBy}
			autoComplete="off"
			type="text"
			disabled={disabled}
			className={classnames('lunatic-input', "fr-input")}
			value={checkValue(value)}
			onChange={handleChange}
			aria-required={required}
			required={required}
			maxLength={maxLength}
		/>
	);
}

Input.defaultProps = {
	disabled: false,
	required: true,
	maxLength: Number.MAX_SAFE_INTEGER,
};

