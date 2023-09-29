import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import React from "react";

export function RoundaboutContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={classnames("lunatic-roundabout", fr.cx("fr-container--fluid"))}>
            <div className={fr.cx("fr-grid-row")}>{children}</div>
        </div>
    );
}
