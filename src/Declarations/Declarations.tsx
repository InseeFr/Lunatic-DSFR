import { Alert } from "./Alert";

type DeclarationsType = {
    id: string;
    type: string;
    declarations: Array<Record<string, string>>;
};

export function Declarations({ id, type, declarations }: DeclarationsType) {
    if (Array.isArray(declarations)) {
        const filtered = declarations.filter(({ position }) => position === type);
        if (filtered.length) {
            return (
                <div id={`declarations-${id}-${type}`} className="declarations-lunatic-dsfr">
                    {filtered.map(({ id: idD, label, declarationType }) => {
                        return (
                            <Alert type={declarationType} key={idD}>
                                {label}
                            </Alert>
                        );
                    })}
                </div>
            );
        }
    }

    return null;
}

export default Declarations;
