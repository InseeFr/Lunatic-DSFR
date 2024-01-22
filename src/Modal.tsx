import { type ReactEventHandler, MouseEventHandler, RefObject } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { type LunaticComponentProps } from "./type";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

type Props = Pick<LunaticComponentProps<"Modal">, "id" | "label" | "description"> & {
    onClose: ReactEventHandler<HTMLDialogElement>;
    onCancel: ReactEventHandler<HTMLDialogElement>;
    onClick: MouseEventHandler<HTMLDialogElement>;
    dialogRef: RefObject<HTMLDialogElement>;
};

export function Modal(props: Props) {
    const { id, label, description, onClose, onCancel, onClick, dialogRef } = props;
    const { css } = useStyles();
    return createPortal(
        <dialog
            ref={dialogRef}
            id={id}
            onClose={onClose}
            onCancel={onCancel}
            onClick={onClick}
            className={css({
                padding: 0,
                border: "none",
                boxShadow: "none",
                overflow: "hidden",
                maxWidth: 600,
            })}
        >
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
                    <p>{description}</p>
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
                            <Button value="default" disabled={false} type="submit" priority={"primary"}>
                                Je confirme
                            </Button>
                        </li>
                        <li>
                            <Button value="cancel" disabled={false} type="submit" priority={"secondary"}>
                                Annuler
                            </Button>
                        </li>
                    </ul>
                </div>
            </form>
        </dialog>,
        document.body,
    );
}

export default Modal;
