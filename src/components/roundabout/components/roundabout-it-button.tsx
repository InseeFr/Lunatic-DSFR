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
	
	
	// When a questionnaire has been started, it shows the "complété" badge
	const completeBadge = (status: string) => {
		if(status === "complete") {
			let completeBadgeSpacing = "fr-mb-2w"
			if (locked) {
				completeBadgeSpacing = ""
			}
			return (
				<div className={classnames("fr-col-12", completeBadgeSpacing)}> 
					<p className="fr-badge fr-badge--success">Complété</p>
				</div> 
			)
		}
	}
	
	return (
		<div className="fr-col">
			<div className="fr-grid-row">
				{completeBadge(status)}
				<div className="fr-col-12">
					{/* When questionnaire is complete, it no longer displays */}
					{((status !== 'complete' && locked) || (!locked)) &&
						<Button
							className={classnames('roundabout-it-button')}
							onClick={onClick}
						>
							{label}
						</Button>
					}
				</div>
			</div>
		</div>
	);
}

RoundaboutItButton.defaultProps = {
	locked: true,
};

