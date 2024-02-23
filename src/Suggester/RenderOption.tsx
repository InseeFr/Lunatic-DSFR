import type { HTMLAttributes } from "react";
import type { ReferentielEntity } from "./Suggester";

export function RenderOption(props: HTMLAttributes<HTMLLIElement>, option: ReferentielEntity) {
    const { id, label } = option;
    return (
        <li {...props} key={id}>
            {label ?? id}
        </li>
    );
}
