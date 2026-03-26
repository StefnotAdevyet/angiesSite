import { useState, type FormEvent } from "react";
import { Button } from "../components/ui/Button";
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
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Placeholder submit behavior for now.
    // Later this can POST to your backend or form service.
    console.log("Submitted intake form:", formData);

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Container>
        <Section title="Thank you" titleId="intake-success-title">
          <p>
            Your consultation request has been received. Someone will follow up with you soon.
          </p>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section title="Consultation Intake" titleId="intake-title">
        <p>
          Please share a few details so we can better understand your needs and
          follow up with you.
        </p>

        <form className="intake-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="firstName">First name</label>
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
              <label htmlFor="lastName">Last name</label>
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
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
            </div>

            <div className="form-field">
              <label htmlFor="preferredContact">Preferred contact method</label>
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
              <label htmlFor="reasonForVisit">Reason for visit</label>
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
          </div>

          <div className="form-actions">
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </Section>
    </Container>
  );
}