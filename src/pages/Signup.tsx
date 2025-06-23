import Auth from "../components/auth/Auth.tsx";
import {Link} from "react-router";
import {useCreateUser} from "../hooks/useCreateUser.ts";
import {useState} from "react";
import {extractErrorMessage} from "../utils/errors.ts";

const SignupPage = () => {
    const [createUser] = useCreateUser();
    const [error,setError] = useState("");

    return (
        <div>
            <Auth submitLabel="Signup" onSubmit={async ({email, password}) => {
                try {
                    await createUser({
                        variables: {
                            createUserInput: {email, password},
                        }
                    })
                    setError("");
                } catch (e) {
                    const errorMessage = extractErrorMessage(e);
                    if (errorMessage) {
                        setError(errorMessage);
                        return;
                    }
                    setError("Unknown error occurred");
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