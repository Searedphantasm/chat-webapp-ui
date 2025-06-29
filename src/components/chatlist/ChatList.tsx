import List from '@mui/material/List';
import ChatListItem from "./chatlist-item/ChatListItem.tsx";
import {Divider, Stack} from "@mui/material";
import ChatListHeader from "./chatlist-header/ChatListHeader.tsx";
import {useEffect, useState} from "react";
import ChatListAdd from "./chatlist-add/ChatListAdd.tsx";
import {useGetChats} from "../../hooks/useGetChats.ts";
import usePath from "../../hooks/usePath.ts";

const ChatList = () =>  {

    const [chatListAddVisible, setChatListAddVisible] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState("")
    const { data } = useGetChats();
    const path = usePath();

    useEffect(() => {
        const pathsSplit = path.split("chats/");
        if (pathsSplit.length === 2){
            setSelectedChatId(pathsSplit[1]);
        }
    }, [path]);
    
    return (
        <>
           <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)}  />
           <Stack>
               <ChatListHeader handleAddChat={() => setChatListAddVisible(true) } />
               <Divider  />
               <List sx={{
                   width: '100%',
                   bgcolor: 'background.paper',
                   maxHeight: '80vh',
                   overflowY: 'auto',

                   /* Hide scrollbar in WebKit browsers (Chrome, Safari, Edge) */
                   '&::-webkit-scrollbar': {
                       display: 'none',
                   },

                   /* Hide scrollbar in Firefox */
                   scrollbarWidth: 'none',

                   '-ms-overflow-style': 'none',
               }}>
                   {data?.chats?.map((chat) => (
                       <ChatListItem chat={chat} selected={chat._id === selectedChatId}  />
                   )).reverse()}
               </List>
           </Stack>
        </>
    );
}


export default ChatList;