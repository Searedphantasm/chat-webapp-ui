import {useLocation, useParams} from "react-router";
import {useGetChat} from "../../hooks/useGetChat.ts";
import {Divider, Grid, IconButton, InputBase, Paper, Stack} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useCreateMessage} from "../../hooks/useCreateMessage.ts";
import {useEffect, useRef, useState} from "react";
import {useGetMessages} from "../../hooks/useGetMessages.ts";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Chat = () => {

    const params = useParams();
    const chatId = params._id!
    const [message, setMessage] = useState("")
    const { data } = useGetChat({ _id: chatId });
    const [createMessage] = useCreateMessage(chatId);
    const {data: messages} = useGetMessages({ chatId })
    const divRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const scrollToBottom = () => {
        divRef.current?.scrollIntoView()
    }

    useEffect(() => {
        setMessage("");
        scrollToBottom();
    }, [location, messages]);

    const handleCreateMessage = async () => {
        await createMessage({
            variables: {
                createMessageInput:{
                    content: message,
                    chatId: chatId!,
                }
            }
        });
        setMessage("");
        scrollToBottom();
    }

    return (
        <Stack sx={{ height: "100%", justifyContent: "space-between", }}>
            <h1>
                {data?.chat.name}
            </h1>
            <Box sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {messages?.messages.map((message, index) => (
                    <Grid key={index} container alignItems={"center"} marginBottom={"1rem"}>
                        <Grid size={{ xs: 2, lg:1 }}>
                            <Avatar src={""} sx={{ width: 52,height:52 }} />
                        </Grid>
                        <Grid size={{ xs: 10, lg:11 }}>
                            <Stack>
                                <Paper sx={{ width: "fit-content" }}>
                                    <Typography sx={{ padding: ".9rem"}}>
                                        {message.content}
                                    </Typography>
                                </Paper>
                                <Typography variant={"caption"} sx={{marginLeft: "0.25rem"}}>
                                    {new Date(message.createdAt).toLocaleTimeString()}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
                <div ref={divRef}></div>
            </Box>
            <Paper sx={{ p: '2px 4px', display: 'flex', justifySelf: 'flex-end',alignItems:'center', width: '100%', margin: '1rem 0rem' }}>
                <InputBase onChange={(event) => {
                    setMessage(event.target.value);
                }} value={message} sx={{ marginLeft: 1, flex: 1, width: '100%'}} placeholder={"Message"}
                 onKeyDown={(event) => {
                               if (event.key === "Enter") {
                                   handleCreateMessage();
                               }
                           }}
                />
                <Divider sx={{ height: "20px", m: 0.5 }} orientation="vertical" />
                <IconButton onClick={() => {
                    handleCreateMessage();
                }} color={"primary"} sx={{ p: "10px"}}>
                    <SendIcon />
                </IconButton>
            </Paper>
        </Stack>
    );
};

export default Chat;