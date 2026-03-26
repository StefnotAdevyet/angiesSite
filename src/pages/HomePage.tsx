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
                        <p className="eyebrow">Accessible • Modular • Modern</p>
                        <h1 id="home-hero-title">A clean starting point for your website</h1>
                        <p className="hero-copy">
                            This site is being built step by step with React, TypeScript, and
                            accessibility in mind from the beginning.
                        </p>

                        <div className="hero-actions">
                            <Button>Get Started</Button>
                        </div>
                    </div>
                    <div className="hero-visual" aria-hidden="true">
                        <div className="hero-visual-card">
                            <p className="hero-visual-label">Preview</p>
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
                <Section title="What this project is focused on" titleId="focus-title">
                    <p>
                        The goal is to create a modular website foundation with reusable
                        components, accessible markup, and a structure that can grow without
                        becoming messy.
                    </p>
                </Section>

                <Section title="Core strengths" titleId="strengths-title">
                    <div className="card-grid">
                        <Card title="Modular by default" titleId="card-modular-title">
                            <p>
                                Components are split into reusable building blocks so the site
                                can grow without turning into a pile of duplicated code.
                            </p>
                        </Card>

                        <Card title="Accessibility first" titleId="card-accessibility-title">
                            <p>
                                Semantic HTML, keyboard support, focus states, and clear page
                                structure are considered from the start rather than patched in later.
                            </p>
                        </Card>

                        <Card title="Easy to extend" titleId="card-extend-title">
                            <p>
                                The structure is simple enough to understand quickly, but strong
                                enough to support additional pages, sections, and reusable UI.
                            </p>
                        </Card>
                    </div>
                </Section>
            </Container>
        </>
    );
}