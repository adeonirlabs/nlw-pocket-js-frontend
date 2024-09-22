import { useQuery } from '@tanstack/react-query'

import { api } from '~/api'

import type { PendingGoalsResponse } from './types'

const endpoint = {
  pendingGoals: () => 'pending-goals',
}

const pendingGoalsKeys = {
  all: ['pending-goals'] as const,
  lists: () => [...pendingGoalsKeys.all, 'list'] as const,
  list: (filters: string) =>
    [...pendingGoalsKeys.lists(), { filters }] as const,
  details: () => [...pendingGoalsKeys.all, 'detail'] as const,
  detail: (id: number) => [...pendingGoalsKeys.details(), id] as const,
}

const pendingGoalsApi = {
  useGetPendingGoalsQuery: () => {
    return useQuery({
      queryKey: pendingGoalsKeys.all,
      queryFn: async () =>
        await api.get<PendingGoalsResponse>(endpoint.pendingGoals()).json(),
    })
  },
}

export const { useGetPendingGoalsQuery } = pendingGoalsApi
