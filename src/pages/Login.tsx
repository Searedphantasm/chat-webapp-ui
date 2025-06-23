import { Link } from "react-router";
import Auth from "../components/auth/Auth.tsx";
import {Link as MUILink} from "@mui/material";
import {useLogin} from "../hooks/useLogin.ts";


const LoginPage = () => {

    const { login ,error } = useLogin();

    return (
        <div>
            <Auth submitLabel="Login" onSubmit={(credentials) => login(credentials)} error={error ? "Credentials are not valid" : ""}>
                <Link to={"/signup"} style={{ alignSelf: "center" }}>
                    <MUILink>
                        Signup
                    </MUILink>
                </Link>
            </Auth>
        </div>
    );
};

export default LoginPage;