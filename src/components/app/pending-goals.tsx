import { Plus } from 'lucide-react'

import { useGetPendingGoalsQuery } from '~/api/pending-goals'
import { Button } from '~/components/ui/button'

export function PendingGoals() {
  const { data } = useGetPendingGoalsQuery()

  if (!data) return null

  return (
    <div className="flex flex-wrap gap-3">
      {data?.map((goal) => (
        <Button key={goal.id} variant="outline">
          <Plus className="size-4 text-zinc-500" />
          {goal.title}
        </Button>
      ))}
    </div>
  )
}
