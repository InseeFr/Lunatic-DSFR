import { DeclarationType } from "../utils/type/type-source";
import BeforeDeclaration from "./BeforeDeclaration";
import AfterDeclaration from "./AfterDeclaration";
import { fr } from "@codegouvfr/react-dsfr";

type DeclarationsType = {
    declarations: Array<DeclarationType>;
};

function getDeclarations(declarations: Array<DeclarationType>) {
    if (declarations) {
        console.log(declarations);
        return declarations.map(function (declaration, index) {
            const { label, declarationType, position } = declaration;
            if (declarationType === "HELP" && position === "BEFORE_QUESTION_TEXT") {
                return <BeforeDeclaration label={label} key={index} />;
            } else if (declarationType === "HELP" && position === "AFTER_QUESTION_TEXT") {
                return <AfterDeclaration label={label} key={index} />;
            } else {
                return (
                    <div className={fr.cx("fr-col-12")} key={index}>
                        {label}
                    </div>
                );
            }
        });
    }
    return;
}

export function Declarations({ declarations }: DeclarationsType) {
    return <>{getDeclarations(declarations)}</>;
}

export default Declarations;
