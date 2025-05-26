import JobCard from '@/components/JobCard'
import { Pagination } from 'antd'
import React from 'react'

const Bookmark = () => {
    return (
        <div className='py-8'>
            <div className='space-y-4 max-w-2xl mx-auto'>
                {
                    Array(10).fill(0).map((_, index) => (
                        <JobCard key={index} />
                    ))
                }


            </div>
            <div className='flex justify-center w-full mt-5'>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default Bookmark