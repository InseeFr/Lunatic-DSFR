import { PropsWithChildren, useContext } from "react";
import { LunaticSource } from "./typeLunatic/type-source";
import { SurveyUnitData } from "./typeStromae/type";
import { loadSourceDataContext } from "./LoadSourceDataContext";

import { CloneElements } from "./CloneElements";
import { OrchestratorProps } from "./Orchestrator";
import { useRemote } from "./useRemote";

type LoadSourceDataProps = {
    onChange?: (args: any) => void;
};

//
export function LoadSourceData({ children, onChange }: PropsWithChildren<LoadSourceDataProps>) {
    const { getSurvey, getSurveyUnitData, getReferentiel } = useContext(loadSourceDataContext);

    const source = useRemote<LunaticSource>(getSurvey);
    const surveyUnitData = useRemote<SurveyUnitData>(getSurveyUnitData);

    if (!source || !surveyUnitData) {
        // TODO skeleton
        return null;
    }

    return (
        <CloneElements<OrchestratorProps>
            source={source}
            surveyUnitData={surveyUnitData}
            getReferentiel={getReferentiel}
            onChange={onChange}
        >
            {children}
        </CloneElements>
    );
}
