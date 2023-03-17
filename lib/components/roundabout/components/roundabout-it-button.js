"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundaboutItButton = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = require("@codegouvfr/react-dsfr/Button");
function getStatus(complete, partial) {
    if (complete) {
        return 'complete';
    }
    if (partial) {
        return 'partial';
    }
    return 'unstarted';
}
function getLabel(complete, partial) {
    if (complete) {
        return 'Complété';
    }
    if (partial) {
        return 'Modifier';
    }
    return 'Commencer';
}
function RoundaboutItButton({ complete, partial, iteration, goToIteration, locked, }) {
    const status = getStatus(complete, partial);
    const label = getLabel(complete, partial);
    // const onClick = useCallback(
    // 	function () {
    // 		goToIteration(iteration);
    // 	},
    // 	[iteration, goToIteration]
    // );
    const onClick = () => {
        goToIteration(iteration);
    };
    return (react_1.default.createElement("ul", { className: "fr-btns-group fr-btns-group--lg" },
        react_1.default.createElement("li", null,
            react_1.default.createElement(Button_1.Button, { className: (0, classnames_1.default)('roundabout-it-button', status), disabled: status === 'complete' && locked, onClick: onClick }, label))));
}
exports.RoundaboutItButton = RoundaboutItButton;
RoundaboutItButton.defaultProps = {
    locked: true,
};
//# sourceMappingURL=roundabout-it-button.js.map