const fields = [
    "id",
    "pagination",
    "data",
    "management",
    "activeControls",
    "features",
    "initialPage",
    "getStoreInfo",
    "missing",
    "shortcut",
    "activeGoNextForMissing",
    "filterDescription",
    "custom",
    "suggesterFetcher",
    "autoSuggesterLoading",
    "suggesters",
    "preferences",
    "getReferentiel",
    "source",
];

const defaultArgTypes = fields.reduce(
    (acc, f) => ({
        ...acc,
        [f]: {
            table: {
                disable: true,
            },
        },
    }),
    {},
);

export default defaultArgTypes;
