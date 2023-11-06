import { LunaticError } from "../type/type";

type TypeError = Array<LunaticError> | null | undefined;

function getState(errors: TypeError) {
    if (errors && errors[0]) {
        if (errors[0].criticality == "WARN" || errors[0].criticality == "ERROR") {
            return "error";
        } else if (errors[0].criticality == "INFO") {
            return "success";
        }
        return "default";
    }
}

function getStateRelatedMessage(errors: TypeError) {
    if (errors && errors[0]) {
        return errors[0].errorMessage;
    }
}

export { getState, getStateRelatedMessage };
