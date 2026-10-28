import About from '@/views/About'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/about')

export default function Page() {
  return <About />
}
