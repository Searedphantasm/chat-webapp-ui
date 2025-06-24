import {makeVar} from "@apollo/client";
import type {SnackMessageInterface} from "../interfaces/snack-message.interface.ts";

export const snackVar = makeVar<SnackMessageInterface | undefined>(undefined);