import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";
import { createContext, useContext, useId, useMemo } from "react";

const QuestionParentContext = createContext<
    { questionId: string; hasMultipleComponents: boolean } | undefined
>(undefined);

/**
 * Custom hook to determine if a question has multiple components.
 *
 * @returns {boolean} - Returns true if the question has multiple components, otherwise false.
 * If this hook is used outside of a QuestionParentContext provider, it will return false.
 */
export const useQuestionHasMultipleComponents = () => {
    const questionContext = useContext(QuestionParentContext);
    return questionContext?.hasMultipleComponents ?? false;
};

/**
 * Custom hook to get the question ID from the QuestionParentContext.
 *
 * @returns {string | undefined} - Returns the question ID if available, otherwise undefined.
 * If this hook is used outside of a QuestionParentContext provider, it will return undefined.
 */
export const useQuestionId = (): string | undefined => {
    const questionContext = useContext(QuestionParentContext);

    if (questionContext === undefined) {
        return undefined;
    }
    return questionContext.questionId;
};

export const Question: LunaticSlotComponents["Question"] = props => {
    const { description, declarations, label, children, components } = props;

    const id = useId();

    const hasMultipleComponents = components.length > 1;

    const contextValue = useMemo(
        () => ({ questionId: id, hasMultipleComponents }),
        [id, hasMultipleComponents],
    );
    return (
        <QuestionParentContext.Provider value={contextValue}>
            {hasMultipleComponents ? (
                <fieldset className={fr.cx("fr-fieldset")}>
                    <legend
                        id={id}
                        className={fr.cx("fr-fieldset__legend", "fr-fieldset__legend--regular")}
                    >
                        <h4 className={fr.cx("fr-mb-0")}>{label}</h4>
                        {description && <p className={fr.cx("fr-hint-text")}>{description}</p>}
                        <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
                    </legend>
                    <div className={fr.cx("fr-fieldset__content")}>{children}</div>
                </fieldset>
            ) : (
                <div>
                    <div className={fr.cx("fr-pb-2w")}>
                        <div id={id}>
                            <h4 className={fr.cx("fr-mb-2v")}>{label}</h4>
                            {description && <p className={fr.cx("fr-hint-text")}>{description}</p>}
                        </div>
                        <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
                    </div>
                    {children}
                </div>
            )}
        </QuestionParentContext.Provider>
    );
};
