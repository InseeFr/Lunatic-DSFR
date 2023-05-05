import React from "react";

export function RoundaboutItContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="roundabout-iteration-title fr-col-12">
            <hr className="fr-pb-2w" />
            <div className="fr-grid-row fr-border fr-pb-2w">{children}</div>
        </div>
    );
}
