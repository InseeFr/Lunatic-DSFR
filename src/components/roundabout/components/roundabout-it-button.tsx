import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Button } from "@codegouvfr/react-dsfr/Button"

function getStatus(complete: boolean, partial: boolean) {
	if (complete) {
		return 'complete';
	}
	if (partial) {
		return 'partial';
	}
	return 'unstarted';
}

function getLabel(complete: boolean, partial: boolean) {
	if (complete) {
		return 'Compléter';
	}
	if (partial) {
		return 'Continuer';
	}
	return 'Commencer';
}

//  When a questionnaire has been started, it shows the "complété" badge

const CompleteBadge = ({status, locked}: {status: string, locked: boolean}) => {
	if(status === "complete") {
		// let completeBadgeSpacing = "fr-mb-2w"
		// if (locked) {
		// 	completeBadgeSpacing = ""
		// }
		return (
			<div className={classnames("fr-col-12", { "fr-mb-2w" : !locked } )}> 
				<p className="fr-badge fr-badge--success">Complété</p>
			</div> 
		)
	}
	return null;
}

// When a question is locked and completed, the button is removed.  
// When a question is not locked, the button is always visible. 
const DisplayButton = (
	{status, locked, onClick, label}: 
	{status: string, locked: boolean, onClick: React.MouseEventHandler<HTMLElement>, label: string}
) => {
	if(((status !== "complete" && locked) || (!locked))) {
		return (
			<Button
				className={classnames('roundabout-it-button')}
				onClick={onClick}
			>
				{label}
			</Button>
		)
	}
	return null; 
}

export function RoundaboutItButton({
	complete,
	partial,
	iteration,
	goToIteration,
	locked,
}:	{	
	complete: boolean,
	partial: boolean,
	iteration: number,
	goToIteration: Function,
	locked: boolean,
}) {
	const status = getStatus(complete, partial);
	const label = getLabel(complete, partial);
	const onClick = useCallback(
		function () {
			goToIteration(iteration);
		},
		[iteration, goToIteration]
	);

	return (
		<div className="fr-col">
			<div className="fr-grid-row">
				<CompleteBadge status={status} locked={locked} /> 
				<div className="fr-col-12">
					<DisplayButton status={status} locked={locked} onClick={onClick} label={label} />
				</div>
			</div>
		</div>
	);
}

RoundaboutItButton.defaultProps = {
	locked: true,
};

