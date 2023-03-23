"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const waiting_1 = __importDefault(require("./waiting"));
const lunatic = require('@inseefr/lunatic');
function getStoreInfoRequired() {
    return {};
}
function Pager({ goPrevious, goNext, goToPage, isLast, isFirst, pageTag, maxPage, getData, custom }) {
    if (maxPage && parseInt(maxPage) > 1) {
        const Button = lunatic.Button;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "pagination" },
                react_1.default.createElement(Button, { custom: custom, onClick: goPrevious, disabled: isFirst }, "Previous"),
                react_1.default.createElement(Button, { custom: custom, onClick: goNext, disabled: isLast }, "Next"),
                react_1.default.createElement(Button, { custom: custom, onClick: () => console.log(getData(true)) }, "Get State"),
                react_1.default.createElement(Button, { custom: custom, onClick: () => goToPage({ page: '18' }) }, "Go to page 18")),
            react_1.default.createElement("div", null,
                "PAGE: ",
                pageTag)));
    }
    return null;
}
function onLogChange(res, value, args) {
    console.log('onChange', { res, value, args });
}
const Orchestrator = (_a) => {
    var { source, data, management = false, activeControls = false, features, initialPage = '1', getStoreInfo = getStoreInfoRequired, missing = false, shortcut = false, activeGoNextForMissing = false, suggesterFetcher, autoSuggesterLoading, suggesters, preferences, custom, filterDescription = true } = _a, rest = __rest(_a, ["source", "data", "management", "activeControls", "features", "initialPage", "getStoreInfo", "missing", "shortcut", "activeGoNextForMissing", "suggesterFetcher", "autoSuggesterLoading", "suggesters", "preferences", "custom", "filterDescription"]);
    const { maxPage } = source;
    const { getComponents, goPreviousPage, goNextPage, goToPage, pageTag, isFirstPage, isLastPage, waiting, getErrors, getModalErrors, getCurrentErrors, getData, } = lunatic.useLunatic(source, data, {
        initialPage,
        features,
        preferences,
        onChange: onLogChange,
        custom,
        activeGoNextForMissing,
        autoSuggesterLoading,
        suggesters,
        suggesterFetcher,
        management,
        activeControls,
    });
    const components = getComponents();
    const errors = getErrors();
    const modalErrors = getModalErrors();
    const currentErrors = getCurrentErrors();
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "components" }, components.map(function (component) {
            const { id, componentType, storeName, response } = component, other = __rest(component, ["id", "componentType", "storeName", "response"]);
            const Component = lunatic[componentType];
            const storeInfo = storeName ? getStoreInfo(storeName) : {};
            return (react_1.default.createElement("div", { className: "lunatic lunatic-component-dsfr", key: `component-${id}` },
                react_1.default.createElement(Component, Object.assign({ id: id, response: response }, other, rest, component, storeInfo, { missing: missing, missingStrategy: goNextPage, shortcut: shortcut, filterDescription: filterDescription, errors: currentErrors }))));
        })),
        react_1.default.createElement(Pager, { goPrevious: goPreviousPage, goNext: goNextPage, goToPage: goToPage, isLast: isLastPage, isFirst: isFirstPage, pageTag: pageTag, maxPage: maxPage, getData: getData, custom: custom }),
        react_1.default.createElement(lunatic.Modal, { errors: modalErrors, goNext: goNextPage }),
        react_1.default.createElement(waiting_1.default, { status: waiting },
            react_1.default.createElement("div", { className: "waiting-orchestrator" }, "Initialisation des donn\u00E9es de suggestion..."))));
};
exports.default = Orchestrator;
//# sourceMappingURL=Orchestrator.js.map