import type { LunaticSlotComponents } from "@inseefr/lunatic";
import ButtonDsfr from "@codegouvfr/react-dsfr/Button";

export const Button: LunaticSlotComponents["Button"] = props => {
    const { onClick, disabled, label, children, id } = props;

    return (
        // Seems to be a typescript issue, iconId can be optional in Button-dsfr definition
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ButtonDsfr
            id={id}
            disabled={disabled}
            onClick={onClick}
            iconId={id ? "fr-icon-delete-line" : undefined}
            value={label}
            iconPosition="left"
            size="medium"
            title={label}
        >
            {children}
        </ButtonDsfr>
    );
};
