import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { CheckCircle2, Plus } from 'lucide-react'

import { useGetWeekSummaryQuery } from '~/api/week-summary'
import type { Goal } from '~/api/week-summary/types'
import { BrandIcon } from '~/components/icons/brand-icon'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { ProgressBar } from '~/components/ui/progress-bar'
import { Separator } from '~/components/ui/separator'

dayjs.locale(ptBR)

export function WeekSummary() {
  const { data } = useGetWeekSummaryQuery()

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
        {Object.entries(data.goalsPerDay).map(([day, goals]) => {
          const dayOfWeek = dayjs(day).format('dddd')
          const dayOfMonth = dayjs(day).format('DD[ de ]MMMM')

          return (
            <div className="flex flex-col gap-4" key={day}>
              <h3 className="flex items-baseline gap-1 font-medium">
                <span className="capitalize">{dayOfWeek}</span>
                <span className="text-xs text-zinc-400">({dayOfMonth})</span>
              </h3>
              <ul className="flex flex-col gap-3">
                {goals.map((goal: Goal) => {
                  const time = dayjs(goal.completedAt).format('HH:mm')

                  return (
                    <li className="flex items-center gap-2" key={goal.id}>
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        {'  Você completou '}
                        <span className="text-zinc-100">{goal.title}</span>
                        {' às '}
                        <span className="text-zinc-100">{time}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
