import { useQuery } from '@tanstack/react-query'

import { api } from '~/api'

import type { WeekSummaryResponse } from './types'

const endpoint = {
  weekSummary: () => 'week-summary',
}

const weekSummaryKeys = {
  all: ['week-summary'] as const,
  lists: () => [...weekSummaryKeys.all, 'list'] as const,
  list: (filters: string) => [...weekSummaryKeys.lists(), { filters }] as const,
  details: () => [...weekSummaryKeys.all, 'detail'] as const,
  detail: (id: number) => [...weekSummaryKeys.details(), id] as const,
}

const weekSummaryApi = {
  useGetWeekSummaryQuery: () => {
    return useQuery({
      queryKey: weekSummaryKeys.all,
      queryFn: async () =>
        await api.get<WeekSummaryResponse>(endpoint.weekSummary()).json(),
    })
  },
}

export const { useGetWeekSummaryQuery } = weekSummaryApi
