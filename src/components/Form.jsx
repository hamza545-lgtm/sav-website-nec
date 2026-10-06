import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, LoaderCircle, CircleAlert, ChevronDown, Plus } from 'lucide-react'

const inputCls =
  'w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-[15px] text-white placeholder:text-steel/60 transition-colors focus:border-emerald-400/60 focus:bg-navy-950 focus:outline-none'

function Field({ f }) {
  const id = `f-${f.name}`
  return (
    <div className={f.full ? 'sm:col-span-2' : ''}>
      {f.type !== 'checkbox' && (
        <label htmlFor={id} className="mb-2 block text-[13px] text-ink">
          {f.label}
          {f.required && <span className="text-emerald-300"> *</span>}
        </label>
      )}
      {f.type === 'select' ? (
        <div className="relative">
          <select id={id} name={f.name} required={f.required} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
            <option value="" disabled>
              Select
            </option>
            {f.options.map((o) => (
              <option key={o} value={o} className="bg-navy-900">
                {o}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel" />
        </div>
      ) : f.type === 'textarea' ? (
        <textarea id={id} name={f.name} rows={f.rows || 5} required={f.required} placeholder={f.placeholder} className={`${inputCls} resize-y`} />
      ) : f.type === 'checkbox' ? (
        <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-steel">
          <input id={id} type="checkbox" name={f.name} value="Yes" required={f.required} className="mt-1 h-4 w-4 shrink-0 accent-emerald-500" />
          <span>{f.label}</span>
        </label>
      ) : (
        <input id={id} type={f.type || 'text'} name={f.name} required={f.required} placeholder={f.placeholder} className={inputCls} />
      )}
    </div>
  )
}

export default function Web3Form({ accessKey, subject, fields, submitLabel = 'Submit', successTitle, successBody }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data.botcheck) return
    delete data.botcheck

    if (!accessKey || accessKey.startsWith('YOUR_')) {
      setStatus('error')
      setError('This form is not connected yet. Add your Web3Forms key in src/config/site.js.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
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
      setStatus('error')
      setError('We could not send that just now. Please try again in a moment.')
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15 text-emerald-300 shadow-[0_0_40px_-6px_rgba(43,196,138,0.8)]">
              <Check size={24} />
            </span>
            <h3 className="mt-6 text-[26px] font-semibold">{successTitle}</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-steel">{successBody}</p>
            <button onClick={() => setStatus('idle')} className="mt-8 text-[14px] text-emerald-300 hover:text-emerald-200">
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
              <p className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-200 sm:col-span-2">
                <CircleAlert size={16} className="mt-0.5 shrink-0" /> {error}
              </p>
            )}
            <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[12.5px] text-steel">We reply within one business day. Your details stay with Savnec.</p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-[14px] font-medium text-white shadow-[0_0_0_1px_rgba(107,227,181,0.35),0_10px_40px_-10px_rgba(43,196,138,0.65)] transition-all hover:bg-emerald-500 disabled:opacity-60"
              >
                {status === 'sending' ? <LoaderCircle size={16} className="animate-spin" /> : null}
                {status === 'sending' ? 'Sending' : submitLabel}
                {status !== 'sending' && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((it, i) => (
        <div key={it.q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={open === i}
          >
            <span className={`text-[17px] transition-colors ${open === i ? 'text-white' : 'text-ink'}`}>{it.q}</span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                open === i ? 'rotate-45 border-emerald-400/50 text-emerald-300' : 'border-white/15 text-steel'
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
                <p className="max-w-3xl pb-6 text-[15.5px] leading-relaxed text-steel">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
