import React, { useCallback } from "react";
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
}: {
    status: string;
    locked: boolean;
    unnecessary: boolean;
}) {
    if (unnecessary || (status === "complete" && locked)) {
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
}: {
    status: string;
    locked: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    label: string;
    custom: Record<string, unknown>;
    unnecessary: boolean;
}) => {
    const Button = lunatic.Button;
    if ((status !== "complete" && locked) || !locked) {
        return (
            <Button
                className={classnames("roundabout-it-button")}
                onClick={onClick}
                custom={custom}
                disabled={isDisabled({ status, locked, unnecessary })}
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
}: {
    complete: boolean;
    partial: boolean;
    iteration: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    goToIteration: Function;
    locked: boolean;
    custom: Record<string, unknown>;
    unnecessary: boolean;
}) {
    const status = getStatus(complete, partial);
    const label = getLabel(complete, partial);
    const onClick = useCallback(
        function () {
            goToIteration(iteration);
        },
        [iteration, goToIteration],
    );

    return (
        <div className="fr-col-12 fr-col-md-1">
            <div className="fr-grid-row">
                <CompleteBadge status={status} locked={locked} />
                <DisplayButton
                    status={status}
                    locked={locked}
                    onClick={onClick}
                    custom={custom}
                    label={label}
                    unnecessary={unnecessary}
                />
            </div>
        </div>
    );
}

RoundaboutItButton.defaultProps = {
    locked: true,
};
