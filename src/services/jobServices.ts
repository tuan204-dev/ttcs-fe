import { ApiResponse } from "@/types/common";
import axiosInstance from "./axios";
import { IJob, IRecruiting } from "@/types/job";
import { truncateParams } from "@/utils/truncateParams";

const getJobs = async (params: any) => {
    const { data } = await axiosInstance.get<ApiResponse<IJob[]>>('/job/worker' + truncateParams(params));

    return data.data
}

const getJobDetail = async (jobId: string) => {
    const { data } = await axiosInstance.get<ApiResponse<IJob>>(`/job/worker/${jobId}`);

    return data.data;
}

const applyJob = async (jobId: string) => {
    const { data } = await axiosInstance.post(`/job/${jobId}/apply`);

    return data;
}

const getAllRecruiting = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IRecruiting[]>>('/recruiting')

    return data.data;
}

const JobService = { getJobs, getJobDetail, applyJob, getAllRecruiting }

export default JobService;