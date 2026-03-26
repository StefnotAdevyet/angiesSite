import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function AboutPage() {
    return (
        <Container>
            <Section className="about-hero" title="About the Practice" titleId="about-title">
                <p className="section-kicker">Compassionate, informed care</p>
                <p className="about-lead">
                    This practice is rooted in the belief that women deserve care that feels
                    supportive, clear, and deeply respectful of their individual experiences.
                </p>
            </Section>

            <Section className="feature-section" title="A philosophy centered on the whole person" titleId="philosophy-title">
                <div className="feature-layout">
                    <div className="feature-content">
                        <p>
                            Wellness is rarely one-dimensional. Thoughtful care considers the
                            many factors that shape how someone feels day to day — physical
                            health, emotional wellbeing, lifestyle, stress, and personal goals.
                        </p>
                        <p>
                            The intention is to create a space where women feel heard, informed,
                            and empowered to take meaningful next steps in their care with clarity
                            and confidence.
                        </p>
                    </div>

                    <div className="feature-visual" aria-hidden="true">
                        <div className="feature-panel">
                            <div className="feature-panel-line short" />
                            <div className="feature-panel-line medium" />
                            <div className="feature-panel-line long" />
                            <div className="feature-panel-blocks">
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="What guides the experience" titleId="values-title">
                <div className="value-grid">
                    <Card title="Clarity" titleId="value-clarity-title">
                        <p>
                            Information and guidance should feel understandable, practical, and
                            empowering.
                        </p>
                    </Card>

                    <Card title="Compassion" titleId="value-compassion-title">
                        <p>
                            Care should feel human, supportive, and attentive to each client’s
                            lived experience.
                        </p>
                    </Card>

                    <Card title="Trust" titleId="value-trust-title">
                        <p>
                            A strong care relationship begins with respect, transparency, and
                            thoughtful communication.
                        </p>
                    </Card>
                </div>
            </Section>

            <Section className="cta-section" title="Ready to begin?" titleId="about-cta-title">
                <div className="cta-card">
                    <div>
                        <p className="section-kicker">Next step</p>
                        <h2 id="about-cta-title">Share your information and request a consultation</h2>
                        <p>
                            Complete the intake form to begin the conversation and help the
                            practice better understand your needs.
                        </p>
                    </div>

                    <div className="cta-actions">
                        <Link to="/intake" className="button-link">
                            <Button>Book a Consultation</Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </Container>
    );
}