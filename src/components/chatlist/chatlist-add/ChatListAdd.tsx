import {
    Button,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputBase,
    Modal,
    Paper, Stack,
    Switch,
    TextField,
} from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {useCreateChat} from "../../../hooks/useCreateChat.ts";
import {UNKOWN_ERROR_MESSAGE} from "../../../constants/errors.ts";


interface ChatListAddProps {
    open: boolean;
    handleClose: () => void;
}

const ChatListAdd = ({open, handleClose}: ChatListAddProps) => {

    const [isPrivate, setIsPrivate] = useState(false);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [createChat] = useCreateChat();


    const onClose = () => {
        setError("");
        setIsPrivate(false);
        setName("")
        handleClose();
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: "absolute",
                width: 400,
                top:"50%",
                left:"50%",
                transform:"translate(-50%, -50%)",
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4
            }}>
                <Stack spacing={2}>
                    <Typography variant="h6" component={"h2"}>
                        Add Chat
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            style={{ width: 0 }}
                            control={
                                <Switch
                                    defaultChecked={isPrivate}
                                    value={isPrivate}
                                    onChange={(event) => setIsPrivate(event.target.checked)}
                                />
                            }
                            label="Private"
                        />
                    </FormGroup>
                    {
                        isPrivate ? (
                            <Paper sx={{p: "2px 4px", display: "flex", alignItems:"center"}}   >
                                <InputBase sx={{ marginLeft: 1, flex: 1 }} placeholder={"Search Users "}/>
                                <IconButton sx={{ p: "10px"}}  >
                                    <PersonSearchIcon />
                                </IconButton>
                            </Paper>
                        ) : (
                            <TextField
                                label="Name"
                                variant="outlined"
                                error={!!error}
                                helperText={error}
                                onChange={(event) => {
                                setName(event.target.value)}}


                            />
                        )
                    }
                    <Button onClick={async () => {

                        if (!name.trim().length) {
                            setError("Chat name is required");
                            return;
                        }

                        try {
                            await createChat({
                                variables: {
                                    createChatInput: {
                                        isPrivate,
                                        name: name || undefined, // returning undefined to not trigger validation
                                    }
                                }
                            });
                            onClose();
                        } catch (_err) {
                            setError(UNKOWN_ERROR_MESSAGE);
                        }
                    }} variant={"outlined"}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default ChatListAdd;