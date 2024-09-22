type Goal = {
  id: string
  title: string
  completedAt: string
}

export type WeekSummaryResponse = {
  completedCount: number
  totalCount: number
  goalsPerDay: Record<string, Goal[]>
}
