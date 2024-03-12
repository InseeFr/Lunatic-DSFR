import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";

export const Subsequence: LunaticSlotComponents["Subsequence"] = props => {
    const { id, label, declarations } = props;
    return (
        <div id={id}>
            <h3>{label}</h3>
            <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
        </div>
    );
};
