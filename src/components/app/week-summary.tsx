import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { Plus } from 'lucide-react'

import { useSummaryQuery } from '~/api/summary'
import { PendingGoals } from '~/components/app/pending-goals'
import { SummaryList } from '~/components/app/summary-list'
import { BrandIcon } from '~/components/icons/brand-icon'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { ProgressBar } from '~/components/ui/progress-bar'
import { Separator } from '~/components/ui/separator'

dayjs.locale(ptBR)

export function WeekSummary() {
  const { data } = useSummaryQuery()

  if (!data) return null

  const firstDayOfWeek = dayjs().startOf('week').format('DD MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('DD MMM')
  const year = dayjs().year()

  const week = `${firstDayOfWeek} a ${lastDayOfWeek} de ${year}`
  const progress = Math.round((data.completedCount / data.totalCount) * 100)

  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col gap-8 px-5 py-10">
      <div className="flex items-center gap-2">
        <BrandIcon className="size-6" />
        <span className="font-semibold text-lg">{week}</span>
        <Dialog.Trigger className="ml-auto" asChild>
          <Button size="sm">
            <Plus className="size-4" /> Cadastrar meta
          </Button>
        </Dialog.Trigger>
      </div>

      <div className="flex flex-col gap-3">
        <ProgressBar value={10} max={15}>
          <ProgressBar.Indicator style={{ width: `${progress}%` }} />
        </ProgressBar>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            {data.completedCount}/{data.totalCount}
          </span>
          <span className="text-sm text-zinc-500">100%</span>
        </div>
      </div>

      <Separator />
      <PendingGoals />
      <Separator />
      <SummaryList />
    </div>
  )
}
