import List from '@mui/material/List';
import ChatListItem from "./chatlist-item/ChatListItem.tsx";
import {Divider, Stack} from "@mui/material";
import ChatListHeader from "./chatlist-header/ChatListHeader.tsx";

const ChatList = () =>  {
    return (
       <Stack>
           <ChatListHeader />
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
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
               <ChatListItem />
           </List>
       </Stack>
    );
}


export default ChatList;