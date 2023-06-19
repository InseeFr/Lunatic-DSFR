import { useEffect, useState, PropsWithChildren, useCallback } from "react";
import { useLunatic } from "@inseefr/lunatic";
import * as custom from "../..";
import { OrchestratedElement } from "./typeStromae/type";
import { OrchestratorProps } from "./Orchestrator";
import { CloneElements } from "./CloneElements";

export function UseLunatic(props: PropsWithChildren<OrchestratorProps>) {
    const {
        source,
        surveyUnitData,
        children,
        getReferentiel,
        preferences,
        features,
        savingType,
        autoSuggesterLoading,
        paginated,
        disabled,
    } = props;
    const [args, setArgs] = useState<Record<string, unknown>>({});
    const { data, stateData = { currentPage: "1" } } = surveyUnitData ?? {};
    const { currentPage } = stateData;
    const [currentChange, setCurrentChange] = useState<{ name: string }>();

    const onChange = useCallback(({ name }: { name: string }, value: unknown) => {
        setCurrentChange({ name });
    }, []);

    useEffect(() => {
        setArgs({
            getReferentiel,
            custom,
            preferences,
            features,
            savingType,
            autoSuggesterLoading,
            onChange,
        });
    }, [getReferentiel, preferences, features, savingType, autoSuggesterLoading, onChange, paginated]);

    const {
        getComponents,
        goPreviousPage,
        goNextPage,
        isFirstPage,
        isLastPage,
        goToPage,
        getData,
        Provider,
        compileControls,
        pageTag,
    } = useLunatic(source, data, args);

    return (
        <Provider>
            <CloneElements<OrchestratedElement>
                compileControls={compileControls}
                getComponents={getComponents}
                goPreviousPage={goPreviousPage}
                goNextPage={goNextPage}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
                goToPage={goToPage}
                getData={getData}
                currentChange={currentChange}
                pageTag={pageTag}
                disabled={disabled}
                currentPage={currentPage}
            >
                {children}
            </CloneElements>
        </Provider>
    );
}
