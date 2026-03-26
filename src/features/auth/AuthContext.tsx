import { createContext } from "react";
import type { AuthState, Membership, User } from "./authTypes";

export type AuthContextValue = AuthState & {
    signIn: (user: User, membership: Membership) => void;
    signOut: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);