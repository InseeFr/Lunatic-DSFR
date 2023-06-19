import { PropsWithChildren } from "react";

export function SuggesterContainer({
    children,
    id,
    className,
}: { id?: string; className?: string } & PropsWithChildren) {
    return (
        <div className={className} id={id} style={{ position: "relative" }}>
            {children}
        </div>
    );
}
