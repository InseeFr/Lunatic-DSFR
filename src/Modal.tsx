import { type ReactEventHandler, MouseEventHandler, RefObject } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { type LunaticComponentProps } from "./type";
import { fr } from "@codegouvfr/react-dsfr";
import classnames from "classnames";

type Props = Pick<LunaticComponentProps<"Modal">, "id" | "label" | "description"> & {
    onClose: ReactEventHandler<HTMLDialogElement>;
    onCancel: ReactEventHandler<HTMLDialogElement>;
    onClick: MouseEventHandler<HTMLDialogElement>;
    dialogRef: RefObject<HTMLDialogElement>;
};

export function Modal(props: Props) {
    const { id, label, description, onClose, onCancel, onClick, dialogRef } = props;

    return createPortal(
        <dialog
            className={classnames("lunatic-dsfr-modal", fr.cx("fr-modal", "fr-modal--opened"))}
            ref={dialogRef}
            id={id}
            aria-labelledby={`${id}-title`}
            aria-modal="true"
            role="dialog"
            onClose={onClose}
            onCancel={onCancel}
            onClick={onClick}
        >
            <div className={fr.cx("fr-container", "fr-container--fluid", "fr-container-md")}>
                <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
                    <div className={fr.cx("fr-col-12", "fr-col-md-8", "fr-col-lg-6")}>
                        <form method="dialog" className={fr.cx("fr-modal__body")}>
                            <div className={fr.cx("fr-modal__header")}>
                                <Button
                                    className={fr.cx("fr-btn--close")}
                                    disabled={false}
                                    type="submit"
                                    value="cancel"
                                    priority={"tertiary no outline"}
                                >
                                    Fermer
                                </Button>
                            </div>
                            <div className={fr.cx("fr-modal__content")}>
                                <h1 id={`${id}-title`} className={fr.cx("fr-modal__title")}>
                                    {/* Label is defined in the source.json, and we can accept VTL|MD or VTL */}
                                    {label}
                                </h1>
                                {/* Label is defined in the source.json, and we can accept VTL|MD or VTL */}
                                <>{description}</>
                            </div>
                            <div className={fr.cx("fr-modal__footer")}>
                                <ul
                                    className={fr.cx(
                                        "fr-btns-group",
                                        "fr-btns-group--right",
                                        "fr-btns-group--inline-reverse",
                                        "fr-btns-group--inline-lg",
                                        "fr-btns-group--icon-left",
                                    )}
                                >
                                    <li>
                                        <Button
                                            value="default"
                                            disabled={false}
                                            type="submit"
                                            priority={"primary"}
                                        >
                                            Je confirme
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            value="cancel"
                                            disabled={false}
                                            type="submit"
                                            priority={"secondary"}
                                        >
                                            Annuler
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>,
        document.body,
    );
}

export default Modal;
