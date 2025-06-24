import {Container, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router";
import router from "./routes.tsx";
import theme from "./theme.ts";
import {ApolloProvider} from "@apollo/client";
import client from "./constants/apollo-client.ts";
import Guard from "./components/auth/Guard.tsx";
import Header from "./components/header/Header.tsx";
import AutohideSnackbar from "./components/snackbar/Snackbar.tsx";
import ChatList from "./components/chatlist/ChatList.tsx";
import usePath from "./hooks/usePath.ts";

const App = () => {

    const path = usePath();

    return (
        <ApolloProvider client={client}>
            <ThemeProvider defaultMode={"dark"} theme={theme} >
                <CssBaseline />
                <Header />
                <Guard>
                    {path === "/" ? (
                        <Grid container>
                            <Grid size={{ md: 3 }}>
                                <ChatList />
                            </Grid>
                            <Grid  size={{ md: 9 }}>
                                <Routes />
                            </Grid>
                        </Grid>
                    ):(
                      <Routes />
                    )}
                </Guard>
                <AutohideSnackbar />
            </ThemeProvider>
        </ApolloProvider>
    );
};


const Routes = () => {
    return (
        <Container>
            <RouterProvider router={router} />
        </Container>
    )
}

export default App;