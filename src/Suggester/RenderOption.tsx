import { HTMLAttributes } from "react";
import { SuggesterOption } from "../type";

export function RenderOption(props: HTMLAttributes<HTMLLIElement>, option: SuggesterOption) {
    const { id, label } = option;
    return (
        <li {...props} key={id}>
            {label}
        </li>
    );
}
