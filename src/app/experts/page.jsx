import Experts from '@/views/Experts'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/experts')

export default function Page() {
  return <Experts />
}
