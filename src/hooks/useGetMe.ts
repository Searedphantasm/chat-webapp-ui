import {useQuery} from "@apollo/client";
import {graphql} from "../gql";


const getMeDocument = graphql(`
     query Me {
        me {
            _id
            email
        }
     }
`)

const useGetMe = () => {
    return useQuery(getMeDocument);
}


export { useGetMe };