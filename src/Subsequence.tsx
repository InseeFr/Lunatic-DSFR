import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Subsequence: LunaticSlotComponents["Subsequence"] = props => {
    const { id, label } = props;
    return (
        <div id={id}>
            <h3>{label}</h3>
            TODO Déclarations
            {/* <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} />
            <Declarations type="DETACHABLE" declarations={declarations} /> */}
        </div>
    );
};
