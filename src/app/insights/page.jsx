import Insights from '@/views/Insights'
import { metadataFor } from '@/data/seo'

export const metadata = metadataFor('/insights')

export default function Page() {
  return <Insights />
}
