import { Input, type InputProps } from "@codegouvfr/react-dsfr/Input";
import { forwardRef } from "react";

export type CustomInputProps = InputProps["nativeInputProps"] & {
    dsfrProps: Omit<InputProps.RegularInput, "nativeInputProps">;
};

/**
 * Only use this component inside NumberFormat from `react-number-format`
 * This abstraction is necessary because `react-number-format` passes `onChange`, `onFocus`, `onBlur`, and other input events directly to the Input component.
 * Therefore, these props need to be at the root level.
 * See: https://s-yadav.github.io/react-number-format/docs/quirks#notes-and-quirks
 */
export const CustomInputDsfr = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
    const { dsfrProps, ...restProps } = props;
    return (
        <Input
            {...dsfrProps}
            ref={ref}
            nativeInputProps={{
                style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                },
                title: restProps.value?.toString() ?? "",
                onBlur: e => {
                    e.target.setSelectionRange(0, 0);
                },
                ...restProps,
            }}
        />
    );
});
