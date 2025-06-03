'use client';

import MainChat from '@/components/message/MainChat';
import RecruitingItem from '@/components/message/RecruitingItem';
import { RecruitingProgress, RecruitingProgressLabel } from '@/constants/enum';
import { useRecruiting, useRecruitingDetail } from '@/hook/job';
import { updateRecruiting } from '@/redux/slices/recruitingSlice';
import { useAppSelector } from '@/redux/store';
import { IRecruiting } from '@/types/job';
import cn from '@/utils/cn';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';

const ChatPage = () => {
    const { recruiting } = useRecruiting();
    const selectedRecruiting = useAppSelector((state) => state.recruiting.selectedRecruiting);
    const { recruitingDetail } = useRecruitingDetail(selectedRecruiting?._id ?? '');
    const dispatch = useDispatch();

    const handleClickChat = (recruiting: IRecruiting) => {
        dispatch(updateRecruiting(recruiting));
    };

    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            {/* Left Sidebar */}
            <div className="w-1/3 min-w-[330px] max-w-[430px] border-r border-gray-200 bg-white flex flex-col h-full overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
                    {/* <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-blue-600 text-white active-status">
                            All
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Unread
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Read
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Saved
                        </button>
                    </div> */}
                </div>
                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                    {/* Conversation Item 2 (Unread) */}
                    {/* <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaBriefcase className="text-blue-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Product Manager
                                    </p>
                                    <span className="text-xs text-blue-600 font-medium">New</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">InnovateCorp</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Thanks for applying! Could you share some examples of successful
                                    products you ve managed?
                                </p>
                            </div>
                        </div>
                    </div> */}
                    {recruiting?.map((item) => (
                        <RecruitingItem
                            key={item._id}
                            recruiting={item}
                            onClick={handleClickChat}
                            isActive={selectedRecruiting?._id === item._id}
                        />
                    ))}
                </div>
                {/* Application Progress */}
                {!isEmpty(recruitingDetail) && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Application Progress</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {Object.entries(RecruitingProgressLabel).map(([key, value]) => {
                                if (key === '-1') return null; // Skip 'Rejected' status

                                return (
                                    <li
                                        key={key}
                                        className={cn('progress-step', {
                                            'text-primary font-semibold':
                                                Number(key) === Number(recruitingDetail?.progress),
                                            'text-green-500': Number(key) < Number(recruitingDetail?.progress),
                                        })}
                                    >{`${Number(key) < Number(recruitingDetail?.progress) ? '✓ ' : ''}${value}`}</li>
                                );
                            })}

                            <li
                                className={cn('progress-step', {
                                    'text-red-500 font-semibold':
                                        recruitingDetail?.progress === RecruitingProgress.REJECTED,
                                })}
                            >
                                Rejected
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Right Panel */}
            <MainChat />
        </div>
    );
};

export default ChatPage;
