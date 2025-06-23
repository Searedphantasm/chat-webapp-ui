import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {API_URL} from "./urls.ts";
import {onError} from "@apollo/client/link/error";
import excludedRoutes from "./excluded-routes.ts";

const logoutLink = onError(error => {
    if (error.graphQLErrors?.length && (error.graphQLErrors[0].extensions?.originalError as any).statusCode === 401) {
        if (!excludedRoutes.includes(window.location.pathname)) {
            client.resetStore();
            window.location.href = "/login";
        }
    }
});

const httpLink = new HttpLink({
    uri: `${API_URL}/graphql`,
    credentials: "include",
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:logoutLink.concat(httpLink), // first the httpLink is applied and then the logout link
});


export default client;