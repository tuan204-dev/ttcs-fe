import { ApiResponse } from "@/types/common";
import axiosInstance from "./axios";
import { IJob } from "@/types/job";
import { truncateParams } from "@/utils/truncateParams";

const getJobs = async (params: any) => {
    const { data } = await axiosInstance.get<ApiResponse<IJob[]>>('/job/worker' + truncateParams(params));

    return data.data
}

const JobService = { getJobs }

export default JobService;