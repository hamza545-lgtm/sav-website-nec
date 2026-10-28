import Contact from '@/views/Contact'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/contact')

export default function Page() {
  return <Contact />
}
