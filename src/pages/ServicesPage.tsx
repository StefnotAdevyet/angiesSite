import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

export function ServicesPage() {
    return (
        <Container>
            <Section className="services-hero" title="Services" titleId="services-page-title">
                <p className="section-kicker">Support tailored to women’s wellness</p>
                <p className="services-lead">
                    Care is designed to support women with thoughtful guidance, a whole-person
                    perspective, and a clear path forward.
                </p>
            </Section>

            <Section title="Areas of support" titleId="services-grid-title">
                <div className="card-grid">
                    <Card title="Hormonal health support" titleId="service-hormonal-health-title">
                        <p>
                            Guidance for women seeking support around hormonal balance, symptoms,
                            and sustainable next steps.
                        </p>
                    </Card>

                    <Card title="Lifestyle and nutrition guidance" titleId="service-lifestyle-guidance-title">
                        <p>
                            Practical support that connects nourishment, daily habits, and
                            overall wellbeing in a realistic, personalized way.
                        </p>
                    </Card>

                    <Card title="General wellness consultations" titleId="service-general-wellness-title">
                        <p>
                            A place to begin for women who want a broader conversation about
                            their health, concerns, and care goals.
                        </p>
                    </Card>

                    <Card title="Personalized care planning" titleId="service-care-planning-title">
                        <p>
                            Thoughtful recommendations shaped around your needs, priorities,
                            and health journey.
                        </p>
                    </Card>

                    <Card title="Ongoing wellness support" titleId="service-ongoing-support-title">
                        <p>
                            Continued guidance for women looking for encouragement, accountability,
                            and a more supported path forward.
                        </p>
                    </Card>

                    <Card title="Whole-person care" titleId="service-whole-person-title">
                        <p>
                            Care that considers the physical, emotional, and lifestyle factors
                            that all work together in overall wellness.
                        </p>
                    </Card>
                </div>
            </Section>

            <Section className="feature-section" title="What working together can look like" titleId="services-process-title">
                <div className="feature-layout">
                    <div className="feature-content">
                        <p>
                            The process begins with understanding your concerns, goals, and
                            current experience. From there, care is approached with clarity,
                            support, and respect for your individual needs.
                        </p>
                        <p>
                            The aim is to help you feel informed and empowered, with practical
                            next steps that feel manageable and aligned with your wellbeing.
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

            <Section className="cta-section" title="Interested in learning more?" titleId="services-cta-title">
                <div className="cta-card">
                    <div>
                        <p className="section-kicker">Next step</p>
                        <h2 id="services-cta-title">Request a consultation to get started</h2>
                        <p>
                            Complete the intake form and share a few details so the practice
                            can better understand how to support you.
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