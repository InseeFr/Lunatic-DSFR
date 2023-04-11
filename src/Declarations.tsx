import { ReactNode, useEffect } from "react";
import { Alert as AlertDSFR } from "@codegouvfr/react-dsfr/Alert";

type DeclarationsType = {
    id: string;
    type: string;
    declarations: Array<Record<string, string>>;
};

function ComplexAlert({ label }: { label: ReactNode }) {
    useEffect(() => {
        document.querySelector("h3")?.classList.add("fr-alert__title");
    }, []);

    return <div className="fr-alert fr-alert--error">{label}</div>;
}

function RenderAlert({ label }: { label: string | ReactNode }) {
    if (typeof label === "string") {
        return <AlertDSFR severity="success" title="test" description={label} />;
    }
    return <ComplexAlert label={label} />;
}

export function Declarations({ id, type, declarations }: DeclarationsType) {
    const filtered = declarations.filter(({ position }) => position === type);

    if (filtered.length === 0) return null;

    return (
        <div id={`declarations-${id}-${type}`} className="declarations-lunatic">
            {filtered.map(({ id: idD, label }) => {
                return <RenderAlert key={idD} label={label} />;
            })}
        </div>
    );
}

export default Declarations;
