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
import { tss } from "tss-react/dsfr";
import { customComponents } from "index";
import { Button } from "Button";

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

const Orchestrator: (props: OrchestratorProps) => JSX.Element = ({
    source,
    data,
    activeControls = true,
    initialPage = "1",
    shortcut = false,
    autoSuggesterLoading,
    filterDescription = true,
    getReferentiel,
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
        custom: customComponents,
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

    const { classes, cx } = useStyles();

    return (
        <Provider>
            <div className="container">
                <div className={cx("components", classes.componentsDsfr)}>
                    <LunaticComponents
                        autoFocusKey={pageTag}
                        components={components}
                        wrapper={({ children, id }) => (
                            <div
                                className={cx("lunatic-component-dsfr", classes.root)}
                                key={`component-${id}`}
                            >
                                {children}
                            </div>
                        )}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
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

export default Orchestrator;

const useStyles = tss.create({
    componentsDsfr: {
        ".fr-callout": {
            width: "100%",
        },
        ".lunatic-component-with-dsfr": {
            marginBottom: "1rem",
            ".fr-fieldset, .fr-fieldset__element": {
                marginBottom: 0,
            },
            ".pairwise-link": {
                marginBottom: "1rem",
            },
            "input[aria-describedby^='autre-link']": {
                marginBottom: "1rem",
            },
            legend: {
                fontSize: "1.75rem",
                lineHeight: "2.25rem",
                paddingBottom: "1rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                marginLeft: "-0.25rem",
                marginRight: "-0.25rem",
                fontWeight: "700 !important",
                color: "var(--text-label-grey)",
                fontFamily: "Marianne",
            },
            ".fr-label": {
                fontFamily: "Marianne",
                display: "block",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                color: "var(--text-label-grey)",
                fontWeight: "400",
            },
            ".lunatic-dsfr-component-set .lunatic-dsfr-radio legend, .lunatic-dsfr-component-set .checkbox-lunatic-dsfr legend, .datepicker-lunatic-dsfr legend":
                {
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "1rem",
                    lineHeight: "2.25rem",
                    paddingBottom: "1rem",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    marginLeft: "-0.25rem",
                    marginRight: "-0.25rem",
                    fontWeight: "400",
                },
            ".datepicker-lunatic-dsfr legend": {
                fontWeight: "700",
            },
        },
    },
    root: {
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
        ".fr-callout": {
            marginBottom: "0",
        },
        ".lunatic-dsfr-component-set-component": {
            width: "100%",
        },
        ".lunatic-dsfr-component-set": {
            display: "flex",
            flexDirection: "column",
        },
    },
});
