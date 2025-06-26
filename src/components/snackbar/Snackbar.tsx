import {Alert, Snackbar as MUISnackbar} from "@mui/material";
import {type SyntheticEvent} from "react";
import {useReactiveVar} from "@apollo/client";
import {snackVar} from "../../constants/snack.ts";

const  AutohideSnackbar = () =>  {
    const snack = useReactiveVar(snackVar);


    const handleClose = (
        _event?: SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        snackVar(undefined);
    };

    return (<>
        {snack && (
            <MUISnackbar open={!!snack} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={snack.type}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snack.message}
                </Alert>
            </MUISnackbar>
        )}
        </>);
}

export default AutohideSnackbar;