import { ApiResponse } from '@/types/common';
import axiosInstance from './axios';
import { IBookmark } from '@/types/bookmark';

const addBookmark = async (jobId: string) => {
    await axiosInstance.post(`/bookmark/${jobId}`);
};

const removeBookmark = async (jobId: string) => {
    await axiosInstance.delete(`/bookmark/${jobId}`);
};

const getBookmarks = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IBookmark[]>>('/bookmark');

    return data.data;
};

const BookmarkService = { addBookmark, removeBookmark, getBookmarks };

export default BookmarkService;
