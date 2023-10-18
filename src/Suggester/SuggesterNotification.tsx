import { PropsWithChildren } from "react";
import { Alert } from "@codegouvfr/react-dsfr/Alert";

const STATUS = {
    unused: 0,
    idle: 1,
    pending: 2,
    success: 3,
    unknown: 4,
    error: 5,
};

type SuggesterNotificationProps = {
    status: number;
    storeName: string;
    label: string;
    description: string;
};

export function SuggesterNotification(props: PropsWithChildren<SuggesterNotificationProps>) {
    const { children, status, label } = props;

    if (status === STATUS.error || status === STATUS.unknown) {
        return (
            <>
                <label>{label}</label>
                <Alert
                    description={`Votre référentiel ${label} n'est pas disponible. Vous pouvez poursuivre sans répondre à ce champ.`}
                    severity="error"
                    small
                />
            </>
        );
    }

    return <>{children}</>;
}
