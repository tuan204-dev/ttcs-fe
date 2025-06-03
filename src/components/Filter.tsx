import { JobType } from '@/constants/enum';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input } from 'antd';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
    .object({
        title: z.string().optional(),
        minSalary: z.string().nullable().optional(),
        maxSalary: z.string().nullable().optional(),
        jobType: z.array(z.nativeEnum(JobType)).optional(),
    })
    .refine(
        (data) => {
            if (data.minSalary !== null && data.maxSalary !== null && data.minSalary !== '' && data.maxSalary !== '') {
                return Number(data.minSalary) <= Number(data.maxSalary);
            }
            return true;
        },
        {
            path: ['maxSalary', 'minSalary'],
            message: 'Max salary must be greater than or equal to min salary',
        }
    );

export type FilterSchema = z.infer<typeof schema>;

interface FilterProps {
    setFilterData: React.Dispatch<React.SetStateAction<any>>;
}

const Filter: FC<FilterProps> = ({ setFilterData }) => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FilterSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            minSalary: null,
            maxSalary: null,
            jobType: [],
        },
    });

    const handleClearFilters = () => {
        setFilterData({});
        reset();
    };

    return (
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md h-fit sticky top-[96px] ">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Filter Jobs</h2>
            {/* Search */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => <Input {...field} placeholder="Job title, keywords" size="large" />}
                />
            </div>
            {/* Job Category */}
            {/* <div className="mb-6">
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
            </div> */}
            {/* Location */}
            {/* <div className="mb-6">
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
            </div> */}
            {/* Salary Range */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range ($)</label>
                <div className="grid grid-cols-2 gap-x-4">
                    <Controller
                        control={control}
                        name="minSalary"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value ?? ''}
                                type="number"
                                size="large"
                                placeholder="Min"
                                status={errors.minSalary ? 'error' : ''}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="maxSalary"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value ?? ''}
                                type="number"
                                size="large"
                                placeholder="Max"
                                status={errors.maxSalary ? 'error' : ''}
                            />
                        )}
                    />
                </div>
            </div>
            {/* Job Type */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                <div className="flex flex-col gap-y-2">
                    <Controller
                        control={control}
                        name="jobType"
                        render={({ field }) => (
                            <Checkbox.Group
                                {...field}
                                className="flex flex-col gap-y-2"
                                options={[
                                    {
                                        label: 'Full Time',
                                        value: JobType.FULL_TIME,
                                    },
                                    {
                                        label: 'Part Time',
                                        value: JobType.PART_TIME,
                                    },
                                    {
                                        label: 'Freelance',
                                        value: JobType.FREELANCE,
                                    },
                                    {
                                        label: 'Contract',
                                        value: JobType.CONTRACT,
                                    },
                                ]}
                            />
                        )}
                    />
                </div>
            </div>
            {/* Experience Level */}
            {/* <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                </label>
                <Slider range defaultValue={[0, 4]} min={0} max={10} />
                <div className='flex justify-between text-xs text-gray-500'>
                    <span>0 years</span>
                    <span>5 years</span>
                    <span>10+ years</span>
                </div>
            </div> */}
            <div className="flex flex-col gap-y-3">
                <Button type="primary" onClick={handleSubmit(setFilterData)}>
                    Apply Filters
                </Button>

                <Button onClick={handleClearFilters}>Clear Filters</Button>
            </div>
        </aside>
    );
};

export default Filter;
