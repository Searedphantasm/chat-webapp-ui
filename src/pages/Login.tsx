import { Link } from "react-router";
import Auth from "../components/auth/Auth.tsx";
import {useLogin} from "../hooks/useLogin.ts";


const LoginPage = () => {

    const { login ,error } = useLogin();

    return (
        <div>
            <Auth submitLabel="Login" onSubmit={(credentials) => login(credentials)} error={error}>
                <Link to={"/signup"} style={{ alignSelf: "center", color: "skyblue" }} >
                        Signup
                </Link>
            </Auth>
        </div>
    );
};

export default LoginPage;