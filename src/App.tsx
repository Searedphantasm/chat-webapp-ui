import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router";
import router from "./routes.tsx";
import theme from "./theme.ts";
import {ApolloProvider} from "@apollo/client";
import client from "./constants/apollo-client.ts";

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider defaultMode={"dark"} theme={theme} >
                <CssBaseline />
                <Container>
                    <RouterProvider router={router} />
                </Container>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;