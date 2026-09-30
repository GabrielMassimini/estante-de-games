import type { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'ghost' | 'danger'

// ComponentProps<'button'> = todas as props que um <button> normal aceita
// (onClick, type, disabled, aria-label...). Eu só acrescento a "variant".
interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-violet-400 to-cyan-300 text-bg font-semibold shadow-lg shadow-accent/20 hover:brightness-110',
  ghost: 'bg-surface-2 text-text ring-1 ring-line hover:bg-line',
  danger: 'bg-rose-500 text-white font-semibold hover:bg-rose-400',
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${className}`}
      {...rest}
    />
  )
}
