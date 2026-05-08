// Layout for when a user logs into the application
import { AppBar, Box, Toolbar, Typography, Container, Button, Avatar, IconButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Calendar, ListTodo, Users } from 'lucide-react';

export default function AppLayout() {
    return(
        <>
            <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
                <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' }}>
                    <Toolbar sx={{ px: { xs: 0 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
                            <Button
                                component={Link}
                                to="/"
                            >
                                Title
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button
                                component={Link}
                                to="/tasks"
                            >
                                <ListTodo />
                                Tasks
                            </Button>
                            <Button
                                component={Link}
                                to="/groups"
                            >
                                <Users />
                                Groups
                            </Button>
                            <Button
                                component={Link}
                                to="/calendar"
                            >
                                <Calendar />
                                Calendar
                            </Button>
                            <IconButton>
                                <Avatar src="public/golshi.png"/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Outlet />
            </Box>
        </>
    );
}