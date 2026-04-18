const contactEmail = 'vaidyagroupac@gmail.com';
const contactPhone = '+91 8830561188';

const sections = [
  {
    title: 'Introduction',
    content: [
      'Vaidya Group respects your privacy and handles personal information with care.',
      'This Privacy Policy explains what we collect, why we collect it, and how we use it when you visit our website, contact us, or ask about our residential projects.',
      'We aim to keep this page simple, transparent, and aligned with applicable Indian data protection requirements, including the Digital Personal Data Protection Act, 2023.',
    ],
  },
  {
    title: 'Information We Collect',
    content: [
      'When you interact with us, we may collect the following types of information:',
    ],
    bullets: [
      'Identity and contact details such as your name, phone number, and email address.',
      'Inquiry details such as project interest, budget range, location preference, property preferences, and any message you choose to share.',
      'Technical information such as IP address, browser type, device information, pages visited, date and time of visit, and similar usage details.',
      'Cookie-related information used to understand website activity and improve user experience.',
    ],
  },
  {
    title: 'How We Use Information',
    bullets: [
      'To respond to your inquiries and follow up on project interest.',
      'To share brochures, project details, availability updates, or consultation information.',
      'To improve website experience, navigation, and service quality.',
      'To maintain internal records and support customer communication.',
      'To meet legal, compliance, or regulatory requirements where needed.',
    ],
  },
  {
    title: 'Data Sharing',
    content: [
      'We do not sell your personal information.',
      'We may share information only where reasonably necessary, including with:',
    ],
    bullets: [
      'Relevant members of our internal team.',
      'Authorized service providers or partners helping us with project communication, technology support, or customer assistance.',
      'Government authorities, regulators, or legal advisors where required by law or to protect legitimate interests.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We use reasonable security practices to help protect personal information from unauthorized access, loss, misuse, or disclosure.',
      'No digital system can promise absolute security, but we take practical steps to store and handle information responsibly.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Cookies are small files that help websites remember activity and improve browsing experience.',
      'We may use basic cookies or analytics-related tools to understand how visitors use the website and to improve performance.',
      'You may manage cookies through your browser settings. Disabling some cookies may affect how certain parts of the site work.',
    ],
  },
  {
    title: 'User Rights',
    content: [
      'Subject to applicable law, you may request to:',
    ],
    bullets: [
      'Access the personal information we hold about you.',
      'Correct or update inaccurate information.',
      'Ask for deletion of information that is no longer required.',
      'Withdraw consent or opt out of promotional communication.',
      'Raise a concern about how your information is being used.',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'We keep personal information only for as long as it is reasonably necessary for inquiry handling, customer support, project communication, internal records, or legal and compliance purposes.',
      'When the information is no longer required, we aim to delete or securely handle it in an appropriate manner.',
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      'Our website may include links to third-party services such as maps, social media platforms, or external communication tools.',
      'Once you leave our website, the privacy practices of those third parties will apply. We encourage you to review their policies separately.',
    ],
  },
  {
    title: 'Updates to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our website, services, or legal requirements.',
      'The latest version published on this page will apply.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-ivory min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-6 text-primary">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.5em] mb-4">Privacy Policy</p>
          <h1 className="text-3xl md:text-[5rem] font-display leading-[0.95] tracking-tight">
            Clear and careful <span className="text-gold italic">handling</span> of your information
          </h1>
          <p className="mt-6 text-base md:text-lg text-secondary font-light italic max-w-3xl mx-auto leading-relaxed">
            Last updated on April 18, 2026.
          </p>
        </header>

        <div className="space-y-10 md:space-y-14">
          {sections.map((section) => (
            <section key={section.title} className="bg-white border border-card-border shadow-sm p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">{section.title}</h2>
              <div className="space-y-4 text-secondary leading-relaxed font-light">
                {section.content?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Contact Information</h2>
            <div className="space-y-3 text-secondary leading-relaxed font-light">
              <p>If you have a question about this Privacy Policy or how we handle your information, you may contact us at:</p>
              <p>Email: {contactEmail}</p>
              <p>Phone: {contactPhone}</p>
            </div>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Grievance Officer</h2>
            <div className="space-y-3 text-secondary leading-relaxed font-light">
              <p>For privacy-related concerns, complaints, correction requests, or grievance redressal, you may write to our Grievance Officer.</p>
              <p>Designation: Grievance Officer, Vaidya Group</p>
              <p>Email: {contactEmail}</p>
              <p>Phone: {contactPhone}</p>
              <p>We will aim to review and respond within a reasonable time.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
