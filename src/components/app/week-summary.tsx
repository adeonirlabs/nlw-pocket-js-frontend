import { CheckCircle2, Plus } from 'lucide-react'
import { BrandIcon } from '~/components/icons/brand-icon'

import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { ProgressBar } from '~/components/ui/progress-bar'
import { Separator } from '~/components/ui/separator'

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

      <div className="flex flex-col gap-3">
        <ProgressBar value={10} max={15}>
          <ProgressBar.Indicator style={{ width: `${(10 / 15) * 100}%` }} />
        </ProgressBar>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">10/15</span>
          <span className="text-sm text-zinc-500">100%</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 5 }, (_, index) => (
          <Button key={index.toString()} variant="outline">
            <Plus className="size-4 text-zinc-500" />
            Meta {index + 1}
          </Button>
        ))}
      </div>

      <Separator />

      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-xl">Sua semana</h2>
        <div className="flex flex-col gap-4">
          <h3 className="flex items-baseline gap-1 font-medium">
            <span>Segunda-feira</span>
            <span className="text-xs text-zinc-400">(19 de Maio)</span>
          </h3>
          <ul className="flex flex-col gap-3">
            {Array.from({ length: 5 }, (_, index) => (
              <li className="flex items-center gap-2" key={index.toString()}>
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  {'  Você completou '}
                  <span className="text-zinc-100">Meta {index + 1}</span>
                  {' às '}
                  <span className="text-zinc-100">8:13</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
