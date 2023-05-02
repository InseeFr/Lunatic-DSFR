// import React from 'react';

export function RoundaboutLabel({ value }: { value: string }) {
    return (
        <div className="fr-col-12" style={{ borderBottom: "solid #DDDDDD 1px" }}>
            <h1 className="roundabout-label fr-h3">{value}</h1>
        </div>
    );
}
