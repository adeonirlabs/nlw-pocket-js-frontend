import { Plus } from 'lucide-react'

import { useCompleteGoalMutation, usePendingGoalsQuery } from '~/api/goals'
import { Button } from '~/components/ui/button'

export function PendingGoals() {
  const { data } = usePendingGoalsQuery()
  const { mutate } = useCompleteGoalMutation()

  if (!data) return null

  const handleCompleteGoal = (goalId: string) => {
    mutate(goalId)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data?.map((goal) => (
        <Button
          key={goal.id}
          variant="outline"
          disabled={goal.completedCount >= goal.desiredFrequency}
          onClick={() => handleCompleteGoal(goal.id)}
        >
          <Plus className="size-4 text-zinc-500" />
          {goal.title}
        </Button>
      ))}
    </div>
  )
}
