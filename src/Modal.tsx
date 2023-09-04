import { useCallback, useEffect, useRef, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { LunaticComponentProps } from "./type";
import classnames from "classnames";

export function Modal(
    props: Pick<
        LunaticComponentProps<"Modal">,
        "id" | "label" | "description" | "goToPage" | "page" | "goNextPage" | "goPreviousPage"
    >,
) {
    const { id, label, description, goNextPage, goPreviousPage } = props;
    const first = useRef<HTMLDivElement>(null);
    const last = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const focusOnInit = first?.current?.lastElementChild as HTMLButtonElement;
        focusOnInit.focus();
    }, [first]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent<HTMLElement>) => {
            const firstButtonToFocus = first?.current?.lastElementChild as HTMLButtonElement;
            const lastButtonToFocus = last?.current?.lastElementChild as HTMLButtonElement;
            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === firstButtonToFocus) {
                        lastButtonToFocus.focus();
                        e.nativeEvent.preventDefault();
                    }
                } else if (document.activeElement === lastButtonToFocus) {
                    firstButtonToFocus.focus();
                    e.nativeEvent.preventDefault();
                }
            }
        },
        [first, last],
    );

    const handleNextClick = useCallback(
        function () {
            goNextPage();
        },
        [goNextPage],
    );
    const handlePreviousClick = useCallback(
        function () {
            goPreviousPage();
        },
        [goPreviousPage],
    );

    return createPortal(
        <dialog
            aria-labelledby={`${id}-title`}
            id={id}
            className={classnames("fr-modal", "fr-modal--opened")}
            open={true}
        >
            <div className="fr-container fr-container--fluid fr-container-md" onKeyDown={onKeyDown}>
                <div className="fr-grid-row fr-grid-row--center">
                    <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
                        <div className="fr-modal__body">
                            <div className="fr-modal__header" ref={first}>
                                <Button
                                    className={"fr-btn--close"}
                                    onClick={handlePreviousClick}
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
                                        <Button
                                            onClick={handleNextClick}
                                            disabled={false}
                                            priority={"primary"}
                                        >
                                            Je confirme
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            onClick={handlePreviousClick}
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
