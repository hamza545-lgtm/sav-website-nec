import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/site.js'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, LoaderCircle, CircleAlert, ChevronDown, Plus } from 'lucide-react'

const inputCls =
  'w-full rounded-xl border border-line/[0.12] bg-page/60 px-4 py-3 text-[15px] text-fg placeholder:text-muted/60 transition-colors focus:border-emerald-400/60 focus:bg-card focus:outline-none'

function Field({ f }) {
  const id = `f-${f.name}`
  return (
    <div className={f.full ? 'sm:col-span-2' : ''}>
      {f.type !== 'checkbox' && (
        <label htmlFor={id} className="mb-2 block text-[13px] text-body">
          {f.label}
          {f.required && <span className="text-accent"> *</span>}
        </label>
      )}
      {f.type === 'select' ? (
        <div className="relative">
          <select id={id} name={f.name} required={f.required} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
            <option value="" disabled>
              Select
            </option>
            {f.options.map((o) => (
              <option key={o} value={o} className="bg-card">
                {o}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
        </div>
      ) : f.type === 'textarea' ? (
        <textarea id={id} name={f.name} rows={f.rows || 5} required={f.required} placeholder={f.placeholder} className={`${inputCls} resize-y`} />
      ) : f.type === 'checkbox' ? (
        <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-muted">
          <input id={id} type="checkbox" name={f.name} value="Yes" required={f.required} className="mt-1 h-4 w-4 shrink-0 accent-emerald-500" />
          <span>{f.label}</span>
        </label>
      ) : (
        <input id={id} type={f.type || 'text'} name={f.name} required={f.required} placeholder={f.placeholder} className={inputCls} />
      )}
    </div>
  )
}

// Small print under every form: data use and how to spot impersonation.
function FormNotice() {
  return (
    <div className="border-t border-line/[0.08] pt-4 text-[11.5px] leading-[1.6] text-muted/90 sm:col-span-2">
      <p>
        By submitting, you agree that Savnec may store and process your details to respond and, where relevant, to
        deliver the services you request, as described in our{' '}
        <Link to="/privacy-policy" className="underline decoration-line/25 underline-offset-2 hover:text-fg">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="mt-1.5">
        We only contact you from an @{site.domain} email address, our official LinkedIn page, or our official phone and
        WhatsApp numbers. Treat messages from any other email domain or platform (such as Gmail, Facebook, Instagram or
        Telegram) as fraudulent, and if in doubt, check with{' '}
        <a href={`mailto:${site.emails.info}`} className="underline decoration-line/25 underline-offset-2 hover:text-fg">
          {site.emails.info}
        </a>
        .
      </p>
    </div>
  )
}

export default function Web3Form({ accessKey, subject, fields, submitLabel = 'Submit', successTitle, successBody, fallbackEmail = site.emails.info }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data.botcheck) return
    delete data.botcheck

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: String(accessKey || '').trim(),
          subject,
          from_name: 'Savnec Website',
          replyto: data.email,
          ...data,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        throw new Error(json.message || 'Something went wrong.')
      }
    } catch (err) {
      // Web3Forms explains what went wrong here (for example an invalid access key).
      console.error('Form not sent:', err.message)
      setStatus('error')
      setError(`We could not send that just now. Please try again in a moment, or email ${fallbackEmail}.`)
    }
  }

  return (
    <div className="relative" aria-live="polite">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15 text-accent shadow-[0_12px_30px_-14px_rgba(15,110,76,0.6)]">
              <Check size={24} />
            </span>
            <h2 className="mt-6 text-[26px] font-semibold">{successTitle}</h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{successBody}</p>
            <button onClick={() => setStatus('idle')} className="mt-8 text-[14px] text-accent underline-offset-4 hover:underline">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2">
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            {fields.map((f) => (
              <Field key={f.name} f={f} />
            ))}
            {status === 'error' && (
              <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-700 sm:col-span-2">
                <CircleAlert size={16} className="mt-0.5 shrink-0" /> {error}
              </p>
            )}
            <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-muted">We reply within one business day.</p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-emerald-600 px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_10px_28px_-14px_rgba(15,110,76,0.75)] transition-[background-color,box-shadow,transform] duration-500 ease-out hover:bg-emerald-700 hover:shadow-[0_14px_32px_-14px_rgba(15,110,76,0.85)] active:scale-[0.985] disabled:opacity-60"
              >
                {status === 'sending' ? <LoaderCircle size={16} className="relative animate-spin" /> : null}
                <span className="relative">{status === 'sending' ? 'Sending' : submitLabel}</span>
                {status !== 'sending' && (
                  <ArrowRight size={16} className="relative transition-transform duration-500 ease-out group-hover:translate-x-1" />
                )}
                <span aria-hidden="true" className="btn-shine pointer-events-none absolute inset-y-0 -left-[300%] w-[400%] animate-shimmer opacity-60" />
              </button>
            </div>
            <FormNotice />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-line/[0.1] border-y border-line/[0.1]">
      {items.map((it, i) => (
        <div key={it.q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={open === i}
          >
            <span className={`text-[17px] transition-colors ${open === i ? 'text-fg' : 'text-body'}`}>{it.q}</span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                open === i ? 'rotate-45 border-emerald-400/50 text-accent' : 'border-line/15 text-muted'
              }`}
            >
              <Plus size={15} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-6 text-[15.5px] leading-relaxed text-muted">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
