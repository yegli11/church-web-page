'use client';

import FormField from '../../molecules/FormField/FormField';
import Button from '../../atoms/Button/Button';

interface ContactFormProps {
  formspreeEndpoint?: string;
  className?: string;
}

export default function ContactForm({ formspreeEndpoint, className = '' }: ContactFormProps) {
  const action = formspreeEndpoint ?? `mailto:church@example.com`;
  const method = formspreeEndpoint ? 'POST' : undefined;

  return (
    <form action={action} method={method} className={className}>
      <FormField id="name" name="name" label="Name" required placeholder="Your name" />
      <FormField id="email" name="email" label="Email" type="email" required placeholder="your@email.com" />
      <FormField id="phone" name="phone" label="Phone" type="tel" placeholder="+1 000 000 0000" />

      <div>
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" required rows={5} placeholder="Write your message here..." />
      </div>

      <Button type="submit" variant="primary">Send Message</Button>
    </form>
  );
}
