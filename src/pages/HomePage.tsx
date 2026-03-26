import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function HomePage() {
    return (
        <>
            <Container as="section" className="hero" aria-labelledby="home-hero-title">
                <div className="hero-layout">
                    <div className="hero-content">
                        <p className="eyebrow">Women&apos;s Health • Wellness • Care</p>
                        <span className="hero-accent">Nurtured</span>
                        <h1 id="home-hero-title">
                            Compassionate wellness support for every season of womanhood
                        </h1>
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
                <Section title="Ways we support women’s wellness" titleId="services-title">
                    <div className="card-grid">
                        <Card title="Hormonal health" titleId="service-hormonal-title">
                            <p>
                                Support for understanding symptoms, restoring balance, and creating
                                a plan that feels sustainable and personal.
                            </p>
                        </Card>

                        <Card title="Lifestyle and nutrition" titleId="service-lifestyle-title">
                            <p>
                                Guidance that helps connect daily habits, nourishment, and overall
                                wellbeing in a practical and compassionate way.
                            </p>
                        </Card>

                        <Card title="Whole-person wellness" titleId="service-wellness-title">
                            <p>
                                Care that considers physical, emotional, and lifestyle factors so
                                you can feel more supported in your health journey.
                            </p>
                        </Card>
                    </div>
                </Section>

                <Section className="feature-section" title="A thoughtful approach to care" titleId="about-practice-title">
                    <div className="feature-layout">
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

                        <div className="feature-content">
                            <p className="section-kicker">About the practice</p>
                            <h2 id="about-practice-title">Care rooted in clarity, compassion, and trust</h2>
                            <p>
                                This practice is centered on helping women feel seen, informed,
                                and supported. Every interaction is designed to feel calm,
                                respectful, and grounded in thoughtful care.
                            </p>
                            <p>
                                The goal is not just to provide guidance, but to create an
                                experience where clients feel comfortable asking questions,
                                understanding their options, and taking confident next steps.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Why clients choose this practice" titleId="why-choose-title">
                    <div className="value-grid">
                        <Card title="Warm, welcoming care" titleId="value-warm-title">
                            <p>
                                A supportive environment that helps clients feel comfortable,
                                respected, and at ease from the first conversation.
                            </p>
                        </Card>

                        <Card title="Clear guidance" titleId="value-guidance-title">
                            <p>
                                Information is shared in a way that feels understandable,
                                thoughtful, and empowering rather than overwhelming.
                            </p>
                        </Card>

                        <Card title="Personalized support" titleId="value-personalized-title">
                            <p>
                                Care is shaped around individual concerns, goals, and lived
                                experiences rather than a one-size-fits-all approach.
                            </p>
                        </Card>
                    </div>
                </Section>

                <Section className="testimonial-section" title="What the experience can feel like" titleId="testimonial-title">
                    <div className="testimonial-card">
                        <p className="testimonial-quote">
                            “The experience should feel calm, reassuring, and empowering —
                            a space where women feel cared for, informed, and genuinely supported.”
                        </p>
                        <p className="testimonial-attribution">A patient-centered philosophy</p>
                    </div>
                </Section>

                <Section className="cta-section" title="Ready to take the next step?" titleId="cta-title">
                    <div className="cta-card">
                        <div>
                            <p className="section-kicker">Get started</p>
                            <h2 id="cta-title">Book a consultation and share how we can support you</h2>
                            <p>
                                Begin with a simple intake form so the practice can better
                                understand your needs before reaching out.
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
        </>
    );
}