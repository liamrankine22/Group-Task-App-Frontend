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
        }
    ];

    const dueSoonTasks = Tasks.slice(0, 3);

export default function HomePage() {
    return (
        <>
            {/* Title text and subtitle */}
            <Container className="title-container">
                <Typography variant="h1">
                    Welcome to Your Group Workflow Organizer 👋
                </Typography>
                <Typography variant="subtitle1">
                    Stay organized and track your team's progress
                </Typography>
            </Container>

            {/* Due tasks overview */}
            <Box className="duetasks-container" sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Clock size={24} color="#6366f1"/>
                        <Typography  variant="h5" fontWeight="bold">
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

                <Box sx={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 3,}}>
                    {dueSoonTasks.map((task) => (
                        <div key={task.id}>
                            <TaskCard task={task}/>
                        </div>
                    ))}
                </Box>
            </Box>

            {/* Quick Stats */}
            <Box  sx={{ mt: 8, p: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 1, textAlign: 'center' }} className="quickstats-container">
                <Typography variant="h3">
                    Quick Stats
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3, flexWrap: 'wrap', gap: 3 }}>
                    <Box className="quickstats-total">
                        <Typography variant="h4">
                            5
                        </Typography>
                        <Typography variant="subtitle1">
                            Total Tasks
                        </Typography>
                    </Box>

                    <Box className="quickstats-inprogress">
                        <Typography variant="h4">
                            3
                        </Typography>
                        <Typography variant="subtitle1">
                            In Progress
                        </Typography>
                    </Box>

                    <Box className="quickstats-completed">
                        <Typography variant="h4">
                            1
                        </Typography>
                        <Typography variant="subtitle1">
                            Completed
                        </Typography>
                    </Box>

                    <Box className="quickstats-assigneduncompleted">
                        <Typography variant="h4">
                            10
                        </Typography>
                        <Typography variant="subtitle1">
                            Assigned Uncompleted Tasks
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}