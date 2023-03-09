import { ReactNode } from "react";

function getState(
    errors: {
        id: [
            Pick<
                {
                    id: string;
                    criticality: "INFO" | "WARN" | "ERROR";
                    typeOfControl: "FORMAT" | "CONSISTENCY";
                    control: { value: string; type: "VTL" | "VTL|MD" };
                    errorMessage: { value: string; type: "VTL" | "VTL|MD" };
                    bindingDependencies: string[];
                },
                "id" | "criticality" | "typeOfControl"
            > & {
                id: string;
                criticality: "INFO" | "WARN" | "ERROR";
                formula: string;
                labelFormula: string;
                errorMessage: ReactNode;
            },
        ];
    },
    id: string,
) {
    if (errors && errors[id as keyof typeof errors] && errors[id as keyof typeof errors][0]) {
        if (
            errors[id as keyof typeof errors][0].criticality == "WARN" ||
            errors[id as keyof typeof errors][0].criticality == "ERROR"
        ) {
            return "error";
        } else if (errors[id as keyof typeof errors][0].criticality == "INFO") {
            return "success";
        }
        return "default";
    }
}

function getStateRelatedMessage(
    errors: {
        id: [
            Pick<
                {
                    id: string;
                    criticality: "INFO" | "WARN" | "ERROR";
                    typeOfControl: "FORMAT" | "CONSISTENCY";
                    control: { value: string; type: "VTL" | "VTL|MD" };
                    errorMessage: { value: string; type: "VTL" | "VTL|MD" };
                    bindingDependencies: string[];
                },
                "id" | "criticality" | "typeOfControl"
            > & {
                id: string;
                criticality: "INFO" | "WARN" | "ERROR";
                formula: string;
                labelFormula: string;
                errorMessage: ReactNode;
            },
        ];
    },
    id: string,
) {
    if (errors && errors[id as keyof typeof errors] && errors[id as keyof typeof errors][0]) {
        return errors[id as keyof typeof errors][0].errorMessage;
    }
    return "";
}

export { getState, getStateRelatedMessage };
