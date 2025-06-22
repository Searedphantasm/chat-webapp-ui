import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router";
import router from "./routes.tsx";
import theme from "./theme.ts";

const App = () => {
    return (
        <ThemeProvider defaultMode={"dark"} theme={theme} >
            <CssBaseline />
            <Container>
                <RouterProvider router={router} />
            </Container>
        </ThemeProvider>
    );
};

export default App;