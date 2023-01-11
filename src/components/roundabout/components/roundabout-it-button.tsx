import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Button } from "@codegouvfr/react-dsfr/Button"

function getStatus(complete: boolean, partial: boolean) {
	if (complete) {
		return 'complete';
	}
	if (partial) {
		return 'fr-btn--secondary';
	}
	return 'unstarted';
}

function getLabel(complete: boolean, partial: boolean) {
	if (complete) {
		return 'Complété';
	}
	if (partial) {
		return 'Modifier';
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
		if(status !== "unstarted") {
			return <p className="fr-badge fr-badge--success">Complété</p>
		}
	}

	
	return (
        <ul className="fr-btns-group fr-btns-group--lg">
            <li>
				{completeBadge(status)}
				{/* When questionnaire is complete, it no longer displays */}
				{status !== 'complete' && locked &&
					<Button
						className={classnames('roundabout-it-button', status)}
						onClick={onClick}
					>
						{label}
					</Button>
				}
            </li>    
        </ul>
	);
}

RoundaboutItButton.defaultProps = {
	locked: true,
};

