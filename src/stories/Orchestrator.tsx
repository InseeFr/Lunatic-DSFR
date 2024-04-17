import React from "react";
import { useState } from "react";
import {
    useLunatic,
    type LunaticError,
    LunaticComponents,
    type LunaticSource,
    type LunaticData,
    type LunaticState,
} from "@inseefr/lunatic";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { slotComponents } from "..";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";

export type OrchestratorProps = {
    /** The survey generated in  Lunatic json format */
    source: LunaticSource;
    /** The initial data */
    data?: LunaticData;
    activeControls?: boolean;
    /** The initial page */
    initialPage?: Parameters<typeof useLunatic>[2]["initialPage"];
    shortcut?: boolean;
    autoSuggesterLoading: boolean;
    filterDescription: boolean;
};

const onLogChange: LunaticState["handleChange"] = (response, value, args) =>
    console.log("onChange", { response, value, args });

export const Orchestrator: (props: OrchestratorProps) => JSX.Element = ({
    source,
    data,
    activeControls = true,
    initialPage = "1",
    shortcut = false,
    autoSuggesterLoading = false,
    filterDescription = true,
}) => {
    const { maxPage } = source;
    const {
        getComponents,
        goPreviousPage,
        goNextPage,
        getData,
        pageTag,
        isFirstPage,
        isLastPage,
        compileControls,
        Provider,
    } = useLunatic(source, data, {
        initialPage,
        shortcut,
        onChange: onLogChange,
        autoSuggesterLoading,
        activeControls,
        getReferentiel,
    });

    const components = getComponents();
    const [errorActive, setErrorActive] = useState<Record<string, LunaticError[]> | undefined>({});

    const handleGoNext = () => {
        const { currentErrors } = compileControls();
        setErrorActive(currentErrors);
        if (!currentErrors) {
            goNextPage();
        }
    };

    return (
        <Provider>
            <div className="container">
                <div className={fr.cx("fr-mb-4v")}>
                    <MuiDsfrThemeProvider>
                        <LunaticComponents
                            components={components}
                            slots={slotComponents}
                            componentProps={() => ({
                                errors: errorActive,
                                filterDescription,
                            })}
                        />
                    </MuiDsfrThemeProvider>
                </div>
                <Pager
                    goPrevious={goPreviousPage}
                    goNext={handleGoNext}
                    logData={() => console.log(getData(true))}
                    isLast={isLastPage}
                    isFirst={isFirstPage}
                    pageTag={pageTag}
                    maxPage={maxPage}
                />
            </div>
        </Provider>
    );
};

function getReferentiel(name: string) {
    return fetch(`./nomenclatures/${name}.json`).then(r => r.json());
}
function Pager({
    goPrevious,
    logData,
    goNext,
    isLast,
    isFirst,
    pageTag,
    maxPage,
}: {
    goPrevious: () => void;
    logData: () => void;
    goNext: () => void;
    isLast: boolean;
    isFirst: boolean;
    pageTag: string;
    maxPage?: string;
}) {
    if (maxPage && parseInt(maxPage) > 1) {
        return (
            <>
                <div className="pagination">
                    <Button onClick={goPrevious} disabled={isFirst}>
                        Previous
                    </Button>
                    <Button onClick={goNext} disabled={isLast}>
                        Next
                    </Button>
                </div>
                <Button onClick={logData} disabled={isLast} priority="tertiary no outline">
                    Get Data
                </Button>
                <div>PAGE: {pageTag}</div>
            </>
        );
    }
    return null;
}
