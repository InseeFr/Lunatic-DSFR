import React, { useCallback } from "react";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";
import * as lunatic from "@inseefr/lunatic";
import { BUTTON_PRIORITIES } from "../utils/constants/buttonConstants";

const { PRIMARY, SECONDARY } = BUTTON_PRIORITIES;

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

function isCompleteAndLocked({ status, locked }: { status: string; locked: boolean }) {
    if (status === "complete" && locked) {
        return true;
    }
    return false;
}

//  When a questionnaire has been started, it shows the "complété" badge
const CompleteBadge = ({ status, locked }: { status: string; locked: boolean }) => {
    if (status === "complete" && locked) {
        return (
            <div className={classnames({ "fr-mb-2w": !locked })}>
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
}: {
    status: string;
    locked: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    label: string;
    custom: Record<string, unknown>;
}) => {
    const Button = lunatic.Button;

    if ((status !== "complete" && locked) || !locked) {
        return (
            <Button
                className={classnames("roundabout-it-button")}
                onClick={onClick}
                custom={custom}
                disabled={isCompleteAndLocked({ status, locked })}
                priority={status === "complete" ? SECONDARY : PRIMARY}
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
}: {
    complete: boolean;
    partial: boolean;
    iteration: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    goToIteration: Function;
    locked: boolean;
    custom: Record<string, unknown>;
    unnecessary: string;
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

    if (unnecessary) {
        return null;
    }
    return (
        <div className="fr-col-12 fr-col-md-6">
            <div
                className={css({
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
                />
            </div>
        </div>
    );
}
