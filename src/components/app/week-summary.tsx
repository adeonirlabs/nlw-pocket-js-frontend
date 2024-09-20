import { Plus } from 'lucide-react'
import { BrandIcon } from '~/components/icons/brand-icon'

import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'

export function WeekSummary() {
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col gap-8 px-5 py-10">
      <div className="flex items-center gap-2">
        <BrandIcon className="size-6" />
        <span className="font-semibold text-lg">12 a 18 de Maio</span>
        <Dialog.Trigger className="ml-auto" asChild>
          <Button size="sm">
            <Plus className="size-4" /> Cadastrar meta
          </Button>
        </Dialog.Trigger>
      </div>
    </div>
  )
}
