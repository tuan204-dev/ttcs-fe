import { FaArrowRightLong } from 'react-icons/fa6';
import { IRecruiting, SENDER_TYPE } from '@/types/job';
import cn from '@/utils/cn';
import { formatTime } from '@/utils/time';
import Image from 'next/image';
import React, { FC } from 'react';

interface RecruitingItemProps {
    recruiting: IRecruiting;
    onClick?: (recruiting: IRecruiting) => void;
    isActive?: boolean;
}

const RecruitingItem: FC<RecruitingItemProps> = ({ recruiting, onClick, isActive }) => {
    const handleClick = () => {
        onClick?.(recruiting);
    };

    return (
        <div
            onClick={handleClick}
            className={cn('p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer', {
                'bg-[#f0f7ff] border-l-[3px] border-l-primary': isActive,
            })}
        >
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src="https://avatar.iran.liara.run/public/35"
                        alt="Recruiter"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-gray-900 line-clamp-1">{recruiting?.job?.title}</p>
                        {recruiting?.lastMessage?.createdAt && (
                            <span className="text-xs text-gray-500">
                                {formatTime(String(recruiting?.lastMessage?.createdAt))}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-1">{recruiting?.job?.recruiter?.firstName}</p>
                    <div
                        className={cn('grid gap-x-1 items-center mt-1', {
                            'grid-cols-[20px_1fr]': recruiting?.lastMessage?.content,
                        })}
                    >
                        <div className="text-sm translate-y-[1px]">
                            {recruiting?.lastMessage?.content && (
                                <FaArrowRightLong
                                    className={cn('text-blue-400', {
                                        'rotate-180 text-green-400':
                                            recruiting?.lastMessage?.senderType === SENDER_TYPE.RECRUITER,
                                    })}
                                />
                            )}
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-1 leading-[1]">
                            {recruiting?.lastMessage?.content || 'No messages yet'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruitingItem;
