import {createBrowserRouter} from "react-router";
import LoginPage from "./pages/Login.tsx";
import SignupPage from "./pages/Signup.tsx";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage  />
    },{
        path: "/signup",
        element: <SignupPage />
    }
]);


export default router;