// Layout for when a user logs into the application
import { AppBar, Box, Toolbar, Typography, Container, Button, Avatar, IconButton, MenuItem } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Calendar, ListTodo, Users, House } from 'lucide-react';
import { useState } from "react";
import Menu from '@mui/material/Menu';

export default function AppLayout() {
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
                <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' }}>
                    <Container maxWidth="x1">
                        <Toolbar sx={{ px: { xs: 0 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
                                <Button
                                    component={Link}
                                    to="/isajoasidji"
                                >
                                    Task Manager but Awesome
                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button
                                    component={Link}
                                    to="/"
                                    startIcon={<House />}
                                >
                                    Home
                                </Button>
                                <Button
                                    component={Link}
                                    to="/tasks"
                                    startIcon={<ListTodo />}
>
                                    Tasks
                                </Button>
                                <Button
                                    component={Link}
                                    to="/groups"
                                    startIcon={<Users />}
                                >
                                    Groups
                                </Button>
                                <Button
                                    component={Link}
                                    to="/calendar"
                                    startIcon={<Calendar />}
                                >
                                    Calendar
                                </Button>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar 
                                        src="public/golshi.png"
                                        sx={{ width: 32, height: 32 }}
                                    />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Outlet />
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    Profile
                </MenuItem>
            </Menu>
        </>
    );
}