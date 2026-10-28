import Compliance from '@/views/Compliance'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/compliance')

export default function Page() {
  return <Compliance />
}
