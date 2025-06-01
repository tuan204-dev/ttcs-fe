import { Tag } from 'antd'
import React from 'react'
import { FaBookmark, FaBuilding, FaMapMarkerAlt, FaUserTie, FaBriefcase } from 'react-icons/fa'
import { GoPaperclip } from 'react-icons/go'

const ChatPage = () => {
    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            {/* Left Sidebar */}
            <div className="w-1/3 min-w-[330px] max-w-[430px] border-r border-gray-200 bg-white flex flex-col h-full overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
                    <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-blue-600 text-white active-status">
                            All
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Unread
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Read
                        </button>
                        <button className="status-pill px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">
                            Saved
                        </button>
                    </div>
                </div>
                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                    {/* Conversation Item 1 (Active) */}
                    <div className="p-4 border-b hover:bg-gray-50 cursor-pointer bg-[#f0f7ff] border-l-[3px] border-l-primary">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatar.iran.liara.run/public/35"
                                    alt="Recruiter"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Senior UX Designer
                                    </p>
                                    <span className="text-xs text-gray-500">2h ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">TechVision Inc.</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Hi there! We re impressed with your portfolio and would like to
                                    schedule an interview...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 2 (Unread) */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaBriefcase className="text-blue-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Product Manager
                                    </p>
                                    <span className="text-xs text-blue-600 font-medium">New</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">InnovateCorp</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Thanks for applying! Could you share some examples of successful
                                    products you ve managed?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 3 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatar.iran.liara.run/public/35"
                                    alt="Recruiter"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Frontend Developer
                                    </p>
                                    <span className="text-xs text-gray-500">1d ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">DigitalAgency LLC</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    We d like to proceed with a technical interview. Are you available
                                    next Wednesday at 2pm?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 4 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaBuilding className="text-purple-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Data Scientist
                                    </p>
                                    <span className="text-xs text-gray-500">2d ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">AnalyticsPro</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Our team reviewed your case study and would love to discuss your
                                    approach in more detail.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 5 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatar.iran.liara.run/public/35"
                                    alt="Recruiter"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Marketing Director
                                    </p>
                                    <span className="text-xs text-gray-500">1w ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">BrandGrowth Inc.</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Congratulations! We re pleased to offer you the position. Please
                                    review the attached offer...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 2 (Unread) */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaBriefcase className="text-blue-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Product Manager
                                    </p>
                                    <span className="text-xs text-blue-600 font-medium">New</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">InnovateCorp</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Thanks for applying! Could you share some examples of successful
                                    products you ve managed?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 3 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatar.iran.liara.run/public/35"
                                    alt="Recruiter"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Frontend Developer
                                    </p>
                                    <span className="text-xs text-gray-500">1d ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">DigitalAgency LLC</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    We d like to proceed with a technical interview. Are you available
                                    next Wednesday at 2pm?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 4 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    <FaBuilding className="text-purple-600" />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Data Scientist
                                    </p>
                                    <span className="text-xs text-gray-500">2d ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">AnalyticsPro</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Our team reviewed your case study and would love to discuss your
                                    approach in more detail.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Conversation Item 5 */}
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://avatar.iran.liara.run/public/35"
                                    alt="Recruiter"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Marketing Director
                                    </p>
                                    <span className="text-xs text-gray-500">1w ago</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">BrandGrowth Inc.</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Congratulations! We re pleased to offer you the position. Please
                                    review the attached offer...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Application Progress */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                        Application Progress
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="text-green-500">✓ Applied</li>
                        <li className="text-primary font-semibold">Document Screening</li>
                        <li className="progress-step">First Interview</li>
                        <li className="progress-step">Technical Assessment</li>
                        <li className="progress-step">Offer Received</li>
                    </ul>
                </div>
            </div>
            {/* Right Panel */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
                {/* Job Summary */}
                <div className="p-6 border-b border-gray-200">
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
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">
                        Product Manager
                    </h2>
                    <div className="text-blue-600 font-medium text-lg mt-2">
                        $110,000 - $140,000
                    </div>
                    <div className="flex items-center gap-x-4 text-sm text-gray-500 mt-2">
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
                </div>
                {/* Messages Thread */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4 max-w-[900px] mx-auto">
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Hi Alex! We re really impressed with your portfolio and experience
                                    at DesignCo. Would you be available for a quick call this week to
                                    discuss the Senior UX Designer role?
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 10:32 AM</p>
                            </div>
                        </div>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Hi Sarah, thanks for reaching out! Id be happy to chat. How about
                                Thursday afternoon? Im available between 2-4pm PST.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 11:45 AM</p>
                        </div>
                    </div>
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Thursday at 2:30pm works perfectly! Ill send you a calendar
                                    invite with the Zoom link shortly.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 12:15 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Before our call, could you share 1-2 case studies that highlight
                                    your design process from research to implementation? Particularly
                                    interested in your enterprise SaaS experience.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 12:18 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Absolutely! Ill send over two relevant case studies today. One is
                                for a financial dashboard redesign and the other is for a mobile
                                onboarding flow optimization.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 1:22 PM</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Absolutely! Ill send over two relevant case studies today. One is
                                for a financial dashboard redesign and the other is for a mobile
                                onboarding flow optimization.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 1:23 PM</p>
                        </div>
                    </div>
                    {/* System Message */}
                    <div className="text-center text-xs text-gray-500 my-4">
                        <span className="bg-gray-100 px-2 py-1 rounded">Today</span>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>Here are the case studies I mentioned</p>
                            <p className="text-xs text-blue-100 mt-1">Today 9:15 AM</p>
                        </div>
                    </div>
                </div>
                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 max-w-[900px] mx-auto w-full">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                            <GoPaperclip />
                        </button>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage