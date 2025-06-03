'use client';
import JobCard from '@/components/JobCard';
import { useBookmarks } from '@/hook/bookmark';
import { Pagination } from 'antd';
import React from 'react';

const Bookmark = () => {
    const { bookmarks } = useBookmarks();

    return (
        <div className="py-8">
            <div className="space-y-4 max-w-2xl mx-auto">
                {bookmarks.map(({ jobId }) => (
                    <JobCard key={jobId._id} job={jobId} />
                ))}
            </div>
            {/* <div className='flex justify-center w-full mt-5'>
                <Pagination defaultCurrent={1} total={50} />
            </div> */}
        </div>
    );
};

export default Bookmark;
