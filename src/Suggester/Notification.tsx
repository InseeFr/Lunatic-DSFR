import { Alert } from "@codegouvfr/react-dsfr/Alert";

type NotificationProps = {
    className?: string;
    title: string;
    description: string;
};

export function Notification(props: NotificationProps) {
    const { className, title, description } = props;
    console.log({ className, title, description });

    return <Alert title={title} description={description} severity="info" closable small />;
}
