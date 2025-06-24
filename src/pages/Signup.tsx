import Auth from "../components/auth/Auth.tsx";
import {Link} from "react-router";
import {useCreateUser} from "../hooks/useCreateUser.ts";
import {useState} from "react";
import {extractErrorMessage} from "../utils/errors.ts";
import {useLogin} from "../hooks/useLogin.ts";
import {UNKOWN_ERROR_MESSAGE} from "../constants/errors.ts";

const SignupPage = () => {
    const [createUser] = useCreateUser();
    const [error,setError] = useState("");
    const {login} = useLogin();

    return (
        <div>
            <Auth submitLabel="Signup" onSubmit={async ({email, password}) => {
                try {
                    await createUser({
                        variables: {
                            createUserInput: {email, password},
                        }
                    })
                    await login({email, password});
                    setError("");
                } catch (e) {
                    const errorMessage = extractErrorMessage(e);
                    if (errorMessage) {
                        setError(errorMessage);
                        return;
                    }
                    setError(UNKOWN_ERROR_MESSAGE);
                }
            }} error={error}>
                <Link to={"/login"} style={{ alignSelf: "center", color: "skyblue" }}>
                    Login
                </Link>
            </Auth >
        </div>
    );
};

export default SignupPage;