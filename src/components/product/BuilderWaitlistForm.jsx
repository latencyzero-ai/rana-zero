import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { TextField } from '../ui/Field'
import Button from '../ui/Button'

const initial = { name: '', email: '', link: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Full name is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid work email.'
  return errors
}

export default function BuilderWaitlistForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function update(key) {
    return (e) => setValues((v) => ({ ...v, [key]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      // Same placeholder pattern as the pilot form: wire this to the
      // real builder-waitlist endpoint when it exists.
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-6 py-12 text-center">
        <CheckCircle2 size={26} className="text-cyan" aria-hidden="true" />
        <h3 className="text-[17px] font-bold text-white">You&rsquo;re on the list</h3>
        <p className="max-w-sm text-[14px] text-white/70">
          We&rsquo;ll reach out at <span className="text-white">{values.email}</span> as the builder preview opens up.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Full name"
          value={values.name}
          onChange={update('name')}
          error={errors.name}
          className="[&_label]:text-white/60 [&_input]:text-white [&_input]:border-white/25"
        />
        <TextField
          id="email"
          type="email"
          label="Work email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
          className="[&_label]:text-white/60 [&_input]:text-white [&_input]:border-white/25"
        />
      </div>
      <TextField
        id="link"
        label="GitHub / LinkedIn (optional)"
        value={values.link}
        onChange={update('link')}
        className="[&_label]:text-white/60 [&_input]:text-white [&_input]:border-white/25"
      />

      {status === 'error' && (
        <p className="font-mono text-[12px] text-error" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-fit">
        {status === 'submitting' ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" /> Submitting…
          </>
        ) : (
          'Request API access'
        )}
      </Button>
      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-white/50">
        By submitting, you agree to our developer terms of service.
      </p>
    </form>
  )
}
