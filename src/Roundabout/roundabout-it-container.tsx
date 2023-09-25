import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import React from "react";

export function RoundaboutItContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={classnames("roundabout-iteration-title", fr.cx("fr-col-12"))}>
            <hr className={fr.cx("fr-pb-2w")} />
            <div className={fr.cx("fr-grid-row", "fr-pb-2w")}>{children}</div>
        </div>
    );
}
