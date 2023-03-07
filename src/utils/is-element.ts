import { isValidElement } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isElement(element: any) {
    return isValidElement(element);
}

export { isElement };
