import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

export function RoundaboutLabel({ value }: { value: string }) {
    const { cx } = useStyles();

    return (
        <div className={fr.cx("fr-col-12")}>
            <h1 className={cx("roundabout-label", fr.cx("fr-h3"))}>{value}</h1>
        </div>
    );
}
