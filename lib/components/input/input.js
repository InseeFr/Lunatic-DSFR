"use strict";
<<<<<<< HEAD
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
=======
>>>>>>> develop
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Input_1 = require("@codegouvfr/react-dsfr/Input");
function checkValue(value) {
    return value !== null && value !== void 0 ? value : '';
}
function Input({ value, onChange, disabled, required, maxLength, label, description, id, }) {
    const handleChange = (0, react_1.useCallback)(function (e) {
        const value = e.target.value;
        onChange(value);
    }, [onChange]);
    return (react_1.default.createElement(Input_1.Input, { label: label, hintText: description, className: (0, classnames_1.default)('lunatic-dsfr-input', { disabled }), nativeInputProps: {
            id: id,
            maxLength: maxLength,
            value: checkValue(value),
            required: required,
            onChange: handleChange
        } }));
=======
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
>>>>>>> develop
}
exports.default = Input;
Input.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER,
};
//# sourceMappingURL=input.js.map