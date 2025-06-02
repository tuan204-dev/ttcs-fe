import { JobType } from '@/constants/enum'
import { useBookmarks } from '@/hook/bookmark'
import BookmarkService from '@/services/bookMarkServices'
import { IJob } from '@/types/job'
import { formatNumber } from '@/utils/number'
import { Tag } from 'antd'
import Link from 'next/link'
import { FC, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBookmark, FaMapMarkerAlt, FaRegBookmark, FaUserTie } from 'react-icons/fa'

interface JobCardProps {
    job: IJob
}

const JobCard: FC<JobCardProps> = ({ job }) => {
    const { bookmarks, mutate: refresh } = useBookmarks()
    const [isTogglingBookmark, setIsTogglingBookmark] = useState(false)

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

    const isBookmarked = useMemo(() => bookmarks.some(({ jobId }) => jobId._id === job._id), [bookmarks, job._id])

    const handleBookmarkToggle = async () => {
        try {
            setIsTogglingBookmark(true)
            if (isBookmarked) {
                await BookmarkService.removeBookmark(job._id as string)
            } else {
                await BookmarkService.addBookmark(job._id as string)
            }
            refresh()
            toast.success(isBookmarked ? 'Bookmark removed' : 'Job bookmarked successfully')
        } catch (e) {
            console.error('Error toggling bookmark:', e)
            toast.error('Failed to toggle bookmark. Please try again later.')
        } finally {
            setIsTogglingBookmark(false)
        }
    }

    return (
        <Link href={`/job/${job._id}`} className="bg-white px-6 py-5 rounded-xl shadow border-l-4 border-green-500 hover:shadow-md transition flex flex-col">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-[6px]'>
                    <Tag color={jobTypeData.color} className='rounded-full'>{jobTypeData.label}</Tag>
                </div>

                <button disabled={isTogglingBookmark} className='text-primary text-lg' onClick={handleBookmarkToggle}>
                    {
                        isBookmarked ? <FaBookmark /> : <FaRegBookmark />
                    }
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
        </Link>
    )
}

export default JobCard