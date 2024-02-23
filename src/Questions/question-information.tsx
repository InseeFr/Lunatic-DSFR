import { Alert } from "@codegouvfr/react-dsfr/Alert";
import type { LunaticComponentProps } from "@inseefr/lunatic";

export function QuestionInformation(props: LunaticComponentProps<"QuestionInformation">) {
    const { label, description } = props;
    if (!label && !description) {
        return null;
    }
    if (!label) {
        return (
            <Alert
                description={description ? description : ""}
                severity="info"
                closable={false}
                small
                title={undefined}
            />
        );
    } else {
        return (
            <Alert
                description={description ? description : ""}
                severity="info"
                closable={false}
                title={label}
            />
        );
    }
}
