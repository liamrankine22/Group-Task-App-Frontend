import { Card, CardContent, Typography, Chip, Box, IconButton, CardActions, Avatar } from "@mui/material";
import { CalendarClock, EllipsisVertical } from 'lucide-react';

export default function TaskCard({task})
{
    const getStatusColor = () => {
        switch (task.status) {
        case 'completed':
            return 'success';
        case 'in-progress':
            return 'primary';
        case 'todo':
            return '#ff9800'
        default:
            return 'default';
        }
    };
    
    const getStatusLabel = () => {
        switch (task.status) {
        case 'completed':
            return 'Completed';
        case 'in-progress':
            return 'In Progress';
        default:
            return 'To Do';
        }
    };

    return(
        <>
            <Card
            sx={{
                minWidth: 280,
                maxWidth: 350,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
                }
            }}
            >
                <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip label={getStatusLabel()} color={getStatusColor()} />
                            <Chip label={task.groupSummary?.name ?? "Error"} />
                        </Box>
                        <IconButton>
                            <EllipsisVertical />
                        </IconButton>
                    </Box>

                    <Typography variant="h6">
                        {task.title}
                    </Typography>

                    <Typography variant="body2">
                        {task.description}
                    </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar src="public/golshi.png" />
                        <Typography variant="body2" fontWeight="medium">
                            {task.assignmentSummary.assignedUsername}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                        <CalendarClock size={16} />
                        <Typography variant="caption">
                            {task.dueDate}
                        </Typography>
                    </Box>
                </CardActions>

            </Card>
        </>
    );
}