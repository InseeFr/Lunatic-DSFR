"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import {lunatic} from '@inseefr/lunatic';
const lunatic = require('@inseefr/lunatic');
const Orchestrator = ({ source,
// data
 }) => {
    // console.log(lunatic.useLunatic(source, data, {}))
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "components" },
            "hi hi ",
            source.maxPage)));
};
exports.default = Orchestrator;
//# sourceMappingURL=Orchestrator.js.map