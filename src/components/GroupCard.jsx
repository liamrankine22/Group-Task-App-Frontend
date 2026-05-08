import { Divider, Typography, Card, CardContent, Box, Avatar, Chip } from "@mui/material";
import { Users } from "lucide-react";

export default function GroupCard( { group })
{
    return(
        <Card
            sx={{
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                }
            }}
        >
            <Box
                sx={{
                    height: 8,
                    backgroundColor: group.color,
                }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            backgroundColor: `${group.color}20`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Users size={24} color={group.colour} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" fontWeight="bold">
                            {group.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {group.members.length} {group.members.length === 1 ? 'member' : 'members'}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {group.description}
                </Typography>

                <Divider sx={{ mb:2 }} />

                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
                    Team Members
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {group.members.map((member) => (
                        <Box
                            key={member.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 1.5,
                                borderRadius: 1,
                                backgroundColor: 'action.hover',
                                transition: 'background-color 0.2s',
                                '&:hover': {
                                    backgroundColor: 'action.selected',
                                }
                            }}
                        >
                            <Avatar
                                src={member.avatar}
                                sx={{ width: 40, height: 40 }}
                            >
                                {member.name.charAt(0)}
                            </Avatar>
                            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                <Typography variant="body2" fontWeight="medium" noWrap>
                                    {member.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" noWrap>
                                    {member.email}
                                </Typography>
                            </Box>
                            <Chip
                                label={member.role}
                                size="small"
                                sx={{
                                backgroundColor: `${group.color}20`,
                                color: group.color,
                                fontWeight: 500,
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}