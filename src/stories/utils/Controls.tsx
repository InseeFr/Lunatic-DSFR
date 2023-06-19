import { PropsWithChildren, useCallback, useState } from "react";
import { LunaticError } from "./typeLunatic/type";
import { OrchestratedElement } from "./typeStromae/type";
import { CloneElements } from "./CloneElements";

export function Controls(props: PropsWithChildren<OrchestratedElement>) {
    const [currentErrors, setCurrentErrors] = useState<Record<string, Array<LunaticError>>>();
    const [warning, setWarning] = useState<boolean>(false);
    const [criticality, setCriticality] = useState<boolean>();
    const {
        children = [],
        getErrors,
        goNextPage = () => null,
        goPreviousPage = () => null,
        compileControls,
        ...rest
    } = props;

    const handleGoNext = useCallback(() => {
        if (warning) {
            setWarning(false);
            setCurrentErrors(undefined);
            setCriticality(false);
            goNextPage();
        } else if (compileControls) {
            const errors = compileControls();
            setCriticality(errors.isCritical);
            setCurrentErrors(errors.currentErrors);
            if (errors.currentErrors && !errors.isCritical) {
                setWarning(true);
            } else if (!errors.currentErrors) {
                goNextPage();
            }
        } else {
            goNextPage();
        }
    }, [compileControls, goNextPage, warning]);

    const handleGoPrevious: () => void = useCallback(() => {
        setCriticality(undefined);
        setCurrentErrors(undefined);
        goPreviousPage();
    }, [goPreviousPage]);

    return (
        <CloneElements<OrchestratedElement>
            {...rest}
            goNextPage={handleGoNext}
            goPreviousPage={handleGoPrevious}
            criticality={criticality}
            currentErrors={currentErrors}
        >
            {children}
        </CloneElements>
    );
}
