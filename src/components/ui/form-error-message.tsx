import type { ComponentProps } from 'react'

interface FormErrorMessageProps extends ComponentProps<'p'> {}

export function FormErrorMessage({
  children,
  ...props
}: FormErrorMessageProps) {
  return (
    <p className="mt-1 text-red-400 text-xs" {...props}>
      {children}
    </p>
  )
}
