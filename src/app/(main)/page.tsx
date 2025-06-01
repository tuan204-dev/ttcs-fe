'use client'
import Filter from '@/components/Filter';
import JobCard from '@/components/JobCard';
import { useJobs } from '@/hook/job';
import { Pagination } from 'antd';
import { useState } from 'react';


const HomePage = () => {
    const [filterData, setFilterData] = useState({})
    const { jobs } = useJobs(filterData)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <Filter setFilterData={setFilterData} />
                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {jobs.length ?? 0} Jobs Available
                        </h2>
                        {/* <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                            <Select
                                defaultValue={'1'}
                                className='w-[140px]'
                                options={[
                                    {
                                        label: 'Most Relevant',
                                        value: '1',
                                    },
                                    {
                                        label: 'Newest',
                                        value: '2',
                                    },
                                    {
                                        label: 'Highest Salary',
                                        value: '3',
                                    }
                                ]}
                            />
                        </div> */}
                    </div>
                    <div className="space-y-4" id="jobListings">
                        {
                            jobs.map((job) => (
                                <JobCard key={job._id} job={job} />
                            ))
                        }
                    </div>

                    {/* <div className='flex justify-center py-5 w-full'>
                        <Pagination defaultCurrent={1} total={50} />
                    </div> */}
                </main>
            </div>
        </div>

    )
}

export default HomePage