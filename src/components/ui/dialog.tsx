import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '~/lib/utils'

function Root(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Dialog {...props} />
}

function Trigger(props: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.DialogTrigger {...props} />
}

function Close(props: DialogPrimitive.DialogCloseProps) {
  return <DialogPrimitive.DialogClose {...props} />
}

function Portal(props: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.DialogPortal {...props} />
}

function Overlay({ className, ...props }: DialogPrimitive.DialogOverlayProps) {
  return (
    <DialogPrimitive.DialogOverlay
      className={cn(
        'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm',
        className
      )}
      {...props}
    />
  )
}

function Content({ className, ...props }: DialogPrimitive.DialogContentProps) {
  return (
    <Portal>
      <Overlay />

      <DialogPrimitive.DialogContent
        className={cn(
          [
            'fixed top-0 right-0 bottom-0 z-50 h-screen w-100',
            'border-zinc-900 border-l bg-zinc-950 p-8',
          ],
          className
        )}
        {...props}
      />
    </Portal>
  )
}

function Title({ className, ...props }: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.DialogTitle
      className={cn('font-semibold text-lg', className)}
      {...props}
    />
  )
}

function Description({
  className,
  ...props
}: DialogPrimitive.DialogDescriptionProps) {
  return (
    <DialogPrimitive.DialogDescription
      className={cn('text-sm text-zinc-400 leading-relaxed', className)}
      {...props}
    />
  )
}

const Dialog = Root as typeof Root & {
  Trigger: typeof Trigger
  Close: typeof Close
  Portal: typeof Portal
  Overlay: typeof Overlay
  Content: typeof Content
  Title: typeof Title
  Description: typeof Description
}

Dialog.Trigger = Trigger
Dialog.Close = Close
Dialog.Portal = Portal
Dialog.Overlay = Overlay
Dialog.Content = Content
Dialog.Title = Title
Dialog.Description = Description

export type DialogType = typeof Dialog

export { Dialog }
