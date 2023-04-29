import { useEffect, useRef } from "react"

// takes a handler, which executes whenever a click outside the element is detected
// returns a dom node, that is to be attached as ref to the "click outside" element 
const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const maybeHandler = (event) => {
            if (!domNode.current?.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        }
    })

    return domNode;
}

export default useClickOutside;