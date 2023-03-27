"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Input_1 = require("@codegouvfr/react-dsfr/Input");
const UnitDisplay = ({ unit }) => {
    if (unit !== "") {
        return (react_1.default.createElement("span", { className: "fr-col-1" }, unit));
    }
    return null;
};
function InputNumber({ id, value, onChange, disabled, readOnly, labelId, label, min, max, step, unit, description }) {
    const handleChange = (0, react_1.useCallback)(function (e) {
        const val = e.target.valueAsNumber;
        onChange(isNaN(val) ? null : val);
    }, [onChange]);
    return (react_1.default.createElement("div", { className: "lunatic-input-number-container fr-grid-row fr-grid-row--middle" },
        react_1.default.createElement(Input_1.Input, { label: label, hintText: description, className: (0, classnames_1.default)('lunatic-dsfr-input-number', {
                disabled,
                readOnly,
                "fr-col-11": unit !== undefined,
                "fr-col-12": unit === undefined
            }), nativeInputProps: {
                inputMode: 'numeric',
                id: id,
                maxLength: 30,
                pattern: '[0-9]*',
                type: 'number',
                onChange: handleChange,
                readOnly: readOnly,
                disabled: disabled,
                min: min,
                max: max,
                step: step,
            } }),
        react_1.default.createElement(UnitDisplay, { unit: unit })));
}
exports.default = InputNumber;
//# sourceMappingURL=input-number.js.map