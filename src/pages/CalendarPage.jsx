import { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar, Chip, LinearProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { CalendarDays, TrendingUp } from 'lucide-react';
import { format, parseISO, isSameDay } from 'date-fns';

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

const mockTasks = [
  {
    id: '1',
    title: 'Design Homepage Mockup',
    description: 'Create wireframes and high-fidelity mockups for the new homepage redesign',
    assignee: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    dueDate: 'May 12, 2026',
    progress: 75,
    status: 'in-progress',
    group: {
      name: 'Design Team',
      color: '#ec4899',
    },
  },
  {
    id: '2',
    title: 'Implement Authentication',
    description: 'Set up user authentication system with OAuth and email/password login',
    assignee: {
      name: 'Marcus Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    dueDate: 'May 10, 2026',
    progress: 100,
    status: 'completed',
    group: {
      name: 'Engineering Team',
      color: '#3b82f6',
    },
  },
  {
    id: '3',
    title: 'Database Schema Design',
    description: 'Design and implement the database schema for user management and tasks',
    assignee: {
      name: 'Emma Davis',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    dueDate: 'May 15, 2026',
    progress: 45,
    status: 'in-progress',
    group: {
      name: 'Engineering Team',
      color: '#3b82f6',
    },
  },
  {
    id: '4',
    title: 'Write API Documentation',
    description: 'Document all REST API endpoints with examples and response formats',
    assignee: {
      name: 'Alex Rivera',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    dueDate: 'May 18, 2026',
    progress: 20,
    status: 'in-progress',
    group: {
      name: 'Product Team',
      color: '#10b981',
    },
  },
  {
    id: '5',
    title: 'User Testing Session',
    description: 'Conduct user testing sessions and gather feedback on new features',
    assignee: {
      name: 'Olivia Martinez',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    dueDate: 'May 22, 2026',
    progress: 0,
    status: 'todo',
    group: {
      name: 'Design Team',
      color: '#ec4899',
    },
  },
  {
    id: '6',
    title: 'Performance Optimization',
    description: 'Optimize application performance and reduce load times',
    assignee: {
      name: 'James Wilson',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    dueDate: 'May 25, 2026',
    progress: 30,
    status: 'in-progress',
    group: {
      name: 'Engineering Team',
      color: '#3b82f6',
    },
  },
  {
    id: '7',
    title: 'Mobile App Design Review',
    description: 'Review and finalize mobile app design with stakeholders',
    assignee: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    dueDate: 'May 14, 2026',
    progress: 60,
    status: 'in-progress',
    group: {
      name: 'Design Team',
      color: '#ec4899',
    },
  },
  {
    id: '8',
    title: 'Security Audit',
    description: 'Conduct comprehensive security audit of the platform',
    assignee: {
      name: 'Marcus Johnson',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    dueDate: 'May 20, 2026',
    progress: 15,
    status: 'in-progress',
    group: {
      name: 'Engineering Team',
      color: '#3b82f6',
    },
  },
];

export default function CalendarPage()
{
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const parseDateString = (dateString) => {
        return new Date(dateString);
    };

    const getTasksForDate = (date) => {
        return mockTasks.filter(task => {
            const taskDate = parseDateString(task.dueDate);
            return isSameDay(taskDate, date);
        });
    };

    const getDatesWithTasks = () => {
        return mockTasks.map(task => parseDateString(task.dueDate));
    };

    const selectedDateTasks = getTasksForDate(selectedDate);
    const datesWithTasks = getDatesWithTasks();

    const getStatusColour = (status) => {
        switch(status) {
            case 'completed':
                return 'success';
            case 'in-progress':
                return 'primary';
            default:
                return 'default';
        };
    };

    const getStatusLabel = (status) => {
        switch(status) {
            case 'completed':
                return 'Completed';
            case 'in-progress':
                return 'In Progress';
            default:
                return 'To Do';
        }
    };
    
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            Task Calendar
          </Typography>
          <Typography variant="body1" color="text.secondary">
            View and manage tasks by their due dates
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5} lg={4}>
            <Card sx={{ position: 'sticky', top: 20 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <CalendarDays size={24} color="#6366f1" />
                  <Typography variant="h6" fontWeight="bold">
                    Select Date
                  </Typography>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(newDate) => newDate && setSelectedDate(newDate)}
                    slotProps={{
                      day: (dayProps) => {
                        const hasTask = datesWithTasks.some(taskDate =>
                          isSameDay(taskDate, dayProps.day)
                        );
                        return {
                          sx: {
                            position: 'relative',
                            ...(hasTask && {
                              fontWeight: 'bold',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 4,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: '#6366f1',
                              },
                            }),
                          },
                        };
                      },
                    }}
                    sx={{
                      width: '100%',
                      '& .MuiPickersCalendarHeader-root': {
                        paddingLeft: 1,
                        paddingRight: 1,
                      },
                      '& .MuiDayCalendar-header': {
                        justifyContent: 'space-between',
                      },
                      '& .MuiPickersDay-root': {
                        '&.Mui-selected': {
                          backgroundColor: '#6366f1',
                          '&:hover': {
                            backgroundColor: '#5558e3',
                          },
                          '&::after': {
                            backgroundColor: 'white !important',
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
                <Box sx={{ mt: 3, p: 2, backgroundColor: '#f8fafc', borderRadius: 1 }}>
                  <Typography variant="caption" fontWeight="bold" display="block" gutterBottom>
                    Upcoming Tasks
                  </Typography>
                  {datesWithTasks.slice(0, 5).map((date, index) => {
                    const tasksOnDate = getTasksForDate(date);
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          py: 0.5,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {format(date, 'MMM d')}
                        </Typography>
                        <Chip
                          label={tasksOnDate.length}
                          size="small"
                          sx={{ height: 20, fontSize: '0.7rem' }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedDateTasks.length} {selectedDateTasks.length === 1 ? 'task' : 'tasks'} due on this date
              </Typography>
            </Box>

            {selectedDateTasks.length === 0 ? (
              <Card>
                <CardContent sx={{ py: 8, textAlign: 'center' }}>
                  <CalendarDays size={48} color="#cbd5e1" style={{ marginBottom: 16 }} />
                  <Typography variant="h6" color="text.secondary">
                    No tasks due on this date
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Select another date to view tasks
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {selectedDateTasks.map((task) => (
                  <Card
                    key={task.id}
                    sx={{
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateX(4px)',
                        boxShadow: 4,
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip
                          label={getStatusLabel(task.status)}
                          color={getStatusColour(task.status)}
                          size="small"
                        />
                        <Chip
                          label={task.group.name}
                          size="small"
                          sx={{
                            backgroundColor: `${task.group.color}20`,
                            color: task.group.color,
                            fontWeight: 500,
                          }}
                        />
                      </Box>

                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {task.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {task.description}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TrendingUp size={16} />
                            <Typography variant="caption" color="text.secondary">
                              Progress
                            </Typography>
                          </Box>
                          <Typography variant="caption" fontWeight="medium">
                            {task.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={task.progress}
                          sx={{ height: 6, borderRadius: 1 }}
                        />
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          src={task.assignee.avatar}
                          sx={{ width: 32, height: 32 }}
                        >
                          {task.assignee.name.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" fontWeight="medium">
                          {task.assignee.name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}