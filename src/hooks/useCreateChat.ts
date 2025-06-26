import {graphql} from "../gql";
import {useMutation} from "@apollo/client";
import {chatFragment} from "../fragments/chat.fragment.ts";

const createChatDocument = graphql(`
mutation CreateChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
       ...ChatFragment
    }
}`)


const useCreateChat = () => {
    return useMutation(createChatDocument, {
        update: (cache, { data }) => {
            cache.modify({
                fields: {
                    chats(existingChats = []){
                        const newChatRef = cache.writeFragment({
                            data: data?.createChat,
                            fragment: chatFragment
                        })

                        return [...existingChats, newChatRef]
                    }
                }
            })
        }
    });
}


export { useCreateChat };