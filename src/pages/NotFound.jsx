import { PageHero, Button, useSeo } from '../components/ui.jsx'

export default function NotFound() {
  useSeo('Page not found')
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page <span className="serif-accent text-emerald-300">doesn’t exist.</span>
        </>
      }
      intro="The link may be out of date. Everything you need is one click away."
    >
      <Button to="/">Back to home</Button>
    </PageHero>
  )
}
