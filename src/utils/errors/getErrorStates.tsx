import { LunaticError } from "../type/type";

type TypeError = Record<string, Array<LunaticError>>;

function getState(errors: TypeError, id: string) {
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

function getStateRelatedMessage(errors: TypeError, id: string) {
    if (errors && errors[id as keyof typeof errors] && errors[id as keyof typeof errors][0]) {
        return errors[id as keyof typeof errors][0].errorMessage;
    }
    return "";
}

export { getState, getStateRelatedMessage };
