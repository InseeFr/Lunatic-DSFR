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
        return "Compléter";
    }
    if (partial) {
        return "Continuer";
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
    if (status === "complete") {
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
    unnecessary,
    custom,
}: {
    complete: boolean;
    partial: boolean;
    iteration: number;
    goToIteration: (iteration: number) => void;
    locked: boolean;
    unnecessary: boolean;
    custom: Record<string, unknown>;
}) {
    console.log(goToIteration);
    const status = getStatus(complete, partial);
    const label = getLabel(complete, partial);
    const onClick = useCallback(
        function () {
            goToIteration(iteration);
        },
        [iteration, goToIteration],
    );

    return (
        <div className="fr-col">
            <div className="fr-grid-row">
                <CompleteBadge status={status} locked={locked} />
                <div className="fr-col-12">
                    <DisplayButton
                        status={status}
                        locked={locked}
                        onClick={onClick}
                        label={label}
                        unnecessary={unnecessary}
                        custom={custom}
                    />
                </div>
            </div>
        </div>
    );
}

RoundaboutItButton.defaultProps = {
    locked: true,
};
