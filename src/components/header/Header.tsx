import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Branding from "./Branding.tsx";
import MobileNavigation from "./mobile/MobileNavigation.tsx";
import MobileBranding from "./mobile/MobileBranding.tsx";
import Navigation from './Navigation.tsx';
import Settings from './Settings.tsx';

const pages: string[] = [];

const Header = () => {


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Branding/>
                    <MobileNavigation pages={pages}/>
                    <MobileBranding/>
                    <Navigation pages={pages}/>
                    <Settings  />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
