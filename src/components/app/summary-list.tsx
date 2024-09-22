import dayjs from 'dayjs'
import { CheckCircle2 } from 'lucide-react'

import { useSummaryQuery } from '~/api/summary'
import type { Goal } from '~/api/summary/types'

export function SummaryList() {
  const { data } = useSummaryQuery()

  if (!data) return null

  return (
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
              {goals.map((goal: Goal, index) => {
                const time = dayjs(goal.completedAt).format('HH:mm')

                return (
                  <li
                    className="flex items-center gap-2"
                    key={`${goal.id}${index}`}
                  >
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
  )
}
