export type MembershipTier = "free" | "member" | "premium";

export type User = {
    id: string;
    email: string;
    name: string;
};

export type Membership = {
    tier: MembershipTier;
    isActive: boolean;
};

export type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
    membership: Membership | null;
};