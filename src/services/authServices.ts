import { ApiResponse } from "@/types/common";
import axiosInstance, { axiosNoAuth, BASE_URL } from "./axios";
import { IUser } from "@/types/user";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { COOKIES_REFRESH_TOKEN } from "@/constants/cookies";

interface IRefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

const refreshToken = async (refreshToken: string) => {
    const { data } = await axiosInstance.post<ApiResponse<IRefreshTokenResponse>>(`/worker/auth/refresh`, { refreshToken })

    return data;
}

const getUserInfo = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IUser>>('/worker/auth/info')

    return data
}

interface ILoginReq {
    email: string;
    password: string;
}

interface ILoginRes {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

const login = async (params: ILoginReq) => {
    const { data } = await axios.post<ApiResponse<ILoginRes>>(BASE_URL + '/worker/auth/login', { ...params })

    return data;
}

const logout = async () => {
    const refreshToken = await getCookie(COOKIES_REFRESH_TOKEN)

    await axios.post(BASE_URL + '/worker/auth/logout', {
        refreshToken
    })

    deleteCookie(COOKIES_REFRESH_TOKEN);
    deleteCookie(COOKIES_REFRESH_TOKEN);
}

const sendRegisterMail = async (email: string) => {
    const { data, status } = await axiosNoAuth.post(`/worker/auth/send-mail`, { email });

    console.log('status', status);

    return data;
}

const AuthServices = { refreshToken, getUserInfo, login, logout, sendRegisterMail }

export default AuthServices;