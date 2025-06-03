import { ApiResponse } from '@/types/common';
import axiosInstance, { axiosNoAuth, BASE_URL } from './axios';
import { IUser } from '@/types/user';
import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { COOKIES_ACCESS_TOKEN, COOKIES_REFRESH_TOKEN } from '@/constants/cookies';

interface IRefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

const refreshToken = async (refreshToken: string) => {
    const { data } = await axiosInstance.post<ApiResponse<IRefreshTokenResponse>>(`/worker/auth/refresh`, {
        refreshToken,
    });

    return data;
};

const getUserInfo = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IUser>>('/worker/auth/info');

    return data;
};

interface ILoginReq {
    email: string;
    password: string;
}

interface ILoginRes {
    accessToken: string;
    refreshToken: string;
    worker: IUser;
}

const login = async (params: ILoginReq) => {
    const { data } = await axios.post<ApiResponse<ILoginRes>>(BASE_URL + '/worker/auth/login', { ...params });

    return data;
};

const logout = async () => {
    const refreshToken = await getCookie(COOKIES_REFRESH_TOKEN);

    await axios.post(BASE_URL + '/worker/auth/logout', {
        refreshToken,
    });

    deleteCookie(COOKIES_REFRESH_TOKEN);
    deleteCookie(COOKIES_ACCESS_TOKEN);
};

const sendRegisterMail = async (email: string) => {
    const { data } = await axiosNoAuth.post(`/worker/auth/send-mail`, { email });

    return data;
};

const registerWorker = async (params: any) => {
    const { data } = await axiosNoAuth.post(`/worker/auth/register`, params);

    return data;
};

const AuthServices = { refreshToken, getUserInfo, login, logout, sendRegisterMail, registerWorker };

export default AuthServices;
