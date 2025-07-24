import { useEffect, useState } from "react";

function useTimer(delay) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, delay)
    }, [])
    return show;
}
export default useTimer;