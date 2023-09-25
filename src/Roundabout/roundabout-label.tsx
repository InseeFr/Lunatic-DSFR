import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";

export function RoundaboutLabel({ value }: { value: string }) {
    return (
        <div className={fr.cx("fr-col-12")}>
            <h1 className={classnames("roundabout-label", fr.cx("fr-h3"))}>{value}</h1>
        </div>
    );
}
