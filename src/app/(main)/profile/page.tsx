'use client';
import { GenderLabel } from '@/constants/enum';
import { useAppSelector } from '@/redux/store';
import { formatPhoneNumber } from '@/utils/phone';
import { format } from 'date-fns';
import Image from 'next/image';
import { useMemo } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const ProfilePage = () => {
    const loginUser = useAppSelector((state) => state.auth.user);

    const birthdayString = useMemo(() => {
        try {
            return format(new Date(String(loginUser?.dateOfBirth)), 'dd-MM-yyyy')
        } catch (e) {
            console.error('Error formatting date of birth:', e);
            return '';
        }
    }, [loginUser?.dateOfBirth]);


    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <Image
                        src="https://avatar.iran.liara.run/public/35"
                        alt="Profile photo"
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                    />
                </div>
                <h1 className="text-2xl font-medium text-gray-800">{`${loginUser?.firstName} ${loginUser?.lastName}`}</h1>
                <div className="flex justify-center space-x-4 mt-2 text-gray-600 text-sm">
                    {birthdayString && <span>{`Born: ${birthdayString}`}</span>}
                    <span>{GenderLabel[loginUser?.gender ?? 0]}</span>
                </div>
                <div className="mt-2 text-gray-600">
                    <p>{loginUser?.location}</p>
                    <p>
                        {loginUser?.phone ? `${formatPhoneNumber(loginUser?.phone)} | ` : ''}
                        {loginUser?.email}
                    </p>
                </div>
            </div>
            {/* Career Objective */}
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        Career Objective
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    {loginUser?.careerOrientation}
                </p>
            </div>
            <div className="border-b border-gray-200 my-8" />
            {/* Education */}
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">Education</h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className="text-sm" />
                    </button>
                </div>
                <div className="space-y-6">
                    {loginUser?.education && <h3 className="font-medium text-gray-800">{loginUser?.education}</h3>}
                </div>
            </div>
            <div className="border-b border-gray-200 my-8" />
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">Skills</h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className="text-sm" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                    {loginUser?.skills?.map((skill, index) => (
                        <div key={index} className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}/5</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-b border-gray-200 my-8" />
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <h2 className="border-l-4 border-[#3b82f6] pl-3 text-lg font-medium text-gray-800">
                        Description
                    </h2>
                    <button className="ml-2 edit-icon">
                        <FaPencilAlt className='text-sm' />
                    </button>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    {loginUser?.careerOrientation}
                </p>
            </div>
            <div className="border-b border-gray-200 my-8" />
        </div>
    );
};

export default ProfilePage;
