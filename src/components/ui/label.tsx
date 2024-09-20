import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: don't need for this component
    <label
      className={cn(
        'font-medium text-sm leading-normal tracking-tight',
        className
      )}
      {...props}
    />
  )
}

export { Label }
