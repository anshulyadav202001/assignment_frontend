import React from 'react';
import { Box, Grid, TextField, Button, Typography, Paper, Avatar } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const Register = () => {
  return (
    <Grid
      container
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6E8EF7, #A7BFE8)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={10} sm={8} md={4}>
        <Paper elevation={10} style={{ padding: '2rem', borderRadius: '1rem' }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={2}
          >
            <Avatar style={{ backgroundColor: '#3f51b5', marginBottom: '1rem' }}>
              <PersonAddOutlinedIcon />
            </Avatar>
            <Typography variant="h5" align="center" gutterBottom>
              Register
            </Typography>
          </Box>
          <Box component="form" noValidate>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              variant="outlined"
              type="text"
              required
              autoComplete="username"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              variant="outlined"
              type="email"
              required
              autoComplete="email"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              required
              autoComplete="new-password"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm Password"
              variant="outlined"
              type="password"
              required
              autoComplete="new-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: '#3f51b5',
                color: '#ffffff',
              }}
            >
              Register
            </Button>
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: '1rem', color: '#555' }}
            >
              Already have an account?{' '}
              <a href="/login" style={{ color: '#3f51b5', textDecoration: 'none' }}>
                Login
              </a>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
