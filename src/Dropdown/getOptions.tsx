export type OptionType = {
    value: string | number;
    label: string;
};

function DefaultOption() {
    return (
        <option value="" hidden disabled selected>
            Selectionnez une option
        </option>
    );
}

export function getOptions(options?: Array<OptionType>) {
    if (options) {
        const htmlOptions = options.map(function (option) {
            const { value, label } = option;
            return (
                <option key={`${value}`} value={value}>
                    {label}
                </option>
            );
        });

        return [<DefaultOption key="default-option" />, ...htmlOptions];
    }
    return [];
}
