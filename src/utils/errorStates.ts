import type { LunaticError } from "@inseefr/lunatic";
import type { ReactNode } from "react";

/**
 * Determines the state of errors for a given component.
 * @param errors - Optional. An object containing errors keyed by component ID.
 * @returns An object representing the state of errors and an optional message related to the state.
 * @remarks
 * This function analyzes the provided errors to determine the state of errors
 * It categorizes errors into three states: "default", "error", and "success".
 * - "default": No errors found for the component.
 * - "error": Critical errors or warnings found for the component.
 * - "success": Non-critical informational errors found for the component.
 * If the provided errors are undefined the function returns the default state.
 * Only the first error for the specified component is considered.
 * @throws {Error} Throws an error if the criticality of the first error is not recognized.
 */
export function getErrorStates(errors?: LunaticError[]): {
    state: "default" | "error" | "success";
    stateRelatedMessage: ReactNode | undefined;
} {
    if (!errors || errors.length === 0) {
        return { state: "default", stateRelatedMessage: undefined };
    }
    switch (errors[0].criticality) {
        case "ERROR":
        case "WARN":
            return { state: "error", stateRelatedMessage: errors[0].errorMessage };
        case "INFO":
            return { state: "success", stateRelatedMessage: errors[0].errorMessage };
        default:
            throw new Error("We do not know this type of criticality");
    }
}
