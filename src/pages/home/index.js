import React, { useState, useEffect } from 'react';
import { useAuth } from '../../store/auth';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle,
    Box,
} from '@mui/material';

const UserTable = () => {
    const { profileState,
        userData,
        editId,
        setEditId,
        handleChange,
        getUser,
        addUser,
        updateUser,
        deleteUser,
        loading,
        error,
        errorState
    } = useAuth();

    console.log(errorState, "errorerrorerrorerrorerrorerror")

    const [open, setOpen] = useState(false);


    useEffect(() => {
        getUser();
    }, [getUser]);

    const handleOpen = (user = {}) => {
        setEditId(user.id || null);
        handleChange('name', user.name || '');
        handleChange('email', user.email || '');
        handleChange('age', user.age || '');
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        if (editId) {
            await updateUser(editId, profileState);
        } else {
            if (errorState) {
                alert(errorState)
            } else {
                await addUser(profileState);
            }
        }
        handleClose();
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
    };

    return (
        <Box>
            <TableContainer component={Paper} style={{
                marginTop: '20px', boxShadow: 'none',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData?.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>
                                    <Button color="primary" onClick={() => handleOpen(user)}>
                                        Edit
                                    </Button>
                                    <Button color="secondary" onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button style={{
                marginTop: '16px',
                display: 'grid',
                placeSelf: 'center'
            }} variant="contained" color="primary" onClick={() => handleOpen()}>
                Add User
            </Button>

         
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editId ? 'Edit User' : 'Add User'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="First Name"
                        name="name"
                        value={profileState?.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        name="email"
                        value={profileState?.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Age"
                        name="age"
                        type="number"
                        value={profileState?.age}
                        onChange={(e) => handleChange('age', e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {editId ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UserTable;
