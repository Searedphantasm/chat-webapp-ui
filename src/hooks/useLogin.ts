import {useState} from "react";
import {API_URL} from "../constants/urls.ts";
import client from "../constants/apollo-client.ts";


interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
    const [error, setError] = useState("");

    const login = async (request: LoginRequest) => {

        let res: Response
        try {
            res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(request),
                credentials: "include",
            });
        } catch (_networkErr) {
            // only network
            setError("Could not connect to the server. Please try again later");
            return;
        }

        if (!res.ok) {
            if (res.status === 401) {
                setError("Credentials are invalid");
            } else {
                setError("Unknown error occurred");
            }
            return;
        }

        setError("");

        try {
            await client.refetchQueries({
                include: ['Me'],
            });
        } catch (refetchErr) {
            console.error("Warning: failed to refetch queries after login", refetchErr);
        }
    };

    return {
        login,
        error,
    }
}


export {useLogin};