import axios from "axios";
import { create } from "zustand";

export const useAuth = create((set, get) => ({
    profileState: {
        name: '',
        email: '',
        age: ''
    },
    userData: [],
    open: false,
    loading: false,
    error: null,
    errorState: '',
    editId: null,


    handleChange: (key, value) => {
        set((state) => ({
            profileState: {
                ...state.profileState,
                [key]: value,
            },
        }));
    },


    setEditId: (id) => {
        set(() => ({
            editId: id
        }));
    },

    getUser: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            set({ userData: response.data, loading: false });
        } catch (error) {
            set({ error: 'Failed to fetch user data', loading: false });
        }
    },

    addUser: async (newUser) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post('http://localhost:5000/api/users', newUser);
            set((state) => ({
                userData: [...state.userData, response.data],
                loading: false
            }));
        } catch (error) {
            set({ errorState: error?.response?.data?.message, loading: false });
        }
    },

    updateUser: async (id, updatedUser) => {
        set({ loading: true, error: null });

        try {
            await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);

            set((state) => {
                const updatedUsers = state?.userData?.map((user) =>
                    user?.id === id ? { ...user, ...updatedUser } : user
                );
                return {
                    userData: updatedUsers,
                    loading: false,
                };
            });
        } catch (error) {
            set({
                error: 'Failed to update user',
                loading: false,
            });
        }
    },

    deleteUser: async (id) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            set((state) => ({
                userData: state?.userData?.filter(user => user.id !== id),
                loading: false
            }));
        } catch (error) {
            set({ error: 'Failed to delete user', loading: false });
        }
    }
}));
