import {graphql} from "../gql";
import {useQuery} from "@apollo/client";
import type {ChatQueryVariables} from "../gql/graphql.ts";

const getChatDocument = graphql(`
    query Chat($_id: String!) {
        chat(_id: $_id) {
            ...ChatFragment
        }
    }
`)


const useGetChat = (variables: ChatQueryVariables) => {
    return useQuery(getChatDocument, { variables })
}

export { useGetChat }