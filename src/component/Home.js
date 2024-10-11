import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, createUser, updateUser } from '../feature/userSlice';
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Modal,
} from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: null, username: '' });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleOpen = (user = { id: null, name: '' ,email:''}) => {
    setSelectedUser(user);
    setEditMode(!!user.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser({ id: null, name: '',email:'' });
  };

  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editMode) {
      dispatch(updateUser({ id: selectedUser.id, user: { name: selectedUser.name,email:selectedUser.email } }));
    } else {
      dispatch(createUser({ name: selectedUser.name,email:selectedUser.email }));
    }
    handleClose();
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        style={{ marginBottom: '1rem' }}
      >
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpen(user)}
                    style={{ marginRight: '0.5rem' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box
          component={Paper}
          p={4}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {editMode ? 'Edit User' : 'Add User'}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={selectedUser.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={selectedUser.email}
            onChange={handleChange}
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {editMode ? 'Update' : 'Add'}
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
