import { useState } from "react";
import {
    useLunatic,
    type LunaticError,
    LunaticComponents,
    type LunaticSource,
    type LunaticData,
    type LunaticState,
} from "@inseefr/lunatic";
import Waiting from "./waiting";
import { customComponents } from "index";
import { Button } from "Button";
import MuiDsfrThemeProvider from "@codegouvfr/react-dsfr/mui";

export type OrchestratorProps = {
    source: LunaticSource;
    data: LunaticData;
    activeControls?: boolean;
    initialPage?: string;
    shortcut?: boolean;
    autoSuggesterLoading: boolean;
    filterDescription: boolean;
    getReferentiel?: (name: string) => Promise<Array<unknown>>;
};

async function getReferentiel(name: string) {
    return fetch(`./nomenclatures/${name}.json`).then(r => r.json());
}
function Pager({
    goPrevious,
    goNext,
    isLast,
    isFirst,
    pageTag,
    maxPage,
}: {
    goPrevious: () => void;
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
                <div>PAGE: {pageTag}</div>
            </>
        );
    }
    return null;
}

const onLogChange: LunaticState["handleChange"] = (response, value, args) =>
    console.log("onChange", { response, value, args });

export const Orchestrator: (props: OrchestratorProps) => JSX.Element = ({
    source,
    data,
    activeControls = true,
    initialPage = "1",
    shortcut = false,
    autoSuggesterLoading,
    filterDescription = true,
}) => {
    const { maxPage } = source;
    const {
        getComponents,
        goPreviousPage,
        goNextPage,
        pageTag,
        isFirstPage,
        isLastPage,
        waiting,
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
                <div>
                    <LunaticComponents
                        autoFocusKey={pageTag}
                        components={components}
                        // wrapper to avoid lunatic style
                        wrapper={({ children, id }) => (
                            <div key={`component-${id}`}>
                                <MuiDsfrThemeProvider>{children}</MuiDsfrThemeProvider>
                            </div>
                        )}
                        slots={customComponents}
                        componentProps={() => {
                            return {
                                errors: errorActive,
                                filterDescription: filterDescription,
                            };
                        }}
                    />
                </div>
                <Pager
                    goPrevious={goPreviousPage}
                    goNext={handleGoNext}
                    isLast={isLastPage}
                    isFirst={isFirstPage}
                    pageTag={pageTag}
                    maxPage={maxPage}
                />
                <Waiting status={waiting}>
                    <div className="waiting-orchestrator">
                        Initialisation des données de suggestion...
                    </div>
                </Waiting>
            </div>
        </Provider>
    );
};
