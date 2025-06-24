import {useGetMe} from "../../hooks/useGetMe.ts";
import React, {useEffect} from 'react'
import excludedRoutes from "../../constants/excluded-routes.ts";
import {authenticatedVar} from "../../constants/authenticated.ts";

interface GuardProps {
    children: React.ReactNode;
}

const Guard = ({children}:GuardProps) => {
    const {data: user} = useGetMe();

    useEffect(() => {
        if (user) {
            authenticatedVar(true)
        }
    }, [user]);

    return (
        <>
            {
                excludedRoutes.includes(window.location.pathname) ? children : user && children
            }
        </>
    )
};

export default Guard;