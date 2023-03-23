"use strict";
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var getErrorStates_1 = require("./utils/errors/getErrorStates");
var Input_1 = require("@codegouvfr/react-dsfr/Input");
function checkValue(value) {
    return value !== null && value !== void 0 ? value : "";
}
function Input(_a) {
    var value = _a.value, onChange = _a.onChange, disabled = _a.disabled, required = _a.required, maxLength = _a.maxLength, label = _a.label, description = _a.description, id = _a.id, errors = _a.errors;
    var handleChange = react_1.useCallback(function (e) {
        var value = e.target.value;
        onChange(value);
    }, [onChange]);
    var state = getErrorStates_1.getState(errors, id);
    var stateRelatedMessage = getErrorStates_1.getStateRelatedMessage(errors, id);
    return (react_1["default"].createElement(Input_1.Input, { label: label, className: classnames_1["default"]("lunatic-dsfr-input", { disabled: disabled }), nativeInputProps: {
            id: id,
            maxLength: maxLength,
            value: checkValue(value),
            required: required,
            onChange: handleChange
        }, hintText: description, state: state, stateRelatedMessage: stateRelatedMessage }));
}
exports.Input = Input;
Input.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER
};
exports["default"] = Input;
