import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {IconButton} from "@mui/material";
import  AddCircleOutline  from "@mui/icons-material/AddCircleOutline";

interface ChatListHeaderProps {
    handleAddChat: () => void;
}

const ChatListHeader = ({handleAddChat}: ChatListHeaderProps) => {
    return (
        <AppBar position="static" color={"transparent"}>
            <Toolbar>
                <IconButton onClick={handleAddChat} size={"large"} edge={"start"}>
                    <AddCircleOutline  />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default ChatListHeader;