import type {SnackMessageInterface} from "../interfaces/snack-message.interface.ts";

export const UNKOWN_ERROR_MESSAGE = "An unknown error occurred. Please try again later.";

export const NETWORK_ERROR_MESSAGE = "Could not connect to the server. Please try again later";

export const CREDENTIALS_ERROR_MESSAGE = "Credentials are invalid";

export const UNKOWN_ERROR_SNACK_MESSAGE: SnackMessageInterface = {
    message: UNKOWN_ERROR_MESSAGE,
    type: "error",
}