import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { cn } from '~/lib/utils'

type InputProps = ComponentProps<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-12 rounded-lg border border-zinc-900 bg-black px-4 text-sm ',
          'placeholder-zinc-400 outline-none ring-pink-500/10 hover:border-zinc-800 ',
          'transition-all focus-visible:border-pink-500 focus-visible:ring-4',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
