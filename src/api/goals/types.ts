export type CreateGoalRequest = {
  title: string
  desiredFrequency: number
}

export type PendingGoalsResponse = {
  id: string
  title: string
  desiredFrequency: number
  completedCount: number
}[]

export type CompleteGoalRequest = {
  goalId: string
}
