import client from "../constants/apollo-client.ts";
import {authenticatedVar} from "../constants/authenticated.ts";

const onLogout = () => {
    authenticatedVar(false);
    client.resetStore();
    window.location.href = "/login";
}



export { onLogout };