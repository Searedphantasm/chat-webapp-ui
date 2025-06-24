import {useGetMe} from "../../hooks/useGetMe.ts";
import React, {useEffect} from 'react'
import excludedRoutes from "../../constants/excluded-routes.ts";
import {authenticatedVar} from "../../constants/authenticated.ts";
import {snackVar} from "../../constants/snack.ts";
import {UNKOWN_ERROR_SNACK_MESSAGE} from "../../constants/errors.ts";
import usePath from "../../hooks/usePath.ts";

interface GuardProps {
    children: React.ReactNode;
}

const Guard = ({children}:GuardProps) => {
    const {data: user, error} = useGetMe();
    const path = usePath();

    useEffect(() => {
        if (user) {
            authenticatedVar(true)
        }
    }, [user]);

    useEffect(() => {
            if (error?.networkError){
                snackVar(UNKOWN_ERROR_SNACK_MESSAGE)
            }
    }, [error]);

    return (
        <>
            {
                excludedRoutes.includes(path) ? children : user && children
            }
        </>
    )
};

export default Guard;