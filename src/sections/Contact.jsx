import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { profile } from '../data/portfolio.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isDevelopment = import.meta.env.DEV;

const getEmailConfig = () => ({
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim(),
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
});

const getMissingEmailConfig = (config) =>
  [
    ['service ID', config.serviceId],
    ['template ID', config.templateId],
    ['public key', config.publicKey],
  ]
    .filter(([, value]) => !value)
    .map(([label]) => label);

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [sending, setSending] = useState(false);
  const fallbackMessage = `Message could not be sent. Please use Gmail to connect: ${profile.email}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const form = formRef.current;
    const formData = new FormData(form);
    const fromName = String(formData.get('from_name') || '').trim();
    const fromEmail = String(formData.get('from_email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!fromName || !fromEmail || !message) {
      setStatus({ type: 'error', message: 'Please complete all fields before sending.' });
      return;
    }

    if (!emailPattern.test(fromEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    const emailConfig = getEmailConfig();
    const missingConfig = getMissingEmailConfig(emailConfig);

    console.log('Service:', emailConfig.serviceId);
    console.log('Template:', emailConfig.templateId);

    if (missingConfig.length > 0) {
      setStatus({
        type: 'error',
        message: `${fallbackMessage}. Missing EmailJS ${missingConfig.join(', ')}.`,
      });
      return;
    }

    setSending(true);

    try {
      const response = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form,
        { publicKey: emailConfig.publicKey },
      );
      console.log('EmailJS Success:', response);
      form.reset();
      setStatus({ type: 'success', message: 'Message sent. Thank you for reaching out.' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      const emailJsMessage = error?.text || error?.message || 'EmailJS rejected the request.';
      setStatus({
        type: 'error',
        message: isDevelopment
          ? `${fallbackMessage}. EmailJS error: ${emailJsMessage}.`
          : fallbackMessage,
      });
    } finally {
      setSending(false);
    }
  };

  const socialLinks = [
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    {
      label: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      icon: FiPhone,
    },
    {
      label: 'LinkedIn',
      href: profile.linkedin,
      icon: FiLinkedin,
      external: true,
    },
    ...(profile.github
      ? [
          {
            label: 'GitHub',
            href: profile.github,
            icon: FiGithub,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something intelligent."
      intro="Use the form for project, internship, collaboration, or recruiter conversations. You can also reach me directly through email, phone, or LinkedIn."
      className="bg-night/[0.04] dark:bg-white/[0.025]"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-card h-full p-7">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyanGlow">Available For</p>
            <h3 className="mt-4 text-3xl font-black">Python, Django, ML, and backend roles</h3>
            <p className="mt-5 leading-8 text-night/65 dark:text-frost/65">
              I’m interested in engineering teams where clean APIs, data systems, and machine learning can solve real
              problems. Send a note and I’ll respond as soon as possible.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="social-link"
                  >
                    <Icon />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Name</span>
                <input name="from_name" type="text" placeholder="Your name" autoComplete="name" required />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input name="from_email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </label>
            </div>
            <label className="form-field mt-5">
              <span>Message</span>
              <textarea name="message" rows="7" placeholder="Tell me what you want to build..." required />
            </label>
            <button type="submit" disabled={sending} className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
              <FiSend />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p
                className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-mintGlow/35 bg-mintGlow/10 text-mintGlow'
                    : 'border-coralGlow/35 bg-coralGlow/10 text-coralGlow'
                }`}
              >
                {status.message}
                {status.type === 'error' && (
                  <a href={`mailto:${profile.email}`} className="ml-2 font-bold underline underline-offset-4">
                    Open Gmail
                  </a>
                )}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
