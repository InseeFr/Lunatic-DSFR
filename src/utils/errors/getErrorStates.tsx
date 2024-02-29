import type { LunaticError } from "@inseefr/lunatic";
import type { ReactNode } from "react";

function getComponentErrors(
    errors?: Record<string, LunaticError[]>,
    componentId?: string,
): LunaticError[] | undefined {
    if (!componentId || !errors) {
        return undefined;
    }
    const activeErrors = Object.entries(errors).find(([k]) => componentId?.trim().endsWith(k));
    if (Array.isArray(activeErrors) && Array.isArray(activeErrors[1])) {
        return activeErrors[1];
    }
    return undefined;
}

/**
 * Determines the state of errors for a given component.
 * @param errors - Optional. An object containing errors keyed by component ID.
 * @param componentId - Optional. The ID of the component to retrieve errors for.
 * @returns An object representing the state of errors and an optional message related to the state.
 * @remarks
 * This function analyzes the provided errors to determine the state of errors for a specific component.
 * It categorizes errors into three states: "default", "error", and "success".
 * - "default": No errors found for the component.
 * - "error": Critical errors or warnings found for the component.
 * - "success": Non-critical informational errors found for the component.
 * If the provided errors are undefined or the component ID is not found in the errors object,
 * the function returns the default state.
 * Only the first error for the specified component is considered.
 * @throws {Error} Throws an error if the criticality of the first error is not recognized.
 */
export function getErrorStates(
    errors?: Record<string, LunaticError[]>,
    componentId?: string,
): { state: "default" | "error" | "success"; stateRelatedMessage: ReactNode | undefined } {
    const componentErrors = getComponentErrors(errors, componentId);
    if (!componentErrors) {
        return { state: "default", stateRelatedMessage: undefined };
    }
    switch (componentErrors[0].criticality) {
        case "ERROR":
        case "WARN":
            return { state: "error", stateRelatedMessage: componentErrors[0].errorMessage };
        case "INFO":
            return { state: "success", stateRelatedMessage: componentErrors[0].errorMessage };
        default:
            throw new Error("We do not know this type of criticality");
    }
}

const getState = () => {};
const getStateRelatedMessage = () => {};

export { getState, getStateRelatedMessage };
