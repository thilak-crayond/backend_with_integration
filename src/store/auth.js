import { create } from "zustand";

export const useAuth = create((set, get) => ({
    profileState: {
        mobile_no: '',
        password: '',
    },


    handleChange: (key, value) => {
        debugger
        set((state) => ({
            profileState: {
                ...state.profileState,
                [key]: value,
            },
        }));
    },
}))