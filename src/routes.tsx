import {createBrowserRouter} from "react-router";
import {lazy} from "react";
import Chat from "./components/chat/Chat";
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
    },{
        path: "/chats/:_id",
        element: <Chat />
    }
]);


export default router;