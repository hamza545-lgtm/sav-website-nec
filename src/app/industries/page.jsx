import Industries from '@/views/Industries'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/industries')

export default function Page() {
  return <Industries />
}
