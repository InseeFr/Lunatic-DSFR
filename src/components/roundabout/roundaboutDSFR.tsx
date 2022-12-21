import { RoundaboutItButtonDSFR } from './roundaboutButtonDSFR'
import React, { ReactNode } from "react";

export function RoundaboutLabelDSFR({value}: {value: string}) {
	return <h1 className="roundabout-label">{value}</h1>;
}

export function RoundaboutItTitleDSFR({label}: {label: string} ) {
	return (
		<h2 className="roundabout-it-title">{label}</h2>
	);
}

export function RoundaboutContainerDSFR({children}: {children: React.ReactNode}) {
	return <div className="lunatic-roundabout fr-container--fluid">{children}</div>;
}

export function RoundaboutItContainerDSFR({children}: {children: React.ReactNode}) {
	return <div className="roundabout-iteration-title fr-col fr-mb-3w">{children}</div>;
}

export const customRoundaboutDSFR = {
	RoundaboutItTitle: RoundaboutItTitleDSFR,
	RoundaboutLabel: RoundaboutLabelDSFR,
	RoundaboutContainer: RoundaboutContainerDSFR, 
	RoundaboutItContainer: RoundaboutItContainerDSFR,
	RoundaboutItButton: RoundaboutItButtonDSFR,
};