import { MessageType } from "./type";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

function QuestionContent(props: MessageType) {
    const { text } = props;
    if (text) {
        return <CallOut>{text}</CallOut>;
    }
    return null;
}

export default QuestionContent;
