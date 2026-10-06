import { useSeo } from '../components/ui.jsx'
import Web3Form from '../components/Form.jsx'
import { FormPage } from './RequestTrial.jsx'
import { site } from '../config/site.js'
import { industries } from '../data/content.js'

export default function JoinNetwork() {
  useSeo('Join as an Expert', 'Apply to join the Savnec expert network. Paid consultations, flexible scheduling and no minimum commitment.')
  return (
    <FormPage
      eyebrow="Join the network"
      title={
        <>
          Put your experience <span className="serif-accent text-accent">to work.</span>
        </>
      }
      intro="Free to join, no minimum commitment. We contact you only when a project genuinely matches your background."
      nextTitle="After you apply"
      next={[
        'We review your background and add you to our expert network.',
        'When a relevant project comes up, we send you a short description and screening questions.',
        'You choose whether to take part. Rates are agreed before every engagement.',
      ]}
    >
      <Web3Form
        accessKey={site.web3forms.experts}
        subject="New expert application from savnec.com"
        submitLabel="Submit application"
        successTitle="Application received."
        successBody="Thank you for applying. We will be in touch when a project matches your experience."
        fields={[
          { name: 'name', label: 'Full name', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'linkedin', label: 'LinkedIn profile URL', type: 'url', required: true, full: true },
          { name: 'title', label: 'Current or most recent title', required: true },
          { name: 'company', label: 'Current or most recent company', required: true },
          { name: 'industry', label: 'Primary industry', type: 'select', required: true, options: [...industries.map((i) => i.name), 'Other'] },
          { name: 'experience', label: 'Years of experience', type: 'select', required: true, options: ['3 to 5', '6 to 10', '11 to 15', '16 to 20', '20+'] },
          { name: 'status', label: 'Employment status', type: 'select', required: true, options: ['Currently employed', 'Independent consultant', 'Board / advisory roles', 'Retired', 'Between roles'] },
          { name: 'country', label: 'Country', required: true },
          { name: 'expertise', label: 'Areas of expertise', type: 'textarea', rows: 4, full: true, required: true, placeholder: 'Markets, products, functions and companies you can speak to with authority.' },
          { name: 'consent', label: 'I confirm I will not share confidential or material non-public information in any engagement, and I agree to Savnec processing my details under its Privacy Policy.', type: 'checkbox', required: true, full: true },
        ]}
      />
    </FormPage>
  )
}
