import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import type { MembershipTier } from "../auth/authTypes";

type ProtectedRouteProps = PropsWithChildren<{
    requireAuth?: boolean;
    requiredTier?: MembershipTier;
}>;

function hasRequiredTier(
    currentTier: MembershipTier | undefined,
    requiredTier: MembershipTier
) {
    if (!currentTier) {
        return false;
    }

    const rank: Record<MembershipTier, number> = {
        free: 0,
        member: 1,
        premium: 2,
    };

    return rank[currentTier] >= rank[requiredTier];
}

export function ProtectedRoute({
    children,
    requireAuth = true,
    requiredTier,
}: ProtectedRouteProps) {
    const { isAuthenticated, membership } = useAuth();

    if (requireAuth && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requiredTier) {
        const hasAccess =
            membership?.isActive === true &&
            hasRequiredTier(membership.tier, requiredTier);

        if (!hasAccess) {
            return <Navigate to="/pricing" replace />;
        }
    }

    return <>{children}</>;
}