import React from 'react'; 

export default function RoundaboutItContainer({children}: {children: React.ReactNode}) {
	return (
		<div className="roundabout-iteration-title fr-col-12 fr-mb-3w">
			<div className="fr-grid-row">
				{children}
			</div>	
		</div>
	);
}