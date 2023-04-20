import { PropsWithChildren } from "react";

export function SuggesterContainer({ children }: PropsWithChildren) {
    return (
        <div className="What u wan't Julia!" style={{ position: "relative" }}>
            {children}
        </div>
    );
}
