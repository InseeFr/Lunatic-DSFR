import { FC, useState, useCallback } from "react";
import * as lunatic from "@inseefr/lunatic";
import { LunaticError } from "../../utils/type/type";
import Waiting from "./waiting";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
startReactDsfr({ defaultColorScheme: "system" });

export interface OrchestratorProps {
    id: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    source: { maxPage?: string; components?: {}; variables?: {} };
    // eslint-disable-next-line @typescript-eslint/ban-types
    data: object;
    management?: boolean;
    activeControls?: boolean;
    features?: [];
    initialPage?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    getStoreInfo?: Function;
    missing?: boolean;
    shortcut?: boolean;
    activeGoNextForMissing?: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    suggesterFetcher: Function;
    autoSuggesterLoading: boolean;
    suggesters: [];
    preferences: [];
    // eslint-disable-next-line @typescript-eslint/ban-types
    custom?: object;
    filterDescription: boolean;
    getReferentiel?: (name: string) => Promise<Record<string, unknown>>;
}

function getStoreInfoRequired() {
    return {};
}

function Pager({
    goPrevious,
    goNext,
    isLast,
    isFirst,
    pageTag,
    maxPage,
    custom,
}: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    goPrevious: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    goNext: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    goToPage: Function;
    isLast: boolean;
    isFirst: boolean;
    pageTag: number;
    maxPage?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    getData: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    custom?: Object;
}) {
    if (maxPage && parseInt(maxPage) > 1) {
        const Button = lunatic.Button;
        return (
            <>
                <div className="pagination">
                    <Button custom={custom} onClick={goPrevious} disabled={isFirst}>
                        Previous
                    </Button>
                    <Button custom={custom} onClick={goNext} disabled={isLast}>
                        Next
                    </Button>
                </div>
                <div>PAGE: {pageTag}</div>
            </>
        );
    }
    return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onLogChange(res: any, value: any, args: any) {
    console.log("onChange", { res, value, args });
}

const Orchestrator: FC<OrchestratorProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    source,
    data,
    management = false,
    activeControls = true,
    features,
    initialPage = "1",
    getStoreInfo = getStoreInfoRequired,
    missing = false,
    shortcut = false,
    activeGoNextForMissing = false,
    suggesterFetcher,
    autoSuggesterLoading,
    suggesters,
    preferences,
    custom,
    filterDescription = true,
    getReferentiel,
    ...rest
}) => {
    const { maxPage } = source;
    const {
        getComponents,
        goPreviousPage,
        goNextPage,
        goToPage,
        pageTag,
        isFirstPage,
        isLastPage,
        waiting,
        compileControls,
        getData,
        Provider,
    } = lunatic.useLunatic(source, data, {
        initialPage,
        features,
        preferences,
        onChange: onLogChange,
        activeGoNextForMissing,
        autoSuggesterLoading,
        suggesters,
        suggesterFetcher,
        management,
        activeControls,
        getReferentiel,
        custom,
    });

    const components = getComponents();
    const [currentErrors, setCurrentErrors] = useState<Record<string, Array<LunaticError>>>();

    const handleGoNextPage = useCallback(
        function () {
            const errors = compileControls();
            setCurrentErrors(errors.currentErrors);

            if (!errors.currentErrors) {
                goNextPage();
            } else {
                console.warn(errors.currentErrors);
            }
        },
        [goNextPage, compileControls],
    );

    return (
        <Provider>
            <div className="container">
                <div className="components">
                    {components.map(function (component: {
                        id?: string;
                        componentType: string;
                        response?: string;
                        storeName?: string;
                    }) {
                        const { id, componentType, storeName, response, ...other } = component;
                        const Component = lunatic[componentType];
                        const storeInfo = storeName ? getStoreInfo(storeName) : {};
                        if (Component) {
                            return (
                                <div className="lunatic-component-dsfr fr-mb-2w" key={`component-${id}`}>
                                    <Component
                                        id={id}
                                        response={response}
                                        {...other}
                                        {...rest}
                                        {...component}
                                        {...storeInfo}
                                        missing={missing}
                                        missingStrategy={goNextPage}
                                        shortcut={shortcut}
                                        filterDescription={filterDescription}
                                        errors={currentErrors}
                                        // custom={custom}
                                    />
                                </div>
                            );
                        }
                        return (
                            <div>{`Le composant ${componentType} n'existe pas dans cette version de Lunatic.`}</div>
                        );
                    })}
                </div>
                <Pager
                    goPrevious={goPreviousPage}
                    goNext={handleGoNextPage}
                    goToPage={goToPage}
                    isLast={isLastPage}
                    isFirst={isFirstPage}
                    pageTag={pageTag}
                    maxPage={maxPage}
                    getData={getData}
                    custom={custom}
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

export default Orchestrator;
