import { PageHero, useSeo } from '../components/ui.jsx'
import { site } from '../config/site.js'

// NOTE: These are starter texts. Have them reviewed by a qualified
// lawyer before you rely on them.

const updated = 'October 2026'

function LegalShell({ eyebrow, title, children }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={`Last updated ${updated}.`} />
      <section className="pb-28">
        <div className="container-site">
          <div className="prose-legal max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  useSeo('Privacy Policy', 'How Savnec collects, uses and protects personal information.')
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy">
      <p>
        This policy explains how {site.legalName} (“Savnec”, “we”, “us”) collects, uses and protects personal
        information when you visit {site.domain}, apply to join our expert network or engage our services.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Details you submit through our forms, such as your name, email, company, job title and professional background.</li>
        <li>Information you share during screening or engagements, such as employment history and areas of expertise.</li>
        <li>Basic technical data from your browser, such as device type and pages visited, used to keep the site working.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To respond to inquiries and deliver the services you request.</li>
        <li>To match experts with relevant projects and run conflict and compliance checks.</li>
        <li>To meet legal, regulatory and record-keeping obligations.</li>
      </ul>
      <p>We do not sell personal information.</p>
      <h2>Sharing</h2>
      <p>
        Expert profiles are shared with clients in anonymized form until an expert agrees to an engagement. We use
        trusted service providers, such as form processing and email providers, who handle data on our behalf and
        under appropriate safeguards.
      </p>
      <h2>Retention</h2>
      <p>We keep personal information only as long as needed for the purposes above or as required by law.</p>
      <h2>Your rights</h2>
      <p>
        Depending on where you live, including under the GDPR and CCPA, you may have the right to access, correct,
        delete or restrict use of your personal information. To make a request, contact us through the Contact page.
      </p>
      <h2>Contact</h2>
      <p>
        {site.legalName}, {site.address || site.hq}.
      </p>
    </LegalShell>
  )
}

export function Terms() {
  useSeo('Terms & Conditions', 'Terms governing the use of the Savnec website.')
  return (
    <LegalShell eyebrow="Legal" title="Terms & Conditions">
      <p>
        These terms govern your use of {site.domain}. By using the site you agree to them. Separate written
        agreements govern client engagements and expert participation.
      </p>
      <h2>Use of the site</h2>
      <p>
        You may use this site for lawful purposes only. You agree not to misuse it, attempt to access it without
        authorization or submit false information through its forms.
      </p>
      <h2>No advice</h2>
      <p>
        Content on this site is general information. It is not investment, legal or professional advice.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The Savnec name, logo and site content belong to {site.legalName}. You may not reproduce them without
        permission.
      </p>
      <h2>Liability</h2>
      <p>
        The site is provided “as is”. To the extent permitted by law, Savnec is not liable for losses arising from
        its use.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Delaware, United States.</p>
    </LegalShell>
  )
}
