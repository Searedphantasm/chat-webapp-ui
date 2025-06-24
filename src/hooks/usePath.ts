import {useEffect, useState} from "react";
import router from "../routes.tsx";

const usePath = () => {
    const [path, setPath] = useState(window.location.pathname);


    useEffect(() => {
        router.subscribe(state => {
            setPath(state.location.pathname);
        })
    }, []);


    return path;
}


export default usePath;