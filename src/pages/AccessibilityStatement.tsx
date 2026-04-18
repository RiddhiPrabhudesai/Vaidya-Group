const contactEmail = 'vaidyagroupac@gmail.com';
const contactPhone = '+91 8830561188';

export default function AccessibilityStatement() {
  return (
    <div className="bg-ivory min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 px-6 text-primary">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.5em] mb-4">Accessibility</p>
          <h1 className="text-3xl md:text-[5rem] font-display leading-[0.95] tracking-tight">
            A website designed to feel <span className="text-gold italic">clear and comfortable</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-secondary font-light italic max-w-3xl mx-auto leading-relaxed">
            We want every visitor to access our website with ease, confidence, and clarity.
          </p>
        </header>

        <div className="space-y-10 md:space-y-14">
          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Commitment to Accessibility</h2>
            <div className="space-y-4 text-secondary leading-relaxed font-light">
              <p>Vaidya Group is committed to making its website accessible and easy to use for as many people as possible.</p>
              <p>We believe that trust starts with clarity, and accessibility is part of that commitment.</p>
            </div>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Steps We Have Taken</h2>
            <ul className="space-y-3 text-secondary leading-relaxed font-light">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Readable typography and clear visual hierarchy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Color contrast choices that support easier reading.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Responsive layouts designed for mobile, tablet, and desktop use.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Simple navigation patterns and consistent page structure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Links and actions that are written in plain, understandable language.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Accessibility Features</h2>
            <ul className="space-y-3 text-secondary leading-relaxed font-light">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Content sections that are clearly separated and easy to scan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Buttons and calls to action that are visually distinct.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Forms with validation support to guide users clearly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>Layouts adjusted to reduce overflow and improve readability on smaller screens.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Limitations</h2>
            <div className="space-y-4 text-secondary leading-relaxed font-light">
              <p>We are continuously improving this website, and some areas may not yet work perfectly for every user, device, browser, or assistive technology.</p>
              <p>If you face any accessibility barrier, we would value the chance to correct it.</p>
            </div>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Feedback and Support</h2>
            <div className="space-y-3 text-secondary leading-relaxed font-light">
              <p>If you have difficulty using any part of this website, please contact us and tell us what you experienced.</p>
              <p>Email: {contactEmail}</p>
              <p>Phone: {contactPhone}</p>
            </div>
          </section>

          <section className="bg-white border border-card-border shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-display tracking-tight mb-5">Continuous Improvement</h2>
            <div className="space-y-4 text-secondary leading-relaxed font-light">
              <p>Accessibility is an ongoing effort, not a one-time task.</p>
              <p>We will continue to review and improve the website so it remains easier to use, easier to read, and more consistent across different devices and user needs.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
