export type Goal = {
  id: string
  title: string
  completedAt: string
}

export type SummaryResponse = {
  completedCount: number
  totalCount: number
  goalsPerDay: Record<string, Goal[]>
}
