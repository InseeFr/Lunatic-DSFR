"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const react_1 = __importDefault(require("react"));
function RoundaboutContainer({ children }) {
    return (react_1.default.createElement("div", { className: "lunatic-roundabout fr-container--fluid" },
        react_1.default.createElement("div", { className: "fr-grid-row" }, children)));
}
exports.default = RoundaboutContainer;
=======
exports.RoundaboutContainer = void 0;
const react_1 = __importDefault(require("react"));
function RoundaboutContainer({ children }) {
    return react_1.default.createElement("div", { className: "lunatic-roundabout fr-container--fluid" }, children);
}
exports.RoundaboutContainer = RoundaboutContainer;
>>>>>>> develop
//# sourceMappingURL=roundabout-container.js.map