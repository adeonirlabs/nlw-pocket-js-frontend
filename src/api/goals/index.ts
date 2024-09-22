import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { api } from '~/api'

import { summaryKeys } from '~/api/summary'
import type { CompleteGoalRequest, PendingGoalsResponse } from './types'

const endpoint = {
  pendingGoals: () => 'pending-goals',
  completeGoal: () => 'complete-goal',
}

const pendingGoalsKeys = {
  all: ['pending-goals'] as const,
  lists: () => [...pendingGoalsKeys.all, 'list'] as const,
  list: (filters: string) =>
    [...pendingGoalsKeys.lists(), { filters }] as const,
  details: () => [...pendingGoalsKeys.all, 'detail'] as const,
  detail: (id: number) => [...pendingGoalsKeys.details(), id] as const,
}

export const goalsApi = {
  usePendingGoalsQuery: () => {
    return useQuery({
      queryKey: pendingGoalsKeys.all,
      queryFn: async () =>
        await api.get<PendingGoalsResponse>(endpoint.pendingGoals()).json(),
    })
  },
  useCompleteGoalMutation: () => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationKey: ['complete-goal'],
      mutationFn: async (goalId: string) =>
        await api
          .post<CompleteGoalRequest>(endpoint.completeGoal(), {
            json: { goalId },
          })
          .json(),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: pendingGoalsKeys.all })
        queryClient.invalidateQueries({ queryKey: summaryKeys.all })
      },
    })
  },
}

export const { usePendingGoalsQuery, useCompleteGoalMutation } = goalsApi
