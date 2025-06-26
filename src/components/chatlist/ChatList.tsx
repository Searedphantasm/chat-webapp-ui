import List from '@mui/material/List';
import ChatListItem from "./chatlist-item/ChatListItem.tsx";
import {Divider, Stack} from "@mui/material";
import ChatListHeader from "./chatlist-header/ChatListHeader.tsx";
import {useState} from "react";
import ChatListAdd from "./chatlist-add/ChatListAdd.tsx";
import {useGetChats} from "../../hooks/useGetChats.ts";

const ChatList = () =>  {

    const [chatListAddVisible, setChatListAddVisible] = useState(false);
    const { data } = useGetChats()
    
    return (
        <>
           <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)}  />
           <Stack>
               <ChatListHeader handleAddChat={() => setChatListAddVisible(true) } />
               <Divider  />
               <List sx={{
                   width: '100%',
                   maxWidth: 360,
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
                       <ChatListItem name={chat.name}  />
                   ))}
               </List>
           </Stack>
        </>
    );
}


export default ChatList;