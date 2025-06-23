import {createBrowserRouter} from "react-router";
import LoginPage from "./pages/Login.tsx";
import SignupPage from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage  />
    },{
        path: "/signup",
        element: <SignupPage />
    },{
        index: true,
        element: <Home />
    }
]);


export default router;