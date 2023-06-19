import { useRef, useEffect, useState } from "react";

const controller = new AbortController();

function abortRequest() {
    controller.abort();
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function nothing() {}

/**
 * A hook to prevent dual fetch by using useRef.
 * @param cally
 * @returns
 */
export function useRemote<T>(
    cally: (() => Promise<T | undefined>) | undefined,
    onfail: () => void = nothing,
): T | undefined {
    const [result, setResult] = useState<T | undefined>(undefined);
    const alreadyDone = useRef(false);

    useEffect(() => {
        if (!alreadyDone.current) {
            if (typeof cally === "function") {
                alreadyDone.current = true;
                (async function () {
                    try {
                        setResult(await cally());
                    } catch (e) {
                        onfail();
                    }
                })();
            }
        }
        return () => {
            abortRequest();
        };
    }, [cally, onfail]);

    return result;
}
