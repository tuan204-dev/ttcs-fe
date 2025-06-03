import { JobType, RecruitingProgress, RecruitingStatus } from "@/constants/enum";
import { IRecruiter, IUser } from "./user";


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
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    companyId?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IRecruiting {
    _id?: string
    jobId?: string
    job?: IJob
    progress: RecruitingProgress
    lastMessage: IMessage
    createdAt?: Date
    updatedAt?: Date
}

export enum SENDER_TYPE {
    WORKER = 'worker',
    RECRUITER = 'recruiter',
}

export interface IMessage {
    _id?: string
    senderType: SENDER_TYPE
    content: string
    createdAt: Date
}
export interface IRecruitingDetail {
    _id: string
    progress: RecruitingProgress
    readMessageId: string | null
    messages: IMessage[]
    lastMessage: IMessage
    createdAt: Date
    updatedAt: Date
    job: IJob
    worker: IUser
}