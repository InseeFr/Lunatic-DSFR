import { LunaticComponentProps } from "../type";
import { Alert } from "@codegouvfr/react-dsfr/Alert";

function QuestionInformation(props: LunaticComponentProps<"Question">) {
    const { label, description } = props;
    if (!label && !description) {
        return null;
    }
    return (
        <Alert
            description={description ? description : ""}
            severity="info"
            small={false}
            closable={false}
            title={label ? label : ""}
        />
    );
}

export default QuestionInformation;
