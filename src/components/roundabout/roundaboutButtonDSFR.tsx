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
		return 'Complété';
	}
	if (partial) {
		return 'Modifier';
	}
	return 'Commencer';
}

export function RoundaboutItButtonDSFR({
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
        <ul className="fr-btns-group fr-btns-group--lg">
            <li>
                <Button
                    className={classnames('roundabout-it-button', status)}
                    disabled={status === 'complete' && locked}
                    onClick={onClick}
                >
                    {label}
                </Button>
            </li>    
        </ul>
	);
}

RoundaboutItButtonDSFR.defaultProps = {
	locked: true,
};

