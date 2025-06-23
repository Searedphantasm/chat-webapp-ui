import {useState} from "react";
import {API_URL} from "../constants/urls.ts";
import client from "../constants/apollo-client.ts";


interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
    const [error, setError] = useState(false);

    const login = async (request:LoginRequest) => {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
            credentials: "include",
        });

        if (!res.ok) {
            setError(true);
            return;
        }
        setError(false);

        await client.refetchQueries({ include: 'active'});
    };

    return {
        login,
        error,
    }
}


export {useLogin};