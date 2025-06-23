import {useState} from "react";
import {API_URL} from "../constants/urls.ts";
import client from "../constants/apollo-client.ts";


interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
    const [error, setError] = useState("");

    const login = async (request:LoginRequest) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request),
                credentials: "include",
            });

            if (!res.ok) {
                if (res.status === 401) {
                    setError("Credentials are invalid");
                } else {
                    setError("Unknown error occurred");
                }
                return;
            }
            setError("");

            await client.refetchQueries({ include: 'active'});
        } catch (err) {
            setError("Could not connect to the server. Please try again later");
        }
    };

    return {
        login,
        error,
    }
}


export {useLogin};