import React, { useCallback } from "react";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import { Button } from "../Button";

enum BUTTON_PRIORITIES {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    TERTIARY_NO_OUTLINE = "tertiary no outline",
}

const { PRIMARY, SECONDARY } = BUTTON_PRIORITIES;

function getStatus(complete?: boolean, partial?: boolean) {
    if (complete) {
        return "complete";
    }
    if (partial) {
        return "partial";
    }
    return "unstarted";
}

function getLabel(complete?: boolean, partial?: boolean) {
    if (complete) {
        return "Modifier";
    }
    if (partial) {
        return "Reprendre";
    }
    return "Commencer";
}

function isCompleteAndLocked({ status, locked }: { status: string; locked?: boolean }) {
    if (status === "complete" && locked) {
        return true;
    }
    return false;
}

//  When a questionnaire has been started, it shows the "complété" badge
const CompleteBadge = ({ status, locked }: { status: string; locked?: boolean }) => {
    const { cx } = useStyles();
    if (status === "complete" && locked) {
        return (
            <div className={cx({ "fr-mb-2w": !locked })}>
                <p className={fr.cx("fr-badge", "fr-badge--success")}>Complété</p>
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
}: {
    status: string;
    locked?: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    label: string;
}) => {
    const { cx } = useStyles();
    if ((status !== "complete" && locked) || !locked) {
        return (
            <Button
                className={cx("lunatic-dsfr-roundabout-it-button", "roundabout-it-button")}
                onClick={onClick}
                disabled={isCompleteAndLocked({ status, locked })}
                priority={status === "complete" ? SECONDARY : PRIMARY}
            >
                {label}
            </Button>
        );
    }
    return null;
};

type Props = {
    complete?: boolean;
    partial?: boolean;
    iteration: number;
    unnecessary?: string | boolean;
    goToIteration: (n: number) => void;
    locked?: boolean;
};

export function RoundaboutItButton({
    complete,
    partial,
    iteration,
    goToIteration,
    locked,
    unnecessary,
}: Props) {
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
        <div className={fr.cx("fr-col-12", "fr-col-md-6")}>
            <div
                className={css({
                    [fr.breakpoints.up("md")]: {
                        justifyContent: "flex-end",
                        display: "flex",
                    },
                })}
            >
                <CompleteBadge status={status} locked={locked} />
                <DisplayButton status={status} locked={locked} onClick={onClick} label={label} />
            </div>
        </div>
    );
}
