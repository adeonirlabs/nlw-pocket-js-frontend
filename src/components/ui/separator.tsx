import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

function Separator({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('h-px w-full bg-zinc-900', className)} {...props} />
}

export { Separator }
