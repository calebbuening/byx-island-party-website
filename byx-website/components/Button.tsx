import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center'

  const variants = {
    primary: 'bg-cyan-700 text-white hover:bg-cyan-600 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-200',
    outline: 'border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white disabled:border-gray-400 disabled:text-gray-400',
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  )
}
