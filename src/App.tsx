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

    const showChatListVar = path === "/" || path.includes('chats')

    return (
        <ApolloProvider client={client}>
            <ThemeProvider defaultMode={"dark"} theme={theme} >
                <CssBaseline />
                <Header />
                <Guard>
                    <Container maxWidth={"xl"} sx={{ marginTop: "1rem"}}>
                    {showChatListVar ? (
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12,md: 3, lg:4, xl: 5 }}>
                                <ChatList />
                            </Grid>
                            <Grid  size={{ xs: 12,md: 9, lg: 8, xl: 9 }}>
                                <Routes />
                            </Grid>
                        </Grid>
                    ):(
                      <Routes />
                    )}
                    </Container>
                </Guard>
                <AutohideSnackbar />
            </ThemeProvider>
        </ApolloProvider>
    );
};


const Routes = () => {
    return (
            <RouterProvider router={router} />
    )
}

export default App;