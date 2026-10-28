import Clients from '@/views/Clients'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/clients')

export default function Page() {
  return <Clients />
}
