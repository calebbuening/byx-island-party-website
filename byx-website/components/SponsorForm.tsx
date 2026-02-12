'use client'

import { useState } from 'react'

export default function SponsorForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/sponsor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', organization: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="island-content-card space-y-4 p-6 shadow-lg">
      <div>
        <label htmlFor="sponsor-name" className="mb-1 block text-sm font-medium text-cyan-950">
          Name *
        </label>
        <input
          type="text"
          id="sponsor-name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="island-input"
        />
      </div>

      <div>
        <label htmlFor="organization" className="mb-1 block text-sm font-medium text-cyan-950">
          Organization/Company
        </label>
        <input
          type="text"
          id="organization"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          className="island-input"
        />
      </div>

      <div>
        <label htmlFor="sponsor-email" className="mb-1 block text-sm font-medium text-cyan-950">
          Email *
        </label>
        <input
          type="email"
          id="sponsor-email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="island-input"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-cyan-950">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="island-input"
        />
      </div>

      <div>
        <label htmlFor="sponsor-message" className="mb-1 block text-sm font-medium text-cyan-950">
          Sponsorship Interest *
        </label>
        <textarea
          id="sponsor-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="island-input"
          placeholder="Tell us about your interest in sponsoring BYX..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="island-form-btn"
      >
        {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm">Inquiry sent! We&apos;ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Failed to send inquiry. Please try again.</p>
      )}
    </form>
  )
}
