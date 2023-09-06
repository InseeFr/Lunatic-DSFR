import { HTMLAttributes } from "react";
import { ReferentielEntity } from "./Suggester";

export function RenderOption(props: HTMLAttributes<HTMLLIElement>, option: ReferentielEntity) {
    const { id, label } = option;
    return (
        <li {...props} key={id}>
            {label ?? id}
        </li>
    );
}
