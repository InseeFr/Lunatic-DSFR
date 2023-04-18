import { PropsWithChildren } from "react";
import { Alert } from "@codegouvfr/react-dsfr/Alert";

function getNotification(status: number) {
    if (status === STATUS.idle || status === STATUS.pending) {
        return (
            <Alert
                description="Votre référentiel est encore en cours de chargement. Les propositions pourraient être incomplètes."
                severity="info"
                closable
                small
            />
        );
    }
    return null;
}

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
                    closable
                    small
                />
            </>
        );
    }

    return (
        <>
            {getNotification(status)}
            {children}
        </>
    );
}
