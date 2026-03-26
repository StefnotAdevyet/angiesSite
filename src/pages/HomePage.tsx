import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";
import { Section } from "../components/ui/Section";

export function HomePage() {
    return (
        <>
            <Container as="section" className="hero" aria-labelledby="home-hero-title">
                <div className="hero-layout">
                    <div className="hero-content">
                        <p className="eyebrow">Women&apos;s Health • Wellness • Care</p>
                        <span className="hero-accent">Nurtured</span>
                        <h1 id="home-hero-title">Compassionate wellness support for every season of womanhood</h1>
                        <p className="hero-copy">
                            Thoughtful, supportive care designed to help women feel informed,
                            empowered, and well through every stage of their health journey.
                        </p>

                        <div className="hero-actions">
                            <Link to="/intake" className="button-link">
                                <Button>Book a Consultation</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual" aria-hidden="true">
                        <div className="hero-visual-card">
                            <p className="hero-visual-label">Wellness Approach</p>
                            <div className="hero-visual-lines">
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className="hero-visual-grid">
                                <div />
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <Section title="A thoughtful approach to care" titleId="focus-title">
                    <p>
                        This practice is centered on whole-person wellness, clear guidance,
                        and supportive care that helps women feel seen, informed, and cared for.
                    </p>
                </Section>

                <Section title="What clients can expect" titleId="strengths-title">
                    <div className="card-grid">
                        <Card title="Personalized support" titleId="card-support-title">
                            <p>
                                Care and guidance tailored to individual needs, concerns, and goals.
                            </p>
                        </Card>

                        <Card title="A calm, welcoming experience" titleId="card-calm-title">
                            <p>
                                An environment designed to feel reassuring, respectful, and easy to navigate.
                            </p>
                        </Card>

                        <Card title="Trusted wellness guidance" titleId="card-guidance-title">
                            <p>
                                Clear next steps, thoughtful recommendations, and care grounded in trust.
                            </p>
                        </Card>
                    </div>
                </Section>
            </Container>
        </>
    );
}