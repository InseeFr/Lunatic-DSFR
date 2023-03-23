"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function RoundaboutItContainer({ children }) {
    return (react_1.default.createElement("div", { className: "roundabout-iteration-title fr-col-12 fr-mb-3w" },
        react_1.default.createElement("div", { className: "fr-grid-row" }, children)));
}
exports.default = RoundaboutItContainer;
//# sourceMappingURL=roundabout-it-container.js.map