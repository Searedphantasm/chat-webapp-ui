import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <Stack spacing={2} sx={{
            height: "100vh", maxWidth: {
                xs: "70%",
                md: "30%"
            }, margin: "0 auto"
        }}>
            <TextField variant={"outlined"} type={"email"} label={"Email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            <TextField variant={'outlined'} type={"password"} label={"Password"} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            <Button variant={"contained"}>
                Login
            </Button>
        </Stack>
    );
};

export default Auth;