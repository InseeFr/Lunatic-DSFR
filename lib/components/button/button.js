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
const is_element_1 = require("../../utils/is-element");
const Button_1 = require("@codegouvfr/react-dsfr/Button");
function Button({ children, onClick, disabled, label, className, priority }) {
    const handleClick = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        e.preventDefault();
        onClick(e);
    }, [onClick]);
    if ((0, is_element_1.isElement)(children))
        return (react_1.default.createElement(Button_1.Button, { disabled: disabled, className: (0, classnames_1.default)('button-lunatic-dsfr', className, { disabled }), onClick: handleClick, priority: priority }, children));
    return (react_1.default.createElement(Button_1.Button, { disabled: disabled, className: (0, classnames_1.default)('button-lunatic-dsfr', className, { disabled }), 
        // @ts-ignore
        value: label || children, onClick: handleClick, priority: priority }, children));
}
exports.default = Button;
//# sourceMappingURL=button.js.map