import Auth from "../components/auth/Auth.tsx";
import {Link} from "react-router";
import {Link as MUILink} from "@mui/material"
import {useCreateUser} from "../hooks/useCreateUser.ts";

const SignupPage = () => {
    const [createUser] = useCreateUser();

    return (
        <div>
            <Auth submitLabel="Signup" onSubmit={async ({email, password}) => {
                await createUser({
                    variables: {
                        createUserInput: {email, password},
                    }
                })
            }} >
                <Link to={"/login"} style={{ alignSelf: "center" }}>
                    <MUILink>
                        Login
                    </MUILink>
                </Link>
            </Auth >
        </div>
    );
};

export default SignupPage;