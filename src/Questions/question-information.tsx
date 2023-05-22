import { MessageType } from "./type";
import { Alert } from "@codegouvfr/react-dsfr/Alert";

function QuestionInformation(props: MessageType) {
    const { text } = props;
    if (text) {
        return <Alert description={text} severity="info" small={false} closable={false} title="" />;
    }
    return null;
}

export default QuestionInformation;
