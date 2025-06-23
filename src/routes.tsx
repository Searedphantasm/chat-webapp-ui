import {createBrowserRouter} from "react-router";
import {lazy} from "react";
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));



const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage  />
    },{
        path: "/signup",
        element: <SignupPage />
    },{
        path: "/",
        element: <Home />
    }
]);


export default router;