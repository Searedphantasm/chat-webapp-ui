import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import {ListItemButton} from "@mui/material";
import router from "../../../routes.tsx";
import type {Chat} from "../../../gql/graphql.ts";


interface ChatListItemProps {
    chat: Chat;
}

const ChatListItem = ({chat}:ChatListItemProps) => {
    return (
        <>
            <ListItem alignItems="flex-start" disablePadding={true}>
                <ListItemButton onClick={() => {
                    router.navigate(`/chats/${chat._id}`);
                }}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default ChatListItem;