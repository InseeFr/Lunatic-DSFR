import { LunaticComponentProps } from "../type";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

export function QuestionContext(props: LunaticComponentProps<"Question">) {
    const { label, description } = props;
    return <CallOut title={label && label}>{description && description}</CallOut>;
}
