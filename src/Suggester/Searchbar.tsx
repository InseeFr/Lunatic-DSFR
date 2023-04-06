import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { SuggesterProps } from "./Suggester";

type SearchbarProps = Pick<SuggesterProps, "label" | "id">;

export function Searchbar(props: SearchbarProps) {
    const { label, id } = props;
    return (
        <>
            <label className="fr-label" htmlFor={id}>
                {label}
            </label>
            <SearchBar nativeInputProps={{ id }} />
            <div className="lifted">Panel</div>
        </>
    );
}
