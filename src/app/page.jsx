import Home from '@/views/Home'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/')

export default function Page() {
  return <Home />
}
