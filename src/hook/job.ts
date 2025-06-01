import JobService from "@/services/jobServices"
import useSWR from "swr"


export const useJobs = (params?: any) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/job?${JSON.stringify(params)}`, () => JobService.getJobs(params))

    return {
        jobs: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}