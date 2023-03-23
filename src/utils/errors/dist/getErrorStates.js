"use strict";
exports.__esModule = true;
exports.getStateRelatedMessage = exports.getState = void 0;
function getState(errors, id) {
    if (errors && errors[id] && errors[id][0]) {
        if (errors[id][0].criticality == "WARN" ||
            errors[id][0].criticality == "ERROR") {
            return "error";
        }
        else if (errors[id][0].criticality == "INFO") {
            return "success";
        }
        return "default";
    }
}
exports.getState = getState;
function getStateRelatedMessage(errors, id) {
    if (errors && errors[id] && errors[id][0]) {
        return errors[id][0].errorMessage;
    }
    return "";
}
exports.getStateRelatedMessage = getStateRelatedMessage;
