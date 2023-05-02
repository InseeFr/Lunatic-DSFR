import React from "react";

export function RoundaboutItContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="roundabout-iteration-title fr-col-12">
            <div
                className="fr-grid-row fr-border fr-py-2w"
                style={{ borderBottom: "solid #DDDDDD 1px" }}
            >
                {children}
            </div>
        </div>
    );
}
