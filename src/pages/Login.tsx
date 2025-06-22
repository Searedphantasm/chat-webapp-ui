import { Link } from "react-router";
import Auth from "../components/auth/Auth.tsx";
import {Link as MUILink} from "@mui/material";


const LoginPage = () => {
    return (
        <div>
            <Auth submitLabel="Login" onSubmit={async () => {}} >
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