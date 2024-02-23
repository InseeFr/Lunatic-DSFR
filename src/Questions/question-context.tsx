import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import type { LunaticComponentProps } from "@inseefr/lunatic";

export function QuestionContext(props: LunaticComponentProps<"QuestionContext">) {
    const { label, description } = props;
    return <CallOut title={label && label}>{description && description}</CallOut>;
}
