"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
function checkValue(value) {
    return value !== null && value !== void 0 ? value : '';
}
function Input({ value, onChange, disabled, required, maxLength, id, labelledBy, }) {
    const handleChange = 
    // useCallback(
    function (e) {
        const value = e.target.value;
        onChange(value);
    };
    // ,
    // [onChange]
    // );
    return (react_1.default.createElement("input", { id: id, 
        // labelledbby={labelledBy}
        autoComplete: "off", type: "text", disabled: disabled, className: (0, classnames_1.default)('lunatic-input', "fr-input"), value: checkValue(value), onChange: handleChange, "aria-required": required, required: required, maxLength: maxLength }));
}
exports.default = Input;
Input.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER,
};
//# sourceMappingURL=input.js.map