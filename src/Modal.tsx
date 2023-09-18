import { ReactEventHandler, MouseEventHandler, RefObject } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { LunaticComponentProps } from "./type";

type Props = Pick<LunaticComponentProps<"Modal">, "id" | "label" | "description"> & {
    onClose: ReactEventHandler<HTMLButtonElement>;
    onCancel: ReactEventHandler<HTMLButtonElement>;
    onClick: MouseEventHandler<HTMLDialogElement>;
    dialogRef: RefObject<HTMLDialogElement>;
};

export function Modal(props: Props) {
    console.log(props);
    const { id, label, description, onClose, onCancel, onClick, dialogRef } = props;

    return createPortal(
        <dialog
            className="lunatic-dsfr-modal fr-modal fr-modal--opened"
            ref={dialogRef}
            id={id}
            onClick={onClick}
        >
            <div className="fr-container fr-container--fluid fr-container-md">
                <div className="fr-grid-row fr-grid-row--center">
                    <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
                        <div className="fr-modal__body">
                            <div className="fr-modal__header">
                                <Button
                                    className={"fr-btn--close"}
                                    onClick={onClose}
                                    disabled={false}
                                    priority={"tertiary no outline"}
                                >
                                    Fermer
                                </Button>
                            </div>
                            <div className="fr-modal__content">
                                <span id={`${id}-title`} className="fr-modal__title">
                                    {/* Label is defined in the source.json, and we can accept VTL|MD or VTL */}
                                    {label}
                                </span>
                                {/* Label is defined in the source.json, and we can accept VTL|MD or VTL */}
                                <span>{description}</span>
                            </div>
                            <div className="fr-modal__footer">
                                <ul className="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                                    <li>
                                        <Button onClick={onClose} disabled={false} priority={"primary"}>
                                            Je confirme
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            onClick={onCancel}
                                            disabled={false}
                                            priority={"secondary"}
                                        >
                                            Annuler
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>,
        document.body,
    );
}

export default Modal;
