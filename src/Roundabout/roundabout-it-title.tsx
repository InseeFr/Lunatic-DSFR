import classnames from "classnames";
import { useColors } from "@codegouvfr/react-dsfr/useColors";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

function UnnecessaryText({ unnecessary }: { unnecessary?: string | boolean }) {
    const theme = useColors();

    if (unnecessary) {
        return (
            <div className="fr-col-12 fr-mt-1w">
                <p className="fr-mb-0" style={{ color: theme.decisions.text.disabled.grey.default }}>
                    {unnecessary}
                </p>
            </div>
        );
    }
    return null;
}

export function RoundaboutItTitle({
    label,
    unnecessary,
}: {
    label: string;
    unnecessary?: string | boolean;
}) {
    const theme = useColors();
    const { css } = useStyles();

    return (
        <div
            className={classnames(
                css({
                    marginBottom: !unnecessary ? "1rem" : "0",
                    [fr.breakpoints.up("md")]: {
                        margin: "auto",
                    },
                }),
                "fr-col-12",
                !unnecessary ? "fr-col-md-6" : "",
            )}
        >
            <div className="fr-grid-row">
                <div className="fr-col-12">
                    <h2
                        className={classnames("roundabout-it-title", "fr-h4", "fr-mb-0")}
                        style={unnecessary ? { color: theme.decisions.text.disabled.grey.default } : {}}
                    >
                        {label}
                    </h2>
                </div>
                <UnnecessaryText unnecessary={unnecessary} />
            </div>
        </div>
    );
}
