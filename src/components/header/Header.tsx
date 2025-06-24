import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Branding from "./Branding.tsx";
import MobileNavigation from "./mobile/MobileNavigation.tsx";
import MobileBranding from "./mobile/MobileBranding.tsx";
import Navigation from './Navigation.tsx';
import Settings from './Settings.tsx';
import {useReactiveVar} from "@apollo/client";
import {authenticatedVar} from "../../constants/authenticated.ts";
import type {PageInterface} from "../../interfaces/page.interface.ts";

const pages: PageInterface[] = [
    {
        title: "Home",
        path: "/",
    },
];

const unAuthenticatedPages: PageInterface[] = [
    {
        title: "login",
        path: "/login",
    },
    {
        title: "signup",
        path: "/signup",
    }
]

const Header = () => {

    const authenticated = useReactiveVar(authenticatedVar)

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Branding/>
                    <MobileNavigation pages={authenticated ? pages : unAuthenticatedPages}/>
                    <MobileBranding/>
                    <Navigation pages={authenticated ? pages : unAuthenticatedPages}/>
                    {authenticated && (
                        <Settings  />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
