import React from 'react'; 

export function RoundaboutItTitle({label}: {label: string} ) {
	return (
		<div className="fr-col-12">
			<h2 className="roundabout-it-title">
				{label}
			</h2>
		</div>
	);
}