'use client'
import Loading from '@/components/ui/Loading'
import { JobType } from '@/constants/enum'
import { useJobDetail } from '@/hook/job'
import JobService from '@/services/jobServices'
import { formatNumber } from '@/utils/number'
import { formatPhoneNumber } from '@/utils/phone'
import { formatTime } from '@/utils/time'
import { Tag } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { FaUser } from 'react-icons/fa'

const JobDetail = () => {
    const { jobId } = useParams<{ jobId: string }>()
    const router = useRouter()

    const { job, isLoading } = useJobDetail(jobId)
    const [isApplying, setIsApplying] = useState(false)

    const jobTypeData = useMemo(() => {
        switch (job?.jobType) {
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
    }, [job?.jobType])

    if (isLoading) {
        return < Loading />
    }

    if (!isLoading && !job) {
        return <div>Job not found</div>
    }


    const handleClickApply = async () => {
        try {
            setIsApplying(true)
            await JobService.applyJob(jobId as string)
            toast.success('Application submitted successfully!')
            router.push(`/message`)
        } catch (e) {
            console.error('Error applying for job:', e)
            toast.error('Failed to apply for job. Please try again later.')
        } finally {
            setIsApplying(false)
        }
    }


    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (Job Details) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Job Basics Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {job?.title}
                                </h2>
                                <div className="flex items-center mt-2 space-x-3">
                                    <Tag color={jobTypeData?.color} className='rounded-full'>{jobTypeData?.label}</Tag>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-sm">Posted</p>
                                <p className="font-medium">{formatTime(String(job?.createdAt))}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
                                <p className="font-medium text-gray-900">
                                    {formatNumber(job?.salaryRange?.min ?? 0)} - {formatNumber(job?.salaryRange?.max ?? 0)} $/month
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                                <p className="font-medium text-gray-900">
                                    {job?.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Job Description Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Job Description
                        </h3>
                        <div className="text-gray-700">
                            <p className="mb-4">
                                {job?.description}
                            </p>
                            <h4 className="font-bold mt-6 mb-2">Responsibilities:</h4>
                            <ul className="mb-4 pl-8 list-disc">
                                <li>
                                    Coordinate internal resources and third parties/vendors for
                                    flawless execution of projects
                                </li>
                                <li>
                                    Ensure that all projects are delivered on-time, within scope and
                                    within budget
                                </li>
                                <li>
                                    Develop project scopes and objectives, involving all relevant
                                    stakeholders
                                </li>
                                <li>
                                    Measure project performance using appropriate systems, tools and
                                    techniques
                                </li>
                                <li>Report and escalate to management as needed</li>
                            </ul>
                            <h4 className="font-bold mt-6 mb-2">Requirements:</h4>
                            <ul className="mb-4 pl-8 list-disc">
                                <li>
                                    Proven working experience as a project manager in the IT sector
                                </li>
                                <li>Excellent client-facing and internal communication skills</li>
                                <li>
                                    Solid organizational skills including attention to detail and
                                    multitasking skills
                                </li>
                                <li>
                                    Strong working knowledge of project management tools (JIRA,
                                    Trello, Asana)
                                </li>
                                <li>PMP / PRINCE II certification is a plus</li>
                            </ul>
                            <h4 className="font-bold mt-6 mb-2">Benefits:</h4>
                            <ul className="mb-4 pl-8 list-disc">
                                <li>Competitive salary package</li>
                                <li>Health insurance and wellness programs</li>
                                <li>Flexible working hours and remote work options</li>
                                <li>Professional development opportunities</li>
                                <li>Dynamic and international work environment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right Column (Recruiter Info & Apply) */}
                <div className="space-y-6">
                    {/* Recruiter Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Recruiter Information
                        </h3>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                                <FaUser className="text-blue-500 text-2xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{`${job?.recruiter?.firstName} ${job?.recruiter?.lastName}`}</h4>
                                <p className="text-sm text-gray-500">HR Manager</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-sm font-medium text-gray-500">Email</h4>
                                <p className="font-medium text-gray-900">{job?.recruiter?.email}</p>
                            </div>
                            {
                                job?.recruiter?.phone && <div>
                                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                                    <p className="font-medium text-gray-900">{formatPhoneNumber(job?.recruiter?.phone)}</p>
                                </div>
                            }
                        </div>
                    </div>
                    {/* Apply Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">
                                Interested in this position?
                            </h3>
                            <p className="text-gray-600">
                                Submit your application now and well get back to you as soon as
                                possible.
                            </p>
                            <button disabled={isApplying} onClick={handleClickApply} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                                Apply Now
                            </button>
                            {/* <p className="text-sm text-gray-500 text-center">
                                Application deadline: July 15, 2023
                            </p> */}
                        </div>
                    </div>
                    {/* Quick Facts Card */}
                    {/* <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Job ID</span>
                                <span className="font-medium">PM-2023-06</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Posted</span>
                                <span className="font-medium">June 15, 2023</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Updated</span>
                                <span className="font-medium">June 20, 2023</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Applications</span>
                                <span className="font-medium">24</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Footer */}
            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>© 2023 Recruitment Platform. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default JobDetail