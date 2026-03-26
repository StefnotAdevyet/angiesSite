import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";

type IntakeFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    preferredContact: string;
    reasonForVisit: string;
    message: string;
};

const initialFormData: IntakeFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    reasonForVisit: "",
    message: "",
};

export function IntakePage() {
    const [formData, setFormData] = useState<IntakeFormData>(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        setFormData((currentValue) => ({
            ...currentValue,
            [name]: value,
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("Submitted intake form:", formData);

        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return (
            <Container>
                <Section title="Thank you" titleId="intake-success-title">
                    <Card className="success-card">
                        <p className="success-kicker">Request received</p>
                        <h3 className="success-title">We’re looking forward to connecting with you</h3>
                        <p>
                            Your consultation request has been received. Someone from the practice
                            will follow up with you soon using your preferred contact method.
                        </p>

                        <div className="button-row">
                            <Link to="/" className="button-link">
                                <Button variant="secondary">Back to Home</Button>
                            </Link>
                        </div>
                    </Card>
                </Section>
            </Container>
        );
    }

    return (
        <Container>
            <Section title="Consultation Intake" titleId="intake-title">
                <Card className="intake-intro-card">
                    <p className="form-kicker">Getting started</p>
                    <h3 className="intake-intro-title">Tell us a little about yourself</h3>
                    <p>
                        Please share a few details so we can better understand your needs and
                        follow up with you thoughtfully.
                    </p>
                </Card>

                <form className="intake-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-grid">
                        <div className="form-field">
                            <label htmlFor="firstName">
                                First name <span className="required-indicator">*</span>
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">
                                Last name <span className="required-indicator">*</span>
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">
                                Email address <span className="required-indicator">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <p className="field-help">
                                We’ll use this to follow up about your consultation request.
                            </p>
                        </div>

                        <div className="form-field">
                            <label htmlFor="phone">Phone number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <p className="field-help">
                                Optional, unless phone is your preferred contact method.
                            </p>
                        </div>

                        <div className="form-field">
                            <label htmlFor="preferredContact">
                                Preferred contact method <span className="required-indicator">*</span>
                            </label>
                            <select
                                id="preferredContact"
                                name="preferredContact"
                                value={formData.preferredContact}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="reasonForVisit">
                                Reason for visit <span className="required-indicator">*</span>
                            </label>
                            <select
                                id="reasonForVisit"
                                name="reasonForVisit"
                                value={formData.reasonForVisit}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="general-wellness">General wellness support</option>
                                <option value="hormonal-health">Hormonal health</option>
                                <option value="nutrition-lifestyle">Nutrition and lifestyle</option>
                                <option value="consultation">Initial consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">How can we support you?</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share any context you’d like us to know before reaching out."
                        />
                        <p className="field-help">
                            You can include any goals, questions, or concerns you’d like to discuss.
                        </p>
                    </div>

                    <p className="form-note">
                        Fields marked with <span className="required-indicator">*</span> are required.
                    </p>

                    <div className="form-actions">
                        <Button type="submit">Submit Request</Button>
                        <Link to="/" className="button-link">
                            <Button variant="secondary" type="button">
                                Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </Section>
        </Container>
    );
}