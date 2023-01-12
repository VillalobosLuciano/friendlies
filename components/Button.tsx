import clsx from 'clsx'
import Link from 'next/link'

const styles = {
  primary:
    'rounded-md bg-[#F38425] py-2 text-lg uppercase px-4 font-semibold text-black hover:bg-[#F38425]/90 active:bg-[#F38425] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F38425]/50',
  secondary:
    'rounded-md bg-white py-2 px-4 text-lg font-semibold text-black hover:bg-white/90 uppercase active:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
}

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  href,
  ...props
}: ButtonProps & { href: string }) {
  return (
    <Link href={href} className={clsx(styles[variant], className)} {...props}>
      {children}
    </Link>
  )
}
