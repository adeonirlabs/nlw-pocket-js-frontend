import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '~/lib/utils'

function Root({ className, ...props }: ProgressPrimitive.ProgressProps) {
  return (
    <ProgressPrimitive.Progress
      className={cn('h-2 rounded-full bg-zinc-900', className)}
      {...props}
    />
  )
}

function Indicator({
  className,
  ...props
}: ProgressPrimitive.ProgressIndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      className={cn(
        'h-2 w-1/2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500',
        className
      )}
      {...props}
    />
  )
}

const ProgressBar = Root as typeof Root & {
  Indicator: typeof Indicator
}

ProgressBar.Indicator = Indicator

export { ProgressBar }
