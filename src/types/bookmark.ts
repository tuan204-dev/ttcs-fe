import { IJob } from "./job";

export interface IBookmark {
    _id: string;
    jobId: IJob;
    workerId: string;
    createdAt: string;
    updatedAt: string;
}