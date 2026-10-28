import NotFound from '@/views/NotFound'

export const metadata = {
  title: { absolute: 'Page not found | Savnec' },
  description: 'This page could not be found.',
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return <NotFound />
}
