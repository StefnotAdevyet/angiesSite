import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { useAuth } from "../features/auth/useAuth";

export function AccountPage() {
    const { isAuthenticated, user, membership, signOut } = useAuth();

    return (
        <Container>
            <Section title="Account" titleId="account-title">
                {isAuthenticated ? (
                    <>
                        <p>
                            Signed in as <strong>{user?.name}</strong> ({user?.email})
                        </p>
                        <p>
                            Membership tier: <strong>{membership?.tier}</strong>
                        </p>
                        <p>
                            Membership active: <strong>{membership?.isActive ? "Yes" : "No"}</strong>
                        </p>

                        <Button onClick={signOut}>Sign out</Button>
                    </>
                ) : (
                    <p>You are not currently signed in.</p>
                )}
            </Section>
        </Container>
    );
}