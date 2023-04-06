import { ReferentielEntity } from "./Suggester";

type PanelProps = {
    suggestions: Array<ReferentielEntity>;
};

function Option(props: { label: string }) {
    const { label } = props;
    return <li>{label}</li>;
}

export function Panel(props: PanelProps) {
    const { suggestions } = props;
    return (
        <ul className="">
            {suggestions.map(function ({ label, id }) {
                return <Option key={id} label={label} />;
            })}
        </ul>
    );
}
