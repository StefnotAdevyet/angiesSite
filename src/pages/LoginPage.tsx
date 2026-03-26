import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { useAuth } from "../features/auth/useAuth";
import type { MembershipTier } from "../features/auth/authTypes";

export function LoginPage() {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    function handleSignIn(tier: MembershipTier) {
        signIn(
            {
                id: "user_1",
                email: "demo@example.com",
                name: "Demo User",
            },
            {
                tier,
                isActive: true,
            }
        );

        navigate("/account");
    }

    return (
        <Container>
            <Section title="Login" titleId="login-title">
                <p>
                    This is a mocked login page for now. Pick a membership tier to simulate
                    different user access levels.
                </p>

                <div className="button-row">
                    <Button onClick={() => handleSignIn("free")}>Sign in as Free User</Button>
                    <Button onClick={() => handleSignIn("member")}>Sign in as Member</Button>
                    <Button onClick={() => handleSignIn("premium")}>Sign in as Premium</Button>
                </div>
            </Section>
        </Container>
    );
}