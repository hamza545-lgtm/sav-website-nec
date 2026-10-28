'use client'

import { PageHero, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page doesn’t exist.
        </>
      }
      intro="The link may be out of date. Everything you need is one click away."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button to="/">Back to home</Button>
        <Button to="/contact" variant="ghost">
          Contact us
        </Button>
      </div>
    </PageHero>
  )
}
