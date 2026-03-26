import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { useAuth } from "../features/auth/useAuth";

export function PremiumPage() {
    const { user, membership } = useAuth();

    return (
        <Container>
            <Section title="Premium content" titleId="premium-title">
                <p>This page is protected and only available to premium members.</p>

                <p>
                    Signed in as: <strong>{user?.name}</strong>
                </p>

                <p>
                    Current membership: <strong>{membership?.tier}</strong>
                </p>
            </Section>
        </Container>
    );
}