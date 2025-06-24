import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router";
import router from "./routes.tsx";
import theme from "./theme.ts";
import {ApolloProvider} from "@apollo/client";
import client from "./constants/apollo-client.ts";
import Guard from "./components/auth/Guard.tsx";
import Header from "./components/header/Header.tsx";
import AutohideSnackbar from "./components/snackbar/Snackbar.tsx";

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider defaultMode={"dark"} theme={theme} >
                <CssBaseline />
                <Header />
                <Container>
                    <Guard>
                        <RouterProvider router={router} />
                    </Guard>
                </Container>
                <AutohideSnackbar />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;