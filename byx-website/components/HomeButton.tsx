import Link from 'next/link'

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/85 px-4 py-2 text-sm font-extrabold text-cyan-900 transition-colors hover:bg-cyan-50"
    >
      <span aria-hidden="true">&larr;</span>
      Home
    </Link>
  )
}
