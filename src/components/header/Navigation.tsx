import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type {PageInterface} from "../../interfaces/page.interface.ts";
import router from "../../routes.tsx";

interface NavigationProps {
    pages: PageInterface[];
}

const Navigation = ({pages}:NavigationProps) => {


    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page.path}
                    onClick={() => router.navigate(page.path)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.title}
                </Button>
            ))}
        </Box>
    );
};

export default Navigation;