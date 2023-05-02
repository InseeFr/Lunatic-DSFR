import classnames from "classnames";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

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
            <div className="fr-col-12">
                <p className="fr-mb-0" style={{ color: theme.decisions.text.disabled.grey.default }}>
                    {label} n’a pas à compléter de questionnaire individuel car il est âgé de moins de 14
                    ans.
                </p>
            </div>
        );
    }
    if (resident) {
        return (
            <div className="fr-col-12">
                <p className="fr-mb-0" style={{ color: theme.decisions.text.disabled.grey.default }}>
                    {label} n’a pas à compléter de questionnaire individuel car il n’est pas catégoriser
                    comme un résident permanent de ce logement.
                </p>
            </div>
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
    const { css } = useStyles();

    return (
        <div
            className={classnames(
                css({
                    marginBottom: !resident && !underage ? "1rem" : "0",
                    [fr.breakpoints.up("md")]: {
                        margin: "auto",
                    },
                }),
                "fr-col-12",
                !resident && !underage ? "fr-col-md-6" : "",
            )}
        >
            <div className="fr-grid-row">
                <div className="fr-col-12">
                    <h2
                        className={classnames("roundabout-it-title", "fr-h4", "fr-mb-0")}
                        style={
                            underage || resident || unnecessary
                                ? { color: theme.decisions.text.disabled.grey.default }
                                : {}
                        }
                    >
                        {label}
                    </h2>
                </div>
                <UnnecessaryText underage={underage} resident={resident} label={label} />
            </div>
        </div>
    );
}
