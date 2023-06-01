import { PropsWithChildren } from "react";

type InputContainer = unknown;

export function SuggesterInputContainer(props: PropsWithChildren<InputContainer>) {
    const { children, ...rest } = props;
    return <div {...rest}>{children}</div>;
}
