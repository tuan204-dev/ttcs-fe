import { Checkbox, Input, Select, Slider } from 'antd'
import React from 'react'

const Filter = () => {
    return (
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md h-fit sticky top-[96px] ">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Filter Jobs</h2>
            {/* Search */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                </label>
                <Input
                    placeholder="Job title, keywords"
                    size='large'
                />
            </div>
            {/* Job Category */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category
                </label>
                <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="label"
                    className='w-full'
                    size='large'
                    options={[
                        {
                            value: 'All Categories',
                            label: 'All Categories',
                        },
                        {
                            value: 'Technology',
                            label: 'Technology',
                        },
                        {
                            value: 'Finance',
                            label: 'Finance',
                        },
                        {
                            value: 'Healthcare',
                            label: 'Healthcare',
                        },
                        {
                            value: 'Education',
                            label: 'Education',
                        },
                        {
                            value: 'Marketing',
                            label: 'Marketing',
                        },
                    ]}
                />
            </div>
            {/* Location */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                </label>
                <Select
                    showSearch
                    placeholder="Select a location"
                    optionFilterProp="label"
                    className='w-full'
                    size='large'
                    options={[
                        {
                            value: 'All Locations',
                            label: 'All Locations',
                        },
                        {
                            value: 'Hà Nội',
                            label: 'Hà Nội',
                        },
                        {
                            value: 'Hồ Chí Minh',
                            label: 'Hồ Chí Minh',
                        },
                        {
                            value: 'Đà Nẵng',
                            label: 'Đà Nẵng',
                        },
                        {
                            value: 'Cần Thơ',
                            label: 'Cần Thơ',
                        },
                        {
                            value: 'Nha Trang',
                            label: 'Nha Trang',
                        },
                    ]}
                />
            </div>
            {/* Salary Range */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range ($)
                </label>
                <div className='grid grid-cols-2 gap-x-4'>
                    <Input
                        type='number'
                        size='large'
                        placeholder="Min"
                    />

                    <Input
                        type='number'
                        size='large'
                        placeholder="Max"
                    />
                </div>
            </div>
            {/* Job Type */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                </label>
                <div className="flex flex-col gap-y-2">
                    <Checkbox>Full time</Checkbox>
                    <Checkbox>Part time</Checkbox>
                    <Checkbox>Remote</Checkbox>
                </div>
            </div>
            {/* Experience Level */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                </label>
                <Slider range defaultValue={[0, 4]} min={0} max={10} />
                <div className='flex justify-between text-xs text-gray-500'>
                    <span>0 years</span>
                    <span>5 years</span>
                    <span>10+ years</span>
                </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                Apply Filters
            </button>
        </aside>
    )
}

export default Filter