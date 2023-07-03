import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { displayLabelOrInput } from "./displayLabelOrInput";
import { ComboBoxOption } from "../combo-box.type";

export type LabelSelectionProps = {
    labelRenderer: FunctionComponent<{
        option?: ComboBoxOption;
        placeholder?: string;
        search?: string;
    }>;
    placeholder?: string;
    selectedIndex?: number;
    options: Array<ComboBoxOption>;
    search?: string;
    disabled?: boolean;
    focused?: boolean;
};

export function LabelSelection({
    labelRenderer: Renderer,
    placeholder,
    selectedIndex,
    options,
    search,
    disabled,
    focused,
}: LabelSelectionProps) {
    const option = selectedIndex !== undefined ? options[selectedIndex] : undefined;
    if (focused) {
        return null;
    } else {
        return (
            <div
                className={classnames("lunatic-combo-box-selected", "fr-input", {
                    disabled,
                })}
            >
                <Renderer option={option} placeholder={placeholder} search={search} />
            </div>
        );
    }
}

export default displayLabelOrInput(LabelSelection, "LabelSelection");
