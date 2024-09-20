import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle } from 'lucide-react'

import { cn } from '~/lib/utils'

function Root({ className, ...props }: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.RadioGroup
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function Item({
  className,
  ...props
}: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      className={cn(
        'group flex items-center justify-between rounded-lg border ',
        'border-zinc-900 bg-black px-4 py-2.5 outline-none ring-pink-500/10 ',
        'hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ',
        'data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500/5',
        className
      )}
      {...props}
    />
  )
}

function Indicator() {
  return (
    <>
      <Circle className="size-4 text-zinc-600 group-data-[state=checked]:hidden" />
      <CheckCircle2 className="hidden size-4 text-pink-500 group-data-[state=checked]:inline" />
    </>
  )
}

const RadioGroup = Root as typeof Root & {
  Item: typeof Item
  Indicator: typeof Indicator
}

RadioGroup.Item = Item
RadioGroup.Indicator = Indicator

export { RadioGroup }
