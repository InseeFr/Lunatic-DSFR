"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./waiting.scss");
// import preloader from './preloader.svg';
function Waiting({ status, children }) {
    if (status) {
        return (react_1.default.createElement("div", { className: "waiting" },
            react_1.default.createElement("div", { className: "content" }, children)));
    }
    return null;
}
Waiting.defaultProps = {
    status: false,
};
exports.default = react_1.default.memo(Waiting);
//# sourceMappingURL=waiting.js.map