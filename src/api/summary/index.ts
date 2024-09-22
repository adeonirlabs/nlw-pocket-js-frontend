import { useQuery } from '@tanstack/react-query'

import { api } from '~/api'

import type { SummaryResponse } from './types'

const endpoint = {
  weekSummary: () => 'week-summary',
}

export const summaryKeys = {
  all: ['week-summary'] as const,
  lists: () => [...summaryKeys.all, 'list'] as const,
  list: (filters: string) => [...summaryKeys.lists(), { filters }] as const,
  details: () => [...summaryKeys.all, 'detail'] as const,
  detail: (id: number) => [...summaryKeys.details(), id] as const,
}

const summaryApi = {
  useSummaryQuery: () => {
    return useQuery({
      queryKey: summaryKeys.all,
      queryFn: async () =>
        await api.get<SummaryResponse>(endpoint.weekSummary()).json(),
      staleTime: 1000 * 60, // 1 minute
    })
  },
}

export const { useSummaryQuery } = summaryApi
