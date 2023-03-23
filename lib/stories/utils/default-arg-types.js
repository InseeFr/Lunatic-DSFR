"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fields = [
    'source',
    'id',
    'pagination',
    'data',
    'management',
    'activeControls',
    'features',
    'initialPage',
    'getStoreInfo',
    'missing',
    'shortcut',
    'activeGoNextForMissing',
    'filterDescription',
];
const defaultArgTypes = fields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f]: {
        table: {
            disable: true,
        },
    } })), {});
exports.default = defaultArgTypes;
//# sourceMappingURL=default-arg-types.js.map