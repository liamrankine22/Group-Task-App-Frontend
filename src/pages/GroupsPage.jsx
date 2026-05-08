import { Container, Typography, Box, Grid, TextField, InputAdornment } from '@mui/material'
import GroupCard from '../components/GroupCard';
import { Search, Users } from 'lucide-react';
import { useState } from 'react';

const mockGroups = [
    {
    id: '1',
    name: 'Design Team',
    description: 'Responsible for UI/UX design, branding, and visual assets',
    color: '#ec4899',
    members: [
      {
        id: '1',
        name: 'Sarah Chen',
        role: 'Lead Designer',
        email: 'sarah.chen@company.com',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      {
        id: '2',
        name: 'Olivia Martinez',
        role: 'UX Researcher',
        email: 'olivia.martinez@company.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      {
        id: '3',
        name: 'David Park',
        role: 'UI Designer',
        email: 'david.park@company.com',
        avatar: 'https://i.pravatar.cc/150?img=7',
      },
    ],
  },
  {
    id: '2',
    name: 'Engineering Team',
    description: 'Backend, frontend, and infrastructure development',
    color: '#3b82f6',
    members: [
      {
        id: '4',
        name: 'Marcus Johnson',
        role: 'Tech Lead',
        email: 'marcus.johnson@company.com',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      {
        id: '5',
        name: 'Emma Davis',
        role: 'Backend Engineer',
        email: 'emma.davis@company.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      {
        id: '6',
        name: 'James Wilson',
        role: 'DevOps Engineer',
        email: 'james.wilson@company.com',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
      {
        id: '7',
        name: 'Lisa Anderson',
        role: 'Frontend Engineer',
        email: 'lisa.anderson@company.com',
        avatar: 'https://i.pravatar.cc/150?img=9',
      },
    ],
  },
  {
    id: '3',
    name: 'Product Team',
    description: 'Product strategy, roadmap planning, and feature prioritization',
    color: '#10b981',
    members: [
      {
        id: '8',
        name: 'Alex Rivera',
        role: 'Product Manager',
        email: 'alex.rivera@company.com',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
      {
        id: '9',
        name: 'Rachel Kim',
        role: 'Product Analyst',
        email: 'rachel.kim@company.com',
        avatar: 'https://i.pravatar.cc/150?img=8',
      },
    ],
  },
  {
    id: '4',
    name: 'Marketing Team',
    description: 'Content creation, campaigns, and brand management',
    color: '#f59e0b',
    members: [
      {
        id: '10',
        name: 'Michael Brown',
        role: 'Marketing Director',
        email: 'michael.brown@company.com',
        avatar: 'https://i.pravatar.cc/150?img=10',
      },
      {
        id: '11',
        name: 'Jennifer Lee',
        role: 'Content Strategist',
        email: 'jennifer.lee@company.com',
        avatar: 'https://i.pravatar.cc/150?img=11',
      },
      {
        id: '12',
        name: 'Tom Garcia',
        role: 'Social Media Manager',
        email: 'tom.garcia@company.com',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
    ],
  },
  {
    id: '5',
    name: 'Quality Assurance',
    description: 'Testing, quality control, and bug tracking',
    color: '#8b5cf6',
    members: [
      {
        id: '13',
        name: 'Sophie Turner',
        role: 'QA Lead',
        email: 'sophie.turner@company.com',
        avatar: 'https://i.pravatar.cc/150?img=13',
      },
      {
        id: '14',
        name: 'Chris Evans',
        role: 'QA Engineer',
        email: 'chris.evans@company.com',
        avatar: 'https://i.pravatar.cc/150?img=14',
      },
    ],
  },
  {
    id: '6',
    name: 'Customer Success',
    description: 'Customer support, onboarding, and relationship management',
    color: '#06b6d4',
    members: [
      {
        id: '15',
        name: 'Amanda White',
        role: 'CS Manager',
        email: 'amanda.white@company.com',
        avatar: 'https://i.pravatar.cc/150?img=15',
      },
      {
        id: '16',
        name: 'Daniel Miller',
        role: 'Support Specialist',
        email: 'daniel.miller@company.com',
        avatar: 'https://i.pravatar.cc/150?img=16',
      },
      {
        id: '17',
        name: 'Nina Patel',
        role: 'Onboarding Specialist',
        email: 'nina.patel@company.com',
        avatar: 'https://i.pravatar.cc/150?img=17',
      },
    ],
  },
];

export default function GroupsPage()
{

    const [searchQuery, setSearchQuery] = useState("");

    const filteredGroups = mockGroups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.members.some(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const totalMembers = mockGroups.reduce((acc, group) => acc + group.members.length, 0);

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                        Teams & Groups
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage your organization's teams and members
                    </Typography>
                </Box>

                <Box sx={{ mb: 4, display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
                    <TextField
                        placeholder="Search groups or members..."
                        variant="outlined"
                        size="medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{ flexGrow: 1, maxWidth: 500 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                <Users size={20} color="#6366f1" />
                                <Typography variant="h5" fontWeight="bold" color="primary">
                                    {mockGroups.length}
                                </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                Teams
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" fontWeight="bold" color="primary">
                                {totalMembers}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Total Members
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            <Grid container spacing={3}>
                {filteredGroups.map((group) => (
                    <Grid item xs={12} md={6} lg={4} key={group.id}>
                        <GroupCard group={group} />
                    </Grid>
                ))}
            </Grid>

            {filteredGroups.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        No groups found matching "{searchQuery}"
                    </Typography>
                </Box>
            )}
        </Container>
    </Box>
    );
}