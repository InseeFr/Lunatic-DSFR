import { RoundaboutLabel } from "./roundabout-label";
import { RoundaboutContainer } from "./roundabout-container";
import { RoundaboutItContainer } from "./roundabout-it-container";
import { RoundaboutItButton } from "./roundabout-it-button";
import { RoundaboutItTitle } from "./roundabout-it-title";

type RoundaboutType = {
    iterations: number;
    expressions: Record<string, Array<boolean | string>>;
    goToIteration: (iteration: number) => void;
    label: string;
    locked?: boolean;
    index: number;
    complete?: boolean;
    partial?: boolean;
    unnecessary?: string | boolean;
};

export function RoundaboutIteration({
    label,
    index,
    complete,
    partial,
    iterations,
    unnecessary,
    goToIteration,
    locked,
}: RoundaboutType) {
    return (
        <RoundaboutItContainer index={index} iterations={iterations}>
            <RoundaboutItTitle label={label} unnecessary={unnecessary} />
            <RoundaboutItButton
                partial={partial}
                complete={complete}
                unnecessary={unnecessary}
                goToIteration={goToIteration}
                iteration={index}
                locked={locked}
            />
        </RoundaboutItContainer>
    );
}

export function Roundabout({ iterations, expressions, goToIteration, label, locked }: RoundaboutType) {
    const {
        complete = new Array(iterations),
        partial = new Array(iterations),
        label: iterationLabels = new Array(iterations),
        unnecessary = new Array(iterations),
    } = expressions;

    if (iterationLabels !== undefined && partial !== undefined) {
        const subElements = new Array(iterations).fill(null).map(function (_, i) {
            return (
                <RoundaboutIteration
                    key={i}
                    index={i}
                    label={iterationLabels[i]}
                    complete={complete[i]}
                    partial={partial[i]}
                    unnecessary={unnecessary[i]}
                    goToIteration={goToIteration}
                    locked={locked}
                    iterations={iterations}
                    expressions={expressions}
                />
            );
        });
        return (
            <RoundaboutContainer>
                <RoundaboutLabel value={label} />
                {subElements}
            </RoundaboutContainer>
        );
    }
    return null;
}
