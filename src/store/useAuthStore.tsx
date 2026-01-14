import { create } from "zustand";
import { LoginUserData } from "@/types/User";

interface AuthStore {
    isLoggedIn: boolean;
    user: LoginUserData | null;
    
    login: (user: LoginUserData) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>((set)=>({
    isLoggedIn: false,
    user: null,
    login: (user: LoginUserData) => set({isLoggedIn: true, user}),
    logout: () => set({isLoggedIn: false, user: null})
}))