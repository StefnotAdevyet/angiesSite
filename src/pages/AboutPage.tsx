import { Container } from "../components/ui/Container";

export function AboutPage() {
    return (
        <Container as="section" className="page-section" aria-labelledby="about-title">
            <h1 id="about-title">About</h1>
            <p>
                This is the about page. We are wiring up real client-side routing.
            </p>
        </Container>
    );
}