import {useGetMe} from "../../hooks/useGetMe.ts";
import React from 'react'
import excludedRoutes from "../../constants/excluded-routes.ts";

interface GuardProps {
    children: React.ReactNode;
}

const Guard = ({children}:GuardProps) => {
    const {data: user} = useGetMe();


    return (
        <>
            {
                excludedRoutes.includes(window.location.pathname) ? children : user && children
            }
        </>
    )
};

export default Guard;