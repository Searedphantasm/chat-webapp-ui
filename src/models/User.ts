import type {AbstractModel} from "./AbstractModel.ts";

export interface User extends AbstractModel {
    email: string;
}