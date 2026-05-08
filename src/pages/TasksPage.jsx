import { Tab, Tabs, Typography, Box, Grid, Container } from "@mui/material";
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTaskCard from "../components/AddTaskCard";

const Tasks = [
        {
            id: 1,
            title: "Design Homepage Mockup",
            description: "Create wireframes and high-fidelity mockups for the new homepage redesign",
            status: "in-progress",
            dueDate: "2026-05-07",
            createdDate: "2026-03-07",
            createdById: 1,
            groupSummary: {
                id: 1,
                name: "Design Team",
            },
            assignmentSummary: {
                id: 1,
                assignedUserId: 1,
                assignedUsername: "Gold Ship",
                taskId: 1,
                assignedAt: "2026-03-07"
            }
        },

        {
            id: 2,
            title: "Build Authentication System",
            description: "Implement login, registration, and JWT-based authentication for the app",
            status: "todo",
            dueDate: "2026-05-10",
            createdDate: "2026-03-08",
            createdById: 2,
            groupSummary: {
                id: 2,
                name: "Backend Team",
            },
            assignmentSummary: {
                id: 2,
                assignedUserId: 2,
                assignedUsername: "Silver Wolf",
                taskId: 2,
                assignedAt: "2026-03-08"
            }
        },

        {
            id: 3,
            title: "Setup Database Schema",
            description: "Design and implement PostgreSQL schema for users, tasks, and groups",
            status: "completed",
            dueDate: "2026-04-30",
            createdDate: "2026-03-01",
            createdById: 3,
            groupSummary: {
                id: 3,
                name: "Database Team",
            },
            assignmentSummary: {
                id: 3,
                assignedUserId: 3,
                assignedUsername: "Mejiro McQueen",
                taskId: 3,
                assignedAt: "2026-03-01"
            }
        }
    ];

export default function TasksPage()
{
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (_event, newValue) => {
        setActiveTab(newValue);
    };

    const handleAddTask = () => {
        console.log("Add new task functionality here");
    };

    const filterTasks = () => {
        switch(activeTab) {
            case 1:
                return Tasks.filter(task => task.status === "in-progress");
            case 2:
                return Tasks.filter(task => task.status === "completed");
            case 3:
                return Tasks.filter(task => task.status === "todo");
            default:
                return Tasks;
        }
    };

    const filteredTasks = filterTasks()

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="x1">
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                        All Tasks
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage and track all your team's tasks
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                            }
                        }}
                    >
                        <Tab label = {`All Tasks (${Tasks.length})`} />
                        <Tab label = {`In Progress (${Tasks.filter(t => t.status === 'in-progress').length})`} />
                        <Tab label = {`Completed (${Tasks.filter(t => t.status === 'completed').length})`} />
                        <Tab label={`To Do (${Tasks.filter(t => t.status === 'todo').length})`} />
                    </Tabs>
                </Box>

                <Grid container spacing={3}>
                    {filteredTasks.map((task) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                            <TaskCard task={task} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AddTaskCard onClick={handleAddTask} />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}