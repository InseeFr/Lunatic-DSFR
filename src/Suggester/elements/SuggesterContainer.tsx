import type { PropsWithChildren } from "react";

export function SuggesterContainer({ children }: PropsWithChildren) {
    return <div style={{ position: "relative" }}>{children}</div>;
}
