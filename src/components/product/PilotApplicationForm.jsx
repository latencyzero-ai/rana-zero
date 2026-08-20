import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { TextField, SelectField } from '../ui/Field'
import Button from '../ui/Button'
import { patientVolumes } from '../../data/content'

const initial = {
  clinicName: '',
  contactName: '',
  email: '',
  emr: '',
  volume: '',
}

function validate(values) {
  const errors = {}
  if (!values.clinicName.trim()) errors.clinicName = 'Clinic name is required.'
  if (!values.contactName.trim()) errors.contactName = 'Contact name is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.volume) errors.volume = 'Select a patient volume range.'
  return errors
}

export default function PilotApplicationForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

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
      // NOTE: no backend is wired up yet. This is the frontend-ready
      // state machine (idle -> submitting -> success/error) waiting on
      // a real endpoint -- swap this block for a fetch() to the pilot
      // application API once it exists.
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-stroke bg-surface px-6 py-14 text-center">
        <CheckCircle2 size={28} className="text-primary" aria-hidden="true" />
        <h3 className="text-[18px] font-bold text-ink">Application received</h3>
        <p className="max-w-sm text-[14px] text-body">
          We review pilot applications on a rolling basis and will reach out at{' '}
          <span className="font-medium text-ink">{values.email}</span> if there&rsquo;s a fit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-stroke bg-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          id="clinicName"
          label="Clinic name"
          placeholder="e.g. Apex Health"
          value={values.clinicName}
          onChange={update('clinicName')}
          error={errors.clinicName}
        />
        <TextField
          id="contactName"
          label="Contact name"
          placeholder="e.g. Dr. Jane Smith"
          value={values.contactName}
          onChange={update('contactName')}
          error={errors.contactName}
        />
        <TextField
          id="email"
          type="email"
          label="Email address"
          placeholder="jane@apexhealth.com"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />
        <TextField
          id="emr"
          label="Current EMR system"
          placeholder="e.g. Epic, Cerner"
          value={values.emr}
          onChange={update('emr')}
        />
        <SelectField
          id="volume"
          label="Patient volume (monthly)"
          options={patientVolumes}
          value={values.volume}
          onChange={update('volume')}
          error={errors.volume}
          className="sm:col-span-2"
        />
      </div>

      {status === 'error' && (
        <p className="mt-5 font-mono text-[12px] text-error" role="alert">
          Something went wrong submitting your application. Please try again.
        </p>
      )}

      <Button type="submit" className="mt-7 w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" /> Submitting…
          </>
        ) : (
          'Submit application'
        )}
      </Button>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
        Applications reviewed rolling
      </p>
    </form>
  )
}
