"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const react_1 = __importDefault(require("react"));
const Orchestrator_1 = __importDefault(require("../utils/Orchestrator"));
const source_json_1 = __importDefault(require("./source.json"));
const stories = {
    title: 'Components/Roundabout',
    component: Orchestrator_1.default,
    // argTypes: defaultArgTypes,
};
exports.default = stories;
const Template = () => react_1.default.createElement(Orchestrator_1.default, { source: source_json_1.default });
exports.Template = Template;
//# sourceMappingURL=Roundabout.stories.js.map