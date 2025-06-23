import {gql, useQuery} from "@apollo/client";
import type {User} from "../models/User.ts";


const GET_ME = gql`
 query Me {
    me {
        _id
        email
    }
 }
`

const useGetMe = () => {
    return useQuery<{me: User}>(GET_ME);
}


export { useGetMe };