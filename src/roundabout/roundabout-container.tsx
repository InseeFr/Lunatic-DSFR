import React from "react";

export default function RoundaboutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="lunatic-roundabout fr-container--fluid">
            <div className="fr-grid-row">{children}</div>
        </div>
    );
}
