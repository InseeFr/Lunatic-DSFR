import { LunaticError } from "../utils/type/type";
import { Searchbar } from "./Searchbar";

export type SuggesterProps = {
    className?: string;
    placeholder?: string;
    onSelect?: () => void;
    value?: unknown;
    disabled?: boolean;
    id?: string;
    searching?: (search: string) => Promise<unknown>;
    label?: string;
    description?: string;
    errors: Record<string, Array<LunaticError>>;
};

export function Suggester(props: SuggesterProps) {
    const { label, id } = props;
    return <Searchbar label={label} id={id} />;
}
