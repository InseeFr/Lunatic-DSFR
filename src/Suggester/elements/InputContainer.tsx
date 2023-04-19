import { PropsWithChildren } from "react";

type InputContainer = unknown;

export default function InputContainer(props: PropsWithChildren<InputContainer>) {
    const { children, ...rest } = props;
    return <div {...rest}>{children}</div>;
}
