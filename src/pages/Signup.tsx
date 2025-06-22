import Auth from "../components/auth/Auth.tsx";
import {Link} from "react-router";
import {Link as MUILink} from "@mui/material"

const SignupPage = () => {
    return (
        <div>
            <Auth submitLabel="Signup" onSubmit={async () => {}} >
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