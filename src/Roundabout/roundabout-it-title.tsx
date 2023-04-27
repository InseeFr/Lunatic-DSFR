import classnames from "classnames";
import { useColors } from "@codegouvfr/react-dsfr/useColors";

function UnnecessaryText({
    label,
    resident,
    underage,
}: {
    label: string;
    resident: boolean;
    underage: boolean;
}) {
    const theme = useColors();

    if (underage) {
        return (
            <p style={{ color: theme.decisions.text.disabled.grey.default }}>
                {label} n’a pas à compléter de questionnaire individuel car il est âgé de moins de 14
                ans.
            </p>
        );
    }
    if (resident) {
        return (
            <p style={{ color: theme.decisions.text.disabled.grey.default }}>
                {label} n’a pas à compléter de questionnaire individuel car il n’est pas catégoriser
                comme un résident permanent de ce logement.
            </p>
        );
    }
    return null;
}

export function RoundaboutItTitle({
    label,
    unnecessary,
    resident,
    underage,
}: {
    label: string;
    unnecessary: boolean;
    resident: boolean;
    underage: boolean;
}) {
    const theme = useColors();

    return (
        <div className="fr-col-12 fr-col-md-10">
            <div className="fr-grid-row">
                <div className="fr-col-12">
                    <h2
                        className={classnames("roundabout-it-title", "fr-h4")}
                        style={
                            underage || resident || unnecessary
                                ? {
                                      color: theme.decisions.text.disabled.grey.default,
                                  }
                                : {}
                        }
                    >
                        {label}
                    </h2>
                </div>
                <div className="fr-col-12">
                    <UnnecessaryText underage={underage} resident={resident} label={label} />
                </div>
            </div>
        </div>
    );
}
