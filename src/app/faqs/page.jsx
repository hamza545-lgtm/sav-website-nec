import Faqs from '@/views/Faqs'
import { metadataFor, jsonLdScript } from '@/data/seo'
import { faqs } from '@/data/content'

export const metadata = metadataFor('/faqs')

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: Object.values(faqs)
    .flat()
    .map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd)} />
      <Faqs />
    </>
  )
}
