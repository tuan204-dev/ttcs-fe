import { JobType, RecruitingStatus } from "@/constants/enum";
import { IRecruiter } from "./user";


export interface ISalaryRange {
    min: number;
    max: number;
}

export interface IJob {
    _id?: string
    title: string
    recruitingStatus?: RecruitingStatus
    description: string
    location: string
    salaryRange: ISalaryRange
    jobType: JobType
    recruiterId?: string
    recruiter?: IRecruiter
    companyId?: string
    createdAt?: Date
    updatedAt?: Date
}