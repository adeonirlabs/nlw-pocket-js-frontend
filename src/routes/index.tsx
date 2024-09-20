import { createFileRoute } from '@tanstack/react-router'

import { CreateGoal } from '~/components/app/create-goal'
// import { EmptyGoals } from '~/components/app/empty-goals'
import { WeekSummary } from '~/components/app/week-summary'
import { Dialog } from '~/components/ui/dialog'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <WeekSummary />
      <CreateGoal />
    </Dialog>
  )
}
