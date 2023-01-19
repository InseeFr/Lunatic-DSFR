import React from 'react';
import classnames from 'classnames';

// function dropdownOptions({options}:{options: Array<Object>}) {
//     return (
//         options.map(function (option: {value: string, label: {value: string}}) {
//             return(
//                 <>
//                     Hello
//                 </>
//             )
//         })
//     )
// }

export default function DropdownDSFR({
    id,
    className,
    htmlFor,
    labelId,
    disabled,
    options,
    onSelect,
    value,
    label,
    errors,
    description
}:{
    id:string,
    className:string,
    htmlFor:string,
	labelId:string,
	disabled:boolean,
	options:{value: string, label: {props: {expression: string}}}[],
	onSelect:Function,
	value:string,	
	label:string,
	errors:Object,
    description:string,
}) {
    
    return(
        <div className="fr-select-group">
            <label className="fr-label" htmlFor={id} id={labelId}>{label}
                <span className="fr-hint-text">{description}</span>
            </label>
            <select className={classnames('lunatic-dsfr-select', "fr-select", { disabled })} id={id} name="select-hint">
                {options.map(function(option: {value: string, label: {props: {expression: string}}}) {
                    return (
                        <option value={option.value}>{option.label.props.expression}</option>
                    )
                })}
            </select>
        </div>
    )
}