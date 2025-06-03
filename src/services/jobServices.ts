import { ApiResponse } from "@/types/common";
import axiosInstance from "./axios";
import { IJob, IRecruiting, IRecruitingDetail } from "@/types/job";
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
    const { data } = await axiosInstance.post<ApiResponse<IRecruiting>>(`/job/${jobId}/apply`);

    return data.data;
}

const getAllRecruiting = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IRecruiting[]>>('/recruiting')

    return data.data;
}

const getRecruitingDetail = async (recruitingId: string) => {
    if (!recruitingId) {
        return {}
    }

    const { data } = await axiosInstance.get<ApiResponse<IRecruitingDetail>>(`/recruiting/${recruitingId}`);

    return data.data;
}

const sendMessage = async (recruitingId: string, content: string) => {
    const { data } = await axiosInstance.post(`/recruiting/worker`, { recruitingId, content });

    return data;
}

const JobService = { getJobs, getJobDetail, applyJob, getAllRecruiting, getRecruitingDetail, sendMessage }

export default JobService;