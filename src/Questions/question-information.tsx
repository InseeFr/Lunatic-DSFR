import { LunaticComponentProps } from "../type";
import { Alert } from "@codegouvfr/react-dsfr/Alert";

function QuestionInformation(props: LunaticComponentProps<"Question">) {
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

export default QuestionInformation;
