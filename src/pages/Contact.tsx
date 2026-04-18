import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

type InquiryForm = {
  fullName: string;
  email: string;
  intent: string;
  context: string;
};

type InquiryErrors = Partial<Record<keyof InquiryForm, string>>;

const WHATSAPP_PHONE = '918830561188';
const PHONE_DISPLAY = '+91 8830561188';
const EMAIL_ADDRESS = 'vaidyagroupac@gmail.com';
const LOCATION_TEXT = 'Sagar Society, Rudra Colony, Udhyamnagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra - 411018';
const MAPS_QUERY = encodeURIComponent(LOCATION_TEXT);
const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/vaidyagroup.co?igsh=bWl6MWRlYzhzemF5&utm_source=qr',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1KFQq4AXrg/?mibextid=wwXIfr',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaidya-group-construction-5a2136404?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
];
const intentOptions = [
  'Private Residence',
  'Investment Portfolio',
  'Commercial Space',
  'Future Ventures',
];

const initialForm: InquiryForm = {
  fullName: '',
  email: '',
  intent: '',
  context: '',
};

export default function Contact() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<InquiryForm>(initialForm);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [statusMessage, setStatusMessage] = useState('');

  const setFieldValue = (field: keyof InquiryForm, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });

    if (statusMessage) {
      setStatusMessage('');
    }
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (field: keyof InquiryForm, rawValue: string) => {
    const value = rawValue.trim();

    switch (field) {
      case 'fullName':
        if (!value) {
          return 'Please share your full name.';
        }
        if (value.length < 3) {
          return 'Please enter at least 3 characters.';
        }
        if (!/^[A-Za-z\s.'-]+$/.test(value)) {
          return 'Please use letters only for your name.';
        }
        return undefined;
      case 'email':
        if (!value) {
          return 'Please provide your email address.';
        }
        if (!validateEmail(value)) {
          return 'Please enter a valid email address.';
        }
        return undefined;
      case 'intent':
        return value ? undefined : 'Please select your requirement profile.';
      case 'context':
        return value.length > 500 ? 'Please keep your note within 500 characters.' : undefined;
      default:
        return undefined;
    }
  };

  const syncFieldError = (field: keyof InquiryForm, error?: string) => {
    setErrors((current) => {
      const nextErrors = { ...current };

      if (error) {
        nextErrors[field] = error;
      } else {
        delete nextErrors[field];
      }

      return nextErrors;
    });
  };

  const handleFieldBlur = (field: keyof InquiryForm) => {
    syncFieldError(field, validateField(field, formData[field]));
  };

  const validateStep = (step: number) => {
    const nextErrors: InquiryErrors = {};

    if (step >= 1) {
      const fullNameError = validateField('fullName', formData.fullName);
      const emailError = validateField('email', formData.email);

      if (fullNameError) {
        nextErrors.fullName = fullNameError;
      }

      if (emailError) {
        nextErrors.email = emailError;
      }
    }

    if (step >= 2) {
      const intentError = validateField('intent', formData.intent);
      if (intentError) {
        nextErrors.intent = intentError;
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goToStep = (step: number) => {
    if (step > formStep && !validateStep(step - 1)) {
      return;
    }

    setFormStep(step);
  };

  function sendConciergeInquiry() {
    const sanitizedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      intent: formData.intent.trim(),
      context: formData.context.trim() || 'No additional notes provided',
    };

    setFormData(sanitizedData);

    const nextErrors: InquiryErrors = {};
    const fullNameError = validateField('fullName', sanitizedData.fullName);
    const emailError = validateField('email', sanitizedData.email);
    const intentError = validateField('intent', sanitizedData.intent);
    const contextError = validateField('context', formData.context);

    if (fullNameError) {
      nextErrors.fullName = fullNameError;
    }

    if (emailError) {
      nextErrors.email = emailError;
    }

    if (intentError) {
      nextErrors.intent = intentError;
    }

    if (contextError) {
      nextErrors.context = contextError;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMessage('Please refine the highlighted details before continuing.');
      setFormStep(nextErrors.intent ? 2 : 1);
      return;
    }

    setErrors({});

    const message = `Private Inquiry \u2014 Website

Client Identity
\u2022 Name: ${sanitizedData.fullName}
\u2022 Email: ${sanitizedData.email}

Intent Profile
\u2022 Requirement: ${sanitizedData.intent}

Context Note
${sanitizedData.context}

\u2014
Please initiate a priority consultation.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatusMessage('Your inquiry has been prepared. Please confirm on WhatsApp.');
  }

  return (
    <div className="bg-ivory min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-6 overflow-hidden text-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div className="space-y-12 md:space-y-20">
          <header className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gold text-xs font-bold uppercase tracking-[0.5em] mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-[6rem] font-display font-light normal-case tracking-tight"
            >
              Start <br /> the <span className="text-muted-green italic">Conversation</span>
            </motion.h1>
          </header>

          <div className="space-y-10 md:space-y-12">
            <motion.a
              href="tel:+918830561188"
              whileHover={{ x: 10 }}
              className="flex items-start md:items-center gap-5 md:gap-8 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-card-border bg-white flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500 shadow-soft shrink-0">
                <Phone className="text-muted-green group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold block mb-2">Direct Line</span>
                <span className="text-xl md:text-4xl font-display group-hover:text-gold transition-colors tracking-tighter break-all">{PHONE_DISPLAY}</span>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${EMAIL_ADDRESS}`}
              whileHover={{ x: 10 }}
              className="flex items-start md:items-center gap-5 md:gap-8 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-card-border bg-white flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500 shadow-soft shrink-0">
                <Mail className="text-muted-green group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold block mb-2">Email Inquiry</span>
                <span className="text-xl md:text-4xl font-display group-hover:text-gold transition-colors tracking-tighter break-all">{EMAIL_ADDRESS}</span>
              </div>
            </motion.a>

            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-start md:items-center gap-5 md:gap-8 group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-card-border bg-white flex items-center justify-center shadow-soft group-hover:border-gold group-hover:bg-gold transition-all duration-500 shrink-0">
                <MapPin className="text-muted-green group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold block mb-2">Architecture Studio</span>
                <span className="text-base md:text-xl font-light text-secondary leading-relaxed">
                  {LOCATION_TEXT}
                </span>
              </div>
            </motion.a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-8 border-t border-card-border">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-secondary hover:text-gold transition-all transform hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 sm:p-8 md:p-20 rounded-none relative z-10 shadow-2xl border border-card-border"
          >
            <div className="mb-10 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-[0.5em] text-secondary font-bold block">Inquiry Concierge</span>
                <p className="mt-4 text-sm text-secondary/80 max-w-sm leading-relaxed">
                  Share a few details and we will prepare a polished WhatsApp inquiry for a priority consultation.
                </p>
              </div>
              <div className="flex gap-1.5">
                <div className={`w-8 h-1 transition-all rounded-full ${formStep >= 1 ? 'bg-gold' : 'bg-card-border'}`} />
                <div className={`w-8 h-1 transition-all rounded-full ${formStep >= 2 ? 'bg-gold' : 'bg-card-border'}`} />
                <div className={`w-8 h-1 transition-all rounded-full ${formStep >= 3 ? 'bg-gold' : 'bg-card-border'}`} />
              </div>
            </div>

            {statusMessage && (
              <div className="mb-10 flex items-start gap-3 border border-gold/30 bg-ivory px-5 py-4 text-sm text-secondary">
                <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {formStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-4xl font-display mb-12 tracking-tight text-primary">Client Identity</h3>
                <div className="space-y-10">
                  <div className="relative group">
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(event) => setFieldValue('fullName', event.target.value)}
                      onBlur={() => handleFieldBlur('fullName')}
                      placeholder="Full Name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className="w-full bg-transparent border-b border-card-border py-6 outline-none focus:border-gold transition-colors text-2xl font-light text-primary placeholder:text-secondary/30"
                    />
                    {errors.fullName && <p id="fullName-error" className="pt-3 text-xs uppercase tracking-[0.2em] text-[#9B6B52]">{errors.fullName}</p>}
                  </div>
                  <div className="relative group">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFieldValue('email', event.target.value)}
                      onBlur={() => handleFieldBlur('email')}
                      placeholder="Professional Email"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="w-full bg-transparent border-b border-card-border py-6 outline-none focus:border-gold transition-colors text-2xl font-light text-primary placeholder:text-secondary/30"
                    />
                    {errors.email && <p id="email-error" className="pt-3 text-xs uppercase tracking-[0.2em] text-[#9B6B52]">{errors.email}</p>}
                  </div>
                </div>
                <button
                  onClick={() => goToStep(2)}
                  className="mt-16 w-full cta-button flex items-center justify-center gap-4 group"
                >
                  Continue <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}

            {formStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-4xl font-display mb-12 tracking-tight text-primary">Intent Profile</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {intentOptions.map((option) => {
                    const isSelected = formData.intent === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setFieldValue('intent', option);
                          syncFieldError('intent', undefined);
                        }}
                        aria-pressed={isSelected}
                        className={`p-8 border rounded-none transition-all text-[11px] uppercase tracking-[0.3em] flex items-center justify-center text-center leading-relaxed font-bold ${
                          isSelected
                            ? 'border-gold bg-ivory text-primary shadow-soft'
                            : 'border-card-border text-secondary hover:border-gold hover:bg-ivory hover:text-primary'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <input
                  id="intent"
                  type="hidden"
                  value={formData.intent}
                  readOnly
                />
                {errors.intent && <p id="intent-error" className="pt-4 text-xs uppercase tracking-[0.2em] text-[#9B6B52]">{errors.intent}</p>}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12">
                  <button
                    onClick={() => goToStep(1)}
                    className="flex-1 py-5 border border-card-border text-secondary font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-ivory transition-colors"
                  >
                    Back
                  </button>
                  <button onClick={() => goToStep(3)} className="flex-1 cta-button">
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {formStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-4xl font-display mb-12 tracking-tight text-primary">Context Note</h3>
                <textarea
                  id="context"
                  rows={5}
                  value={formData.context}
                  onChange={(event) => setFieldValue('context', event.target.value)}
                  onBlur={() => handleFieldBlur('context')}
                  placeholder="Anything specific we should prepare for our first meeting?"
                  maxLength={500}
                  aria-invalid={Boolean(errors.context)}
                  aria-describedby="context-meta"
                  className="w-full bg-ivory border border-card-border p-8 outline-none focus:border-gold transition-colors text-lg font-light resize-none mb-6 text-primary placeholder:text-secondary/40"
                />
                <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p id="context-meta" className="text-xs uppercase tracking-[0.3em] text-secondary/70">
                    Optional. If left blank, we will note that no additional details were provided.
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-secondary/60">
                    {formData.context.trim().length}/500
                  </span>
                </div>
                {errors.context && <p className="-mt-8 mb-8 text-xs uppercase tracking-[0.2em] text-[#9B6B52]">{errors.context}</p>}
                <div className="mb-6 rounded-none border border-card-border/60 bg-ivory/60 p-4 text-[11px] uppercase tracking-[0.2em] text-secondary/80">
                  Required before confirmation: full name, email, and requirement profile.
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button
                    onClick={() => goToStep(2)}
                    className="flex-1 py-6 border border-card-border text-secondary font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-ivory transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={sendConciergeInquiry}
                    className="flex-1 py-6 bg-muted-green text-white font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-gold transition-all shadow-xl"
                  >
                    Connect with Concierge
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </div>

      <section className="mt-32 md:mt-40 h-[65vh] md:h-[60vh] w-full relative overflow-hidden border-t border-card-border bg-white">
        <iframe
          title="Vaidya Group location map"
          src={MAPS_EMBED_URL}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-16 bg-gradient-to-t from-ivory via-ivory/90 to-transparent pointer-events-none">
          <h3 className="text-2xl md:text-3xl font-display text-muted-green mb-3 tracking-tight">Visit Our Studio</h3>
          <p className="text-[10px] md:text-xs text-secondary font-bold uppercase tracking-[0.35em] md:tracking-[0.5em]">Pinned in Google Maps for easy navigation.</p>
          <div className="pt-6 pointer-events-auto">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-midnight text-white hover:bg-gold hover:text-midnight transition-all text-[10px] font-bold uppercase tracking-[0.35em] md:tracking-[0.4em] shadow-xl"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="absolute inset-0 hidden md:flex items-center justify-center p-20 pointer-events-none">
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="w-60 h-60 border-l border-b border-dashed border-gold/30 rounded-bl-[80px]"
          />
        </div>
      </section>
    </div>
  );
}
