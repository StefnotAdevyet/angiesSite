import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { AuthContext } from "./AuthContext";
import type { Membership, User } from "./authTypes";

const AUTH_STORAGE_KEY = "template-site-auth";

type PersistedAuthState = {
    user: User | null;
    membership: Membership | null;
};

function readPersistedAuthState(): PersistedAuthState {
    try {
        const rawValue = localStorage.getItem(AUTH_STORAGE_KEY);

        if (!rawValue) {
            return {
                user: null,
                membership: null,
            };
        }

        const parsedValue = JSON.parse(rawValue) as PersistedAuthState;

        return {
            user: parsedValue.user ?? null,
            membership: parsedValue.membership ?? null,
        };
    } catch {
        return {
            user: null,
            membership: null,
        };
    }
}

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);
    const [membership, setMembership] = useState<Membership | null>(null);
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        const persistedState = readPersistedAuthState();

        setUser(persistedState.user);
        setMembership(persistedState.membership);
        setHasHydrated(true);
    }, []);

    const value = useMemo(() => {
        return {
            isAuthenticated: user !== null,
            user,
            membership,
            signIn: (nextUser: User, nextMembership: Membership) => {
                setUser(nextUser);
                setMembership(nextMembership);

                const persistedState: PersistedAuthState = {
                    user: nextUser,
                    membership: nextMembership,
                };

                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(persistedState));
            },
            signOut: () => {
                setUser(null);
                setMembership(null);
                localStorage.removeItem(AUTH_STORAGE_KEY);
            },
        };
    }, [user, membership]);

    if (!hasHydrated) {
        return null;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}