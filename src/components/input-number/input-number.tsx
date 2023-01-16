import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Input } from "@codegouvfr/react-dsfr/Input"
import { StringOptionsWithImporter } from 'sass';

const UnitDisplay = ({unit}: {unit?: string}) => {
	if (unit !== ""){
		return (
			<span className="fr-col-1">{unit}</span>
		)
	} 
	return null; 
}

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

	return (
		<div className="lunatic-input-number-container fr-grid-row fr-grid-row--middle">
			<Input 
				label=""
				className={classnames('lunatic-dsfr-input-number', { 
					disabled, 
					readOnly, 
					"fr-col-11" : unit !== undefined, 
					"fr-col-12" : unit === undefined 
				})}
				nativeInputProps={{
					inputMode: 'numeric',
					id: id, 
					maxLength: 30, 
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
			<UnitDisplay unit={unit} />
		</div>
	);
}


