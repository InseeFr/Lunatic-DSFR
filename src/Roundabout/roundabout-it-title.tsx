import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

function UnnecessaryText({ unnecessary }: { unnecessary?: string | boolean }) {
    if (unnecessary) {
        return (
            <div className={fr.cx("fr-col-12", "fr-mt-1w")}>
                <p className={fr.cx("fr-mb-0")}>{unnecessary}</p>
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
    const { css, cx } = useStyles();

    return (
        <div
            className={cx(
                css({
                    marginBottom: !unnecessary ? "1rem" : "0",
                    [fr.breakpoints.up("md")]: {
                        margin: "auto",
                    },
                }),
                fr.cx("fr-col-12"),
                !unnecessary ? fr.cx("fr-col-md-6") : "",
            )}
        >
            <div className={fr.cx("fr-grid-row")}>
                <div className={fr.cx("fr-col-12")}>
                    <h2 className={cx("roundabout-it-title", fr.cx("fr-h4", "fr-mb-0"))}>{label}</h2>
                </div>
                <UnnecessaryText unnecessary={unnecessary} />
            </div>
        </div>
    );
}
