import { Gender } from "@/constants/enum"
import { ILocation } from "./ILocation"
import { ISkill } from "./skill"

export interface IUser {
    _id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    gender: Gender
    location?: ILocation
    avatar?: string
    education?: string
    skills?: ISkill[]
    isOpenToOffer?: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IRecruiter {
    _id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    gender: Gender
    avatar?: string
    createdAt: Date
    updatedAt: Date
}