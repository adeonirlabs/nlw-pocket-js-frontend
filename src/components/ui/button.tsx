import { type ComponentProps, forwardRef } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center justify-center gap-2 rounded-lg font-medium text-sm ',
    'outline-none ring-offset-2 ring-offset-black transition focus-visible:ring-2',
  ],
  variants: {
    variant: {
      primary:
        'bg-violet-500 text-violet-50 ring-violet-500 hover:bg-violet-600',
      secondary: 'bg-zinc-900 text-zinc-400 ring-zinc-900 hover:bg-zinc-800',
      outline: [
        'border border-zinc-800 border-dashed text-zinc-300 ',
        'hover:border-zinc-700 focus-visible:border-pink-500 ',
        'ring-pink-500/10 focus-visible:ring-4',
      ],
      ghost: 'ring-violet-500',
    },
    size: {
      md: 'px-4 py-2.5',
      sm: 'px-3 py-1.5',
      icon: 'p-1',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size, className })}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
