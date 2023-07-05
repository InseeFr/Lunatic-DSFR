import { useCallback, useReducer, useEffect, ReactNode } from "react";
import { INITIAL_STATE, reducer, actions } from "./state-management";
import { ComboBoxOption } from "./combo-box.type";
import { SelectionProps, Selection } from "./selection/selection";
import { Panel, PanelProps } from "./panel/panel";
import { SuggesterContainer } from "../Suggester/elements/SuggesterContainer";
import ComboBoxContent from "./combo-box-content";
import { LunaticBaseProps } from "../type";
import { SuggesterLabel } from "../Suggester/elements/SuggesterLabel";

const EMPTY_SEARCH = "";

type Props = SelectionProps &
    PanelProps & {
        className?: string;
        value: string | null;
        messageError?: string;
        getOptionValue?: (o: ComboBoxOption) => string;
        label?: ReactNode;
        description?: string;
        errors?: LunaticBaseProps["errors"];
        onChange?: (s: string | null) => void;
        onSelect: (s: string | null) => void;
        options: Array<ComboBoxOption>;
    };

function ComboBox({
    className,
    placeholder = "Veuillez chercher votre réponse",
    editable = false,
    disabled,
    id,
    optionRenderer,
    labelRenderer,
    onChange,
    onSelect,
    value,
    options,
    messageError,
    search: searchProps = EMPTY_SEARCH,
    getOptionValue = getDefaultOptionValue,
    label,
    description,
}: Props) {
    const labelId = `label-${id}`;
    const [state, dispatch] = useReducer(reducer, {
        ...INITIAL_STATE,
        search: searchProps,
    });
    const { focused, expanded, search, selectedIndex } = state;

    useEffect(
        function () {
            dispatch(actions.onInit({ options, value, getOptionValue }));
        },
        [options, value, getOptionValue],
    );

    const onFocus = useCallback(
        function () {
            dispatch(actions.onFocus(searchProps));
            onChange?.(searchProps);
        },
        [searchProps, onChange],
    );

    const onBlur = useCallback(function () {
        dispatch(actions.onBlur());
    }, []);

    const handleSelect = useCallback(
        (index: string) => {
            const indexNumber = parseInt(index, 10);
            const option = options[indexNumber];
            dispatch(actions.onSelect(indexNumber, searchProps));
            onSelect(getOptionValue(option));
        },
        [options, onSelect, getOptionValue],
    );

    const handleChange = useCallback(
        (s: string | null) => {
            dispatch(actions.onChange(s));
            onChange?.(s);
        },
        [onChange],
    );

    const onKeyDown = useCallback(
        (key: string) => {
            const { length } = options;
            dispatch(actions.onKeydown(key, length));
        },
        [options],
    );

    if (messageError) {
        return <div className="lunatic-combo-box-message-error">{messageError}</div>;
    }

    return (
        <SuggesterContainer id={id} className={className}>
            <SuggesterLabel description={description}>{label}</SuggesterLabel>
            <ComboBoxContent focused={focused} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}>
                <Selection
                    labelRenderer={labelRenderer}
                    placeholder={placeholder}
                    search={search}
                    expanded={expanded}
                    id={id}
                    labelId={labelId}
                    disabled={disabled}
                    focused={focused}
                    editable={editable}
                    selectedIndex={selectedIndex}
                    options={options}
                    onChange={handleChange}
                />
                <Panel
                    optionRenderer={optionRenderer}
                    options={options}
                    focused={focused}
                    selectedIndex={selectedIndex}
                    expanded={expanded}
                    id={id}
                    search={search}
                    onSelect={handleSelect}
                />
            </ComboBoxContent>
        </SuggesterContainer>
    );
}

function getDefaultOptionValue(option: ComboBoxOption = { value: "" }) {
    const { id, value } = option;
    return id || value;
}

export default ComboBox;
