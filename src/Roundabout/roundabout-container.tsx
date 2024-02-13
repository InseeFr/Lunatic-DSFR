import { fr } from "@codegouvfr/react-dsfr";
import React from "react";
import { useStyles } from "tss-react/dsfr";

export function RoundaboutContainer({ children }: { children: React.ReactNode }) {
    const { cx } = useStyles();
    return (
        <div className={cx("lunatic-roundabout", fr.cx("fr-container--fluid"))}>
            <div className={fr.cx("fr-grid-row")}>{children}</div>
        </div>
    );
}
