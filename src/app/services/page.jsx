import Services from '@/views/Services'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/services')

export default function Page() {
  return <Services />
}
