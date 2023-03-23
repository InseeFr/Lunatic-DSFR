"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var react_1 = require("react");
var waiting_1 = require("./waiting");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var lunatic = require("@inseefr/lunatic");
var spa_1 = require("@codegouvfr/react-dsfr/spa");
spa_1.startReactDsfr({ defaultColorScheme: "system" });
function getStoreInfoRequired() {
    return {};
}
function Pager(_a) {
    var goPrevious = _a.goPrevious, goNext = _a.goNext, isLast = _a.isLast, isFirst = _a.isFirst, pageTag = _a.pageTag, maxPage = _a.maxPage, custom = _a.custom;
    if (maxPage && parseInt(maxPage) > 1) {
        var Button = lunatic.Button;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "pagination" },
                React.createElement(Button, { custom: custom, onClick: goPrevious, disabled: isFirst }, "Previous"),
                React.createElement(Button, { custom: custom, onClick: goNext, disabled: isLast }, "Next")),
            React.createElement("div", null,
                "PAGE: ",
                pageTag)));
    }
    return null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onLogChange(res, value, args) {
    console.log("onChange", { res: res, value: value, args: args });
}
var Orchestrator = function (_a) {
    var 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id = _a.id, source = _a.source, data = _a.data, _b = _a.management, management = _b === void 0 ? false : _b, _c = _a.activeControls, activeControls = _c === void 0 ? true : _c, features = _a.features, _d = _a.initialPage, initialPage = _d === void 0 ? "1" : _d, _e = _a.getStoreInfo, getStoreInfo = _e === void 0 ? getStoreInfoRequired : _e, _f = _a.missing, missing = _f === void 0 ? false : _f, _g = _a.shortcut, shortcut = _g === void 0 ? false : _g, _h = _a.activeGoNextForMissing, activeGoNextForMissing = _h === void 0 ? false : _h, suggesterFetcher = _a.suggesterFetcher, autoSuggesterLoading = _a.autoSuggesterLoading, suggesters = _a.suggesters, preferences = _a.preferences, custom = _a.custom, _j = _a.filterDescription, filterDescription = _j === void 0 ? true : _j, rest = __rest(_a, ["id", "source", "data", "management", "activeControls", "features", "initialPage", "getStoreInfo", "missing", "shortcut", "activeGoNextForMissing", "suggesterFetcher", "autoSuggesterLoading", "suggesters", "preferences", "custom", "filterDescription"]);
    var maxPage = source.maxPage;
    var _k = lunatic.useLunatic(source, data, {
        initialPage: initialPage,
        features: features,
        preferences: preferences,
        onChange: onLogChange,
        custom: custom,
        activeGoNextForMissing: activeGoNextForMissing,
        autoSuggesterLoading: autoSuggesterLoading,
        suggesters: suggesters,
        suggesterFetcher: suggesterFetcher,
        management: management,
        activeControls: activeControls
    }), getComponents = _k.getComponents, goPreviousPage = _k.goPreviousPage, goNextPage = _k.goNextPage, goToPage = _k.goToPage, pageTag = _k.pageTag, isFirstPage = _k.isFirstPage, isLastPage = _k.isLastPage, waiting = _k.waiting, compileControls = _k.compileControls, getData = _k.getData, Provider = _k.Provider;
    var components = getComponents();
    var _l = react_1.useState(), currentErrors = _l[0], setCurrentErrors = _l[1];
    var handleGoNextPage = react_1.useCallback(function () {
        var errors = compileControls();
        setCurrentErrors(errors.currentErrors);
        console.log({ errors: errors });
        if (errors.currentErrors) {
            // TODO
        }
        else {
            goNextPage();
        }
    }, [goNextPage, compileControls]);
    return (React.createElement(Provider, null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "components" }, components.map(function (component) {
                var id = component.id, componentType = component.componentType, storeName = component.storeName, response = component.response, other = __rest(component, ["id", "componentType", "storeName", "response"]);
                var Component = lunatic[componentType];
                var storeInfo = storeName ? getStoreInfo(storeName) : {};
                return (React.createElement("div", { className: "lunatic lunatic-component-dsfr", key: "component-" + id },
                    React.createElement(Component, __assign({ id: id, response: response }, other, rest, component, storeInfo, { missing: missing, missingStrategy: goNextPage, shortcut: shortcut, filterDescription: filterDescription, errors: currentErrors }))));
            })),
            React.createElement(Pager, { goPrevious: goPreviousPage, goNext: handleGoNextPage, goToPage: goToPage, isLast: isLastPage, isFirst: isFirstPage, pageTag: pageTag, maxPage: maxPage, getData: getData, custom: custom }),
            React.createElement(waiting_1["default"], { status: waiting },
                React.createElement("div", { className: "waiting-orchestrator" }, "Initialisation des donn\u00E9es de suggestion...")))));
};
exports["default"] = Orchestrator;
