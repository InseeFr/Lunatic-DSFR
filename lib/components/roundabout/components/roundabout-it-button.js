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
exports.RoundaboutItButton = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
// @ts-ignore
const lunatic = __importStar(require("@inseefr/lunatic"));
const custom = __importStar(require("../../components"));
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
        return 'Compléter';
    }
    if (partial) {
        return 'Continuer';
    }
    return 'Commencer';
}
//  When a questionnaire has been started, it shows the "complété" badge
const CompleteBadge = ({ status, locked }) => {
    if (status === "complete") {
        return (react_1.default.createElement("div", { className: (0, classnames_1.default)("fr-col-12", { "fr-mb-2w": !locked }) },
            react_1.default.createElement("p", { className: "fr-badge fr-badge--success" }, "Compl\u00E9t\u00E9")));
    }
    return null;
};
// When a question is locked and completed, the button is removed.  
// When a question is not locked, the button is always visible. 
const DisplayButton = ({ status, locked, onClick, label }) => {
    const Button = lunatic.Button;
    if (((status !== "complete" && locked) || (!locked))) {
        return (react_1.default.createElement(Button, { className: (0, classnames_1.default)('roundabout-it-button'), onClick: onClick, custom: custom }, label));
    }
    return null;
};
function RoundaboutItButton({ complete, partial, iteration, goToIteration, locked, }) {
    const status = getStatus(complete, partial);
    const label = getLabel(complete, partial);
    const onClick = (0, react_1.useCallback)(function () {
        goToIteration(iteration);
    }, [iteration, goToIteration]);
    return (react_1.default.createElement("div", { className: "fr-col" },
        react_1.default.createElement("div", { className: "fr-grid-row" },
            react_1.default.createElement(CompleteBadge, { status: status, locked: locked }),
            react_1.default.createElement("div", { className: "fr-col-12" },
                react_1.default.createElement(DisplayButton, { status: status, locked: locked, onClick: onClick, label: label })))));
}
exports.RoundaboutItButton = RoundaboutItButton;
RoundaboutItButton.defaultProps = {
    locked: true,
};
//# sourceMappingURL=roundabout-it-button.js.map