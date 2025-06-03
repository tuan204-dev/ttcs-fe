'use client';
import { useBookmarks } from '@/hook/bookmark';
import { useRecruitingDetail } from '@/hook/job';
import { useAppSelector } from '@/redux/store';
import BookmarkService from '@/services/bookMarkServices';
import { formatNumber } from '@/utils/number';
import { Tag } from 'antd';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBookmark, FaMapMarkerAlt, FaRegBookmark, FaUserTie } from 'react-icons/fa';
import ChatInput from './ChatInput';
import MessageItem from './MessageItem';
import { JobType } from '@/constants/enum';

const MainChat = () => {
    const selectedRecruiting = useAppSelector((state) => state.recruiting.selectedRecruiting);
    const { bookmarks, mutate: refresh } = useBookmarks();
    const [isTogglingBookmark, setIsTogglingBookmark] = useState(false);
    const { recruitingDetail, mutate: refreshMessages } = useRecruitingDetail(selectedRecruiting?._id ?? '');

    const { job } = selectedRecruiting ?? {};

    const isBookmarked = useMemo(() => bookmarks.some(({ jobId }) => jobId._id === job?._id), [bookmarks, job?._id]);

    const jobTypeData = useMemo(() => {
        switch (job?.jobType) {
            case JobType.FULL_TIME:
                return {
                    label: 'Full Time',
                    color: 'blue',
                };
            case JobType.PART_TIME:
                return {
                    label: 'Part Time',
                    color: 'green',
                };
            case JobType.FREELANCE:
                return {
                    label: 'Freelance',
                    color: 'purple',
                };
            case JobType.CONTRACT:
                return {
                    label: 'Contract',
                    color: 'orange',
                };
        }
    }, [job?.jobType]);

    if (!selectedRecruiting) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Please select a job to view the chat.</p>
            </div>
        );
    }

    const handleBookmarkToggle = async () => {
        try {
            if (!job?._id) {
                return;
            }

            setIsTogglingBookmark(true);
            if (isBookmarked) {
                await BookmarkService.removeBookmark(job._id as string);
            } else {
                await BookmarkService.addBookmark(job._id as string);
            }
            refresh();
            toast.success(isBookmarked ? 'Bookmark removed' : 'Job bookmarked successfully');
        } catch (e) {
            console.error('Error toggling bookmark:', e);
            toast.error('Failed to toggle bookmark. Please try again later.');
        } finally {
            setIsTogglingBookmark(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
            {/* Job Summary */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-[6px]">
                        <Tag color={jobTypeData?.color} className="rounded-full">
                            {jobTypeData?.label}
                        </Tag>
                    </div>

                    <button
                        disabled={isTogglingBookmark}
                        className="text-primary text-lg"
                        onClick={handleBookmarkToggle}
                    >
                        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{job?.title}</h2>
                <div className="text-blue-600 font-medium text-lg mt-2">
                    ${formatNumber(job?.salaryRange?.min ?? 0)} - ${formatNumber(job?.salaryRange?.max ?? 0)}
                </div>
                <div className="flex items-center gap-x-4 text-sm text-gray-500 mt-2">
                    <div className="flex gap-x-2 items-center">
                        <FaMapMarkerAlt /> {job?.location}
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <FaUserTie /> {job?.recruiter?.firstName}
                    </div>
                </div>
            </div>
            {/* Messages Thread */}
            <div
                className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4 max-w-[900px] mx-auto w-full"
                id="conversation-wrapper"
            >
                {recruitingDetail?.messages?.map((message) => <MessageItem key={message._id} message={message} />)}
                <div id="last-message"></div>
            </div>
            {/* Message Input */}
            <ChatInput refresh={refreshMessages} recruitingId={selectedRecruiting?._id} />
        </div>
    );
};

export default MainChat;
