import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import React from "react";

export function RoundaboutItContainer({
    children,
    iterations,
    index,
}: {
    children: React.ReactNode;
    iterations: number;
    index: number;
}) {
    const isLastChild = index === iterations - 1;
    return (
        <div className={classnames("roundabout-iteration-title", fr.cx("fr-col-12"))}>
            <hr className={fr.cx("fr-pb-2w")} />
            <div className={fr.cx("fr-grid-row", "fr-pb-2w")}>{children}</div>
            {isLastChild && <hr className={fr.cx("fr-pb-2w")} />}
        </div>
    );
}
