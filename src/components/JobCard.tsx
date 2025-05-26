import { Tag } from 'antd'
import React from 'react'
import { FaBookmark, FaBuilding, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa'

const JobCard = () => {
    return (
        <div className="bg-white px-6 py-5 rounded-xl shadow border-l-4 border-green-500 hover:shadow-md transition flex flex-col">
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-x-[6px]'>
                    <Tag color='green' className='rounded-full'>Remote</Tag>
                    <Tag color='blue' className='rounded-full'>Full time</Tag>
                    <Tag color='red' className='rounded-full'>Urgent</Tag>
                </div>

                <button className='text-primary text-lg'>
                    <FaBookmark />
                </button>
            </div>
            <div className='flex flex-col mt-2'>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Product Manager
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                    Lead product development from conception to launch for our SaaS
                    platform.
                </p>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-x-4 text-sm text-gray-500">
                        <div className="flex gap-x-2 items-center">
                            <FaBuilding /> InnovateSoft
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaUserTie /> Michael Chen
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaMapMarkerAlt /> New York, NY
                        </div>
                    </div>

                    <div className="text-blue-600 font-medium">
                        $110,000 - $140,000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard