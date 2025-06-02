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

export const useJobDetail = (jobId: string) => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`/job/${jobId}`, () => JobService.getJobDetail(jobId))

    return {
        job: data,
        error,
        isLoading,
        isValidating,
        mutate
    }
}

export const useRecruiting = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/recruiting', JobService.getAllRecruiting)

    return {
        recruiting: data ?? [],
        error,
        isLoading,
        isValidating,
        mutate
    }
}