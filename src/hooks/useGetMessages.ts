import {graphql} from "../gql";
import {useQuery} from "@apollo/client";
import type {MessagesQueryVariables} from "../gql/graphql.ts";


export const getMessagesDocument = graphql(`
    query Messages($chatId: String!) {
        messages(chatId: $chatId) {
            ...MessageFragment
        }
    }
`)


const useGetMessages = (variables: MessagesQueryVariables) => {
    return useQuery(getMessagesDocument, {variables});
}


export { useGetMessages };