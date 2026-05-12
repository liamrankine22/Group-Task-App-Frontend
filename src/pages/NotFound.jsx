import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" fontWeight="bold" color="primary" sx={{ fontSize: '6rem' }}>
            404
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<Home size={20} />}
            sx={{ textTransform: 'none' }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
