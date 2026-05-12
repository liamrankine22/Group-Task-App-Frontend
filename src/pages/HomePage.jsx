import { Link } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { ArrowRight, Clock } from 'lucide-react';
import TaskCard from "../components/TaskCard";

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
        },

        {
            id: 4,
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
        },

        {
            id: 5,
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

    const dueSoonTasks = Tasks.slice(0, 3);

export default function HomePage() {

    return (
        <Box sx={{ py: 6 }}>
             <Container maxWidth="xl">
                {/* Title text and subtitle */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom>
                        Welcome to Your Group Workflow Organizer 👋
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Stay organized and track your team's progress
                    </Typography>
                </Box>

                {/* Due tasks overview */}
                <Box sx={{ mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Clock size={24} color="#6366f1" />
                        <Typography variant="h5" fontWeight="bold">
                            Due Soon
                        </Typography>
                        </Box>
                        <Button
                            component={Link}
                            to="/tasks"
                            endIcon={<ArrowRight size={18} />}
                            sx={{ textTransform: 'none' }}
                        >
                        View All Tasks
                        </Button>
                    </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {dueSoonTasks.map((task) => (
                            <div key={task.id}>
                                <TaskCard task={task} />
                            </div>
                        ))}
                        </Box>
                    </Box>

                {/* Quick Stats */}
                <Box  sx={{ 
                    mt: 8,
                    p: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 1,
                    textAlign: 'center'
                }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Quick Stats
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3, flexWrap: 'wrap', gap: 3 }}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" color="primary">
                                5
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Tasks
                            </Typography>
                        </Box>

                        <Box className="quickstats-inprogress">
                            <Typography variant="h3" fontWeight="bold" color="warning">
                                3
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                In Progress
                            </Typography>
                        </Box>

                        <Box className="quickstats-completed">
                            <Typography variant="h3" fontWeight="bold" color="success">
                                1
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Completed
                            </Typography>
                        </Box>

                        <Box className="quickstats-assigneduncompleted">
                            <Typography variant="h3" fontWeight="bold" color="error">
                                10
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Assigned Uncompleted Tasks
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}