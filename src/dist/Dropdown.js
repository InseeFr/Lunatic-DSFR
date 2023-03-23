"use strict";
exports.__esModule = true;
exports.Dropdown = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Select_1 = require("@codegouvfr/react-dsfr/Select");
var errors_1 = require("./utils/errors");
function getOptions(options) {
    if (options) {
        return options.map(function (option) {
            var value = option.value, label = option.label;
            return React.createElement("option", { value: value }, label);
        });
    }
    return [];
}
function Dropdown(_a) {
    var disabled = _a.disabled, options = _a.options, onSelect = _a.onSelect, className = _a.className, label = _a.label, errors = _a.errors;
    var selectId = "select-" + react_1.useId();
    return (React.createElement(Select_1["default"], { className: classnames_1["default"]("dropdown-lunatic-dsfr", className, { disabled: disabled }), 
        // hintText is not currently operational in react-dsfr
        // hintText={description}
        nativeSelectProps: { onSelect: onSelect() }, disabled: disabled, 
        // onSelect={onSelect}
        label: label },
        getOptions(options),
        React.createElement(errors_1["default"], { errors: errors, activeId: selectId })));
}
exports.Dropdown = Dropdown;
exports["default"] = Dropdown;
