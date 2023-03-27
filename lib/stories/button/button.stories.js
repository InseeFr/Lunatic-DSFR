"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../../components/button"));
const default_arg_types_1 = __importDefault(require("../utils/default-arg-types"));
// test
const stories = {
    title: 'Components/Button',
    component: button_1.default,
    argTypes: default_arg_types_1.default,
};
exports.default = stories;
const Template = (args) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(button_1.default, Object.assign({}, args, { priority: "primary" }), "Primary Button"),
    react_1.default.createElement(button_1.default, Object.assign({}, args, { priority: "secondary" }), "Secondary Button"),
    react_1.default.createElement(button_1.default, Object.assign({}, args, { priority: "tertiary", label: "hello" }), "Tertiary Button"),
    react_1.default.createElement(button_1.default, Object.assign({}, args, { priority: "tertiary no outline" }), "Tertiary Button without outline"));
exports.Default = Template.bind({});
exports.Default.args = {};
//# sourceMappingURL=button.stories.js.map