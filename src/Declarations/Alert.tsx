import { PropsWithChildren, useRef, useEffect, useState, ReactNode, isValidElement } from "react";
import { fr } from "@codegouvfr/react-dsfr";

type AlertProps = {
    id?: string;
    type: string;
};

enum DeclarationsEnum {
    statement = "STATEMENT",
    instruction = "INSTRUCTION",
    help = "HELP",
    comment = "COMMENT",
    warning = "WARNING",
    messageFilter = "MESSAGE_FILTER",
}

function getDeclarationClassName(type: string, display: boolean) {
    const classNames = [fr.cx("fr-alert")];
    if (!display) {
        classNames.push(fr.cx("fr-hidden"));
    }
    if (type === DeclarationsEnum.warning) {
        classNames.push(fr.cx("fr-alert--warning"));
    } else {
        classNames.push(fr.cx("fr-alert--info"));
    }
    return classNames.join(" ");
}

function getContent(node: ReactNode) {
    if (isValidElement(node)) {
        return node;
    }
    const typeOf = typeof node;
    if (typeOf === "string" || typeOf === "number" || typeOf === "boolean") {
        return <h3>{node}</h3>;
    }

    return node;
}

export function Alert(props: PropsWithChildren<AlertProps>) {
    const { type, id, children } = props;
    const containerEl = useRef<HTMLDivElement>(null);
    const [display, setDisplay] = useState(true);

    useEffect(function () {
        const { current } = containerEl;
        if (current) {
            const h3 = current.getElementsByTagName("h3").item(0);
            if (h3) {
                h3.classList.add(fr.cx("fr-alert__title"));
            }
        }
    }, []);

    return (
        <div id={id} className={getDeclarationClassName(type, display)} ref={containerEl}>
            <button
                className={fr.cx("fr-btn--close", "fr-btn")}
                title="Fermer"
                onClick={() => setDisplay(false)}
            >
                Fermer
            </button>
            {getContent(children)}
        </div>
    );
}
