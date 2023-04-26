import { DeclarationPositionEnum, DeclarationType } from "../utils/type/type-source";
import { Declaration } from "./Declaration";
import { DeclarationTypeEnum } from "./Declaration";

type Position = Pick<DeclarationType, "position">;

type DeclarationsProps = {
    id: string;
    type: Position;
    declarations?: Array<DeclarationType>;
};

/**
 * Une déclaration est-elle attachée au type de la position.
 * @param type
 * @param declaration
 * @returns
 */
function isAtPosition(type: Position, declaration: DeclarationType) {
    // TODO: Julia : Si la déclaration n'a pas de position, on l'affiche pas défaut à before ou on la zap ?
    return (declaration?.position as unknown) === type;
}

/**
 * Le type d'une déclaration est-il compatible avec le type de sa position ?
 * @param type
 * @param declaration
 * @returns
 */
function isValidePosition(declaration: DeclarationType) {
    // TODO Julia, si la declaration n'a pas declarationType, on la zap ?

    const { declarationType, position } = declaration;
    if (position === DeclarationPositionEnum.before && declarationType !== DeclarationTypeEnum.HELP) {
        return false;
    }
    if (
        position === DeclarationPositionEnum.detachable &&
        declarationType !== DeclarationTypeEnum.STATEMENT
    ) {
        return false;
    }
    // on nes s'occupe pas des autes cas ?
    return true;
}

/**
 * filtrage et transformation des déclarations.
 * TODO C'est franchement un peu le bazarre ce concept de déclaration dans le modèle Lunatic,
 * il faudrait qu'on repense tout cela proprement. Le plus simple peut-être serait de l'abandonner
 * sans le toucher, pour assurer la rétro compatibiliter et le remplacer par un nouveau concept.
 * De plus cette implem vient casser le modèle de gestion des déclarations déjà en service dans lunatic.
 *
 * @param type
 * @param declarations
 * @returns
 */
function filterDeclarations(type: Position, declarations: Array<DeclarationType>) {
    return declarations
        .filter(function (declaration) {
            return isAtPosition(type, declaration) && isValidePosition(declaration);
        })
        .map(function (declaration) {
            const { declarationType, id } = declaration;
            return <Declaration type={declarationType} key={id} />;
        });
}

/**
 * Surcharges des Declarations pour valider la position et le type des
 * déclarations.
 * Est-ce vraiment nécessaire ?
 * Julia, le composant apporte un container, faut-il une surcharge qquonque avec le DSFR ?
 * @param props
 * @returns
 */
export function Declarations(props: DeclarationsProps) {
    const { id, type, declarations = [] } = props;
    return (
        <div id={`declarations-${id}}`} className="declarations-lunatic-dsfr">
            {filterDeclarations(type, declarations)}
        </div>
    );
}
