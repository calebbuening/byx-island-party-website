'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import SponsorForm from '@/components/SponsorForm'

export default function SponsorFormModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const panelRef = useRef<HTMLDivElement>(null)

  const updateScale = useCallback(() => {
    const panel = panelRef.current
    if (!panel) {
      return
    }

    const viewportHeight = window.innerHeight
    const availableHeight = viewportHeight - 24
    const naturalHeight = panel.scrollHeight

    if (naturalHeight <= 0) {
      setScale(1)
      return
    }

    setScale(Math.min(1, availableHeight / naturalHeight))
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const frame = requestAnimationFrame(updateScale)
    window.addEventListener('resize', updateScale)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', updateScale)
    }
  }, [isOpen, updateScale])

  useEffect(() => {
    if (!isOpen || !panelRef.current) {
      return
    }

    const observer = new ResizeObserver(() => updateScale())
    observer.observe(panelRef.current)

    return () => observer.disconnect()
  }, [isOpen, updateScale])

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setScale(1)
          setIsOpen(true)
        }}
        className="island-form-btn w-auto px-8"
      >
        Open Sponsor Form
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-cyan-950/75 px-3 py-3 sm:px-4 sm:py-4"
          role="dialog"
          aria-modal="true"
          aria-label="Sponsor form"
        >
          <div className="w-full max-w-2xl">
            <div
              ref={panelRef}
              style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
              className="rounded-2xl bg-[#dff7ff] p-4 shadow-xl sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-cyan-950">Sponsor Form</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-1 text-sm font-bold text-cyan-900 hover:bg-cyan-100"
                >
                  Close
                </button>
              </div>
              <SponsorForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
