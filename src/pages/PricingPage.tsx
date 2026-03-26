import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function PricingPage() {
    return (
        <Container>
            <Section title="Membership plans" titleId="pricing-title">
                <p>Choose a plan to unlock more features and premium content.</p>

                <div className="card-grid">
                    <Card title="Free" titleId="plan-free-title">
                        <p>Basic access for signed-in users.</p>
                    </Card>

                    <Card title="Member" titleId="plan-member-title">
                        <p>Expanded access for standard membership content.</p>
                    </Card>

                    <Card title="Premium" titleId="plan-premium-title">
                        <p>Full access to premium content and protected areas.</p>
                    </Card>
                </div>

                <p className="section-callout">
                    This page is currently a placeholder. Later, this can become your real
                    checkout or subscription comparison page.
                </p>

                <Link to="/login">Go to login</Link>
            </Section>
        </Container>
    );
}