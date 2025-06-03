'use client';
import Filter from '@/components/Filter';
import JobCard from '@/components/JobCard';
import { useJobs } from '@/hook/job';
import { Spin } from 'antd';
import { useState } from 'react';

const HomePage = () => {
    const [filterData, setFilterData] = useState({});
    const { jobs, isLoading } = useJobs(filterData);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                <Filter setFilterData={setFilterData} />
                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">{jobs.length ?? 0} Jobs Available</h2>
                    </div>
                    <div className="space-y-4" id="jobListings">
                        {isLoading ? (
                            <div className="h-[calc(100vh-200px)] grid place-items-center">
                                <Spin />
                            </div>
                        ) : (
                            jobs.map((job) => <JobCard key={job._id} job={job} />)
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;
