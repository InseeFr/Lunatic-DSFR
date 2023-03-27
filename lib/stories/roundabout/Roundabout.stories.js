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
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Orchestrator_1 = __importDefault(require("../utils/Orchestrator"));
const source_json_1 = __importDefault(require("./source.json"));
const data_json_1 = __importDefault(require("./data.json"));
const default_arg_types_1 = __importDefault(require("../utils/default-arg-types"));
require("../../../public/dsfr/dsfr.min.css");
const custom = __importStar(require("../../components"));
const stories = {
    title: 'Components/Roundabout',
    component: Orchestrator_1.default,
    argTypes: default_arg_types_1.default,
};
exports.default = stories;
const Template = (args) => react_1.default.createElement(Orchestrator_1.default, Object.assign({}, args, { custom: custom }));
exports.Default = Template.bind({});
exports.Default.args = { source: source_json_1.default, data: data_json_1.default };
=======
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
>>>>>>> develop
//# sourceMappingURL=Roundabout.stories.js.map