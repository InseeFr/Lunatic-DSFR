import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Input } from "@codegouvfr/react-dsfr/Input"
import { StringOptionsWithImporter } from 'sass';

export default  function InputNumber({
	id,
	value,
	onChange,
	disabled,
	readOnly,
	labelId,
	min,
	max,
	step,
	unit,
}:{
	id:string, 
	value:string, 
	onChange: Function, 
	disabled: boolean, 
	readOnly: boolean, 
	labelId: number, 
	min: number, 
	max: number, 
	step: number, 
	unit: string, 
}) {
	const handleChange = useCallback(
		function (e: React.ChangeEvent<HTMLInputElement>) {
			const val = e.target.valueAsNumber;
			onChange(isNaN(val) ? null : val);
		},
		[onChange]
	);
	const unitDisplay = (unit?: string) => {
		if (unit !== ""){
			return (
				<span className="fr-col-1">{unit}</span>
			)
		} 
	}

	let inputNumberColumns = "fr-col-12 "

	if (unit !== undefined) {
		inputNumberColumns = "fr-col-11 "
	} 

	console.log(inputNumberColumns)
	return (
		<div className="lunatic-input-number-container fr-grid-row fr-grid-row--middle">
			<Input 
				label=""
				className={inputNumberColumns + classnames('lunatic-dsfr-input-number', { disabled, readOnly })}
				nativeInputProps={{
					inputMode: 'numeric',
					id: id, 
					pattern: '[0-9]*',
					type: 'number',
					onChange: handleChange,
					readOnly: readOnly,
					disabled: disabled,
					min: min,
					max: max,
					step: step,
				}}
			/>
			{/* {unit && <span className="fr-col-1">{unit}</span>} */}
			{unitDisplay(unit)}
		</div>
	);
}


