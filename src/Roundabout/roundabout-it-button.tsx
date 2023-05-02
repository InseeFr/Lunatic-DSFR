import React, { useCallback } from "react";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import * as lunatic from "@inseefr/lunatic";

function getStatus(complete: boolean, partial: boolean) {
    if (complete) {
        return "complete";
    }
    if (partial) {
        return "partial";
    }
    return "unstarted";
}

function getLabel(complete: boolean, partial: boolean) {
    if (complete) {
        return "Modifier";
    }
    if (partial) {
        return "Reprendre";
    }
    return "Commencer";
}

function isDisabled({
    status,
    locked,
    unnecessary,
    resident,
    underage,
}: {
    status: string;
    locked: boolean;
    unnecessary: boolean;
    resident: boolean;
    underage: boolean;
}) {
    if (unnecessary || resident || underage || (status === "complete" && locked)) {
        return true;
    }

    return false;
}

//  When a questionnaire has been started, it shows the "complété" badge

const CompleteBadge = ({ status, locked }: { status: string; locked: boolean }) => {
    if (status === "complete" && locked) {
        return (
            <div className={classnames("fr-col-12", { "fr-mb-2w": !locked })}>
                <p className="fr-badge fr-badge--success">Complété</p>
            </div>
        );
    }
    return null;
};

// When a question is locked and completed, the button is removed.
// When a question is not locked, the button is always visible.
const DisplayButton = ({
    status,
    locked,
    onClick,
    label,
    custom,
    unnecessary,
    resident,
    underage,
}: {
    status: string;
    locked: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    label: string;
    custom: Record<string, unknown>;
    unnecessary: boolean;
    resident: boolean;
    underage: boolean;
}) => {
    const Button = lunatic.Button;
    if (unnecessary || resident || underage) {
        return null;
    }
    if ((status !== "complete" && locked) || !locked) {
        return (
            <Button
                className={classnames("roundabout-it-button")}
                onClick={onClick}
                custom={custom}
                disabled={isDisabled({ status, locked, unnecessary, resident, underage })}
                priority={status === "complete" ? "secondary" : ""}
            >
                {label}
            </Button>
        );
    }
    return null;
};

export function RoundaboutItButton({
    complete,
    partial,
    iteration,
    goToIteration,
    locked,
    custom,
    unnecessary,
    resident,
    underage,
}: {
    complete: boolean;
    partial: boolean;
    iteration: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    goToIteration: Function;
    locked: boolean;
    custom: Record<string, unknown>;
    unnecessary: boolean;
    resident: boolean;
    underage: boolean;
}) {
    const status = getStatus(complete, partial);
    const label = getLabel(complete, partial);
    const onClick = useCallback(
        function () {
            goToIteration(iteration);
        },
        [iteration, goToIteration],
    );
    const { css } = useStyles();

    if (resident || underage) {
        return null;
    }
    return (
        <div className="fr-col-12 fr-col-md-6">
            <div
                className={css({
                    // border: "solid black 1px",
                    [fr.breakpoints.up("md")]: {
                        justifyContent: "flex-end",
                        display: "flex",
                    },
                })}
            >
                <CompleteBadge status={status} locked={locked} />
                <DisplayButton
                    status={status}
                    locked={locked}
                    onClick={onClick}
                    custom={custom}
                    label={label}
                    unnecessary={unnecessary}
                    resident={resident}
                    underage={underage}
                />
            </div>
        </div>
    );
}
