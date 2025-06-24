import React, {useState} from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useLogout} from "../../hooks/useLogout.ts";
import {onLogout} from "../../utils/logout.ts";


const Settings = () => {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { logout } = useLogout()


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                    <MenuItem key={'logout'} onClick={async () => {
                        await logout();
                        onLogout();
                        handleCloseUserMenu();
                    }}>
                        <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                    </MenuItem>
            </Menu>
        </Box>
    );
};

export default Settings;