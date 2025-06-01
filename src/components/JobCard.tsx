import { JobType } from '@/constants/enum'
import { IJob } from '@/types/job'
import { formatNumber } from '@/utils/number'
import { Tag } from 'antd'
import { FC, useMemo } from 'react'
import { FaBookmark, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa'

interface JobCardProps {
    job: IJob
}

const JobCard: FC<JobCardProps> = ({ job }) => {

    const jobTypeData = useMemo(() => {
        switch (job.jobType) {
            case JobType.FULL_TIME:
                return {
                    label: 'Full Time',
                    color: 'blue'
                }
            case JobType.PART_TIME:
                return {
                    label: 'Part Time',
                    color: 'green'
                }
            case JobType.FREELANCE:
                return {
                    label: 'Freelance',
                    color: 'purple'
                }
            case JobType.CONTRACT:
                return {
                    label: 'Contract',
                    color: 'orange'
                }
        }
    }, [job.jobType])

    return (
        <div className="bg-white px-6 py-5 rounded-xl shadow border-l-4 border-green-500 hover:shadow-md transition flex flex-col">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-[6px]'>
                    <Tag color={jobTypeData.color} className='rounded-full'>{jobTypeData.label}</Tag>
                </div>

                <button className='text-primary text-lg'>
                    <FaBookmark />
                </button>
            </div>
            <div className='flex flex-col mt-2'>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {job.description}
                </p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-x-4 text-sm text-gray-500">
                        <div className="flex gap-x-2 items-center">
                            <FaMapMarkerAlt /> {job.location}
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaUserTie /> {job.recruiter?.firstName}
                        </div>
                    </div>

                    <div className="text-blue-600 font-medium">
                        ${formatNumber(job.salaryRange.min)} - ${formatNumber(job.salaryRange.max)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard