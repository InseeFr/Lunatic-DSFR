import { PropsWithChildren, cloneElement } from "react";

export function CloneElements<T>(props: PropsWithChildren<T>) {
    const { children, ...rest } = props;
    const effective = Array.isArray(children) ? children : [children];
    return (
        <>
            {effective.map((element, key) => {
                return cloneElement(element as React.ReactElement<T>, {
                    ...(rest as T),
                    key,
                });
            })}
        </>
    );
}
