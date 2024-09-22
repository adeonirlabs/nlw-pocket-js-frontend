import { useQuery } from '@tanstack/react-query'

import { api } from '~/api'

import type { PendingGoalsResponse } from './types'

const endpoint = {
  pendingGoals: () => 'pending-goals',
}

const goalsKeys = {
  all: ['pending-goals'] as const,
  lists: () => [...goalsKeys.all, 'list'] as const,
  list: (filters: string) => [...goalsKeys.lists(), { filters }] as const,
  details: () => [...goalsKeys.all, 'detail'] as const,
  detail: (id: number) => [...goalsKeys.details(), id] as const,
}

const goalsApi = {
  usePendingGoalsQuery: () => {
    return useQuery({
      queryKey: goalsKeys.all,
      queryFn: async () =>
        await api.get<PendingGoalsResponse>(endpoint.pendingGoals()).json(),
    })
  },
}

export const { usePendingGoalsQuery } = goalsApi
