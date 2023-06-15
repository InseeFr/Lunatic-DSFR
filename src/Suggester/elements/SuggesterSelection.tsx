import { useCallback, useEffect, useState } from "react";

type SuggesterSelectionProps = {
    suggestions: Array<Record<string, unknown>>;
    value: string;
    activeid: unknown;
    onClick: (value: string) => void;
} & Record<string, unknown>;

export function SuggesterSelection(props: SuggesterSelectionProps) {
    const { activeid, value, suggestions, onClick } = props;
    const [newValue, setNewValue] = useState<string>("");
    const suggestionsids = suggestions.map(s => s.id);

    useEffect(() => {
        if (suggestionsids.length && suggestionsids.includes(value)) {
            const option = suggestions.find(suggestion => suggestion.id === value);
            if (option && typeof option.label === "string") {
                setNewValue(option.label);
            }
        } else {
            setNewValue(value);
        }
    }, [value, suggestionsids]);

    const handleClick = useCallback(
        function () {
            onClick(newValue);
        },
        [onClick],
    );

    if (
        (activeid && typeof newValue === "string") ||
        (suggestionsids.length && suggestionsids.includes(value))
    ) {
        return (
            <div className="fr-input" {...props} onClick={handleClick}>
                {newValue}
            </div>
        );
    }
    return null;
}
