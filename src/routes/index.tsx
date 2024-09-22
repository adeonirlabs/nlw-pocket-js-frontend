import { createFileRoute } from '@tanstack/react-router'

import { useGetWeekSummaryQuery } from '~/api/week-summary'
import { CreateGoal } from '~/components/app/create-goal'
import { EmptyGoals } from '~/components/app/empty-goals'
import { WeekSummary } from '~/components/app/week-summary'
import { Dialog } from '~/components/ui/dialog'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data: summary } = useGetWeekSummaryQuery()

  return (
    <Dialog>
      {summary?.totalCount ? <WeekSummary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
