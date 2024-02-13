import { MouseEventHandler, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { type LunaticComponentProps } from "./type";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

type Props = Pick<LunaticComponentProps<"Modal">, "id" | "label" | "description"> & {
    onCancel: () => void;
    onClose: () => void;
    onClick: MouseEventHandler<HTMLDialogElement>;
};

export function Modal(props: Props) {
    const { id, label, description, onClose, onCancel } = props;
    const dialogRef = useRef<HTMLDivElement>(null);

    const { cx } = useStyles();
    // dsfr has his own method to "hide" the modal when clicking on the overlay
    // and it doesn't broadcast any event so we have to watch when the class "fr-modal--opened" is removed
    useEffect(() => {
        if (!dialogRef.current) {
            return;
        }
        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class" &&
                    !dialogRef.current?.classList.contains("fr-modal--open")
                ) {
                    onCancel();
                }
            }
        });
        observer.observe(dialogRef.current, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return createPortal(
        <div
            ref={dialogRef}
            className={cx("lunatic-dsfr-modal", fr.cx("fr-modal", "fr-modal--opened"))}
            style={{ maxWidth: "100%", minHeight: "100vh" }}
            id={id}
            aria-labelledby={`${id}-title`}
            aria-modal="true"
            role="dialog"
        >
            <div className={fr.cx("fr-container", "fr-container--fluid", "fr-container-md")}>
                <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
                    <div className={fr.cx("fr-col-12", "fr-col-md-8", "fr-col-lg-6")}>
                        <div className={fr.cx("fr-modal__body")}>
                            <div className={fr.cx("fr-modal__header")}>
                                <Button
                                    onClick={onCancel}
                                    className={fr.cx("fr-btn--close")}
                                    disabled={false}
                                    type="button"
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
                                            onClick={onClose}
                                            value="default"
                                            disabled={false}
                                            type="button"
                                            priority={"primary"}
                                        >
                                            Je confirme
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            onClick={onCancel}
                                            value="cancel"
                                            disabled={false}
                                            type="button"
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
        </div>,
        document.body,
    );
}
