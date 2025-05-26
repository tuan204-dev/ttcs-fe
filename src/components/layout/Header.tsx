'use client'
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
    FiBookmark,
    FiHome,
    FiMessageSquare,
    FiUser,
} from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const pathname = usePathname();

    const menus = useMemo(() => [
        {
            title: 'Home',
            icon: <FiHome className='text-[22px]' />,
            path: '/',
            active: pathname === '/',
        },
        {
            title: 'Bookmark',
            icon: <FiBookmark className='text-[22px]' />,
            path: '/bookmark',
            active: pathname === '/bookmark',
        },
        {
            title: 'Message',
            icon: <FiMessageSquare className='text-[22px]' />,
            path: '/message',
            active: pathname === '/message',
        },
        {
            title: 'Profile',
            icon: <FiUser className='text-[22px]' />,
            path: '/profile',
            active: pathname === '/profile',
        },
    ], [pathname]);

    return (
        <header className="h-16 fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 pl-5 flex justify-between items-center">
            <Link href={'/'}><h1 className='text-3xl font-bold text-blue-600'>Career Contact</h1></Link>
            <div className='flex items-center gap-x-3 h-full'>
                {
                    menus.map((item) => (
                        <Link key={item.path} href={item.path} className={cn('flex items-center gap-x-3 h-full px-3 cursor-pointer text-gray-950', {
                            'text-blue-600 font-bold': item.active,
                        })}>
                            {item.icon}
                            <span className='font-bold'>{item.title}</span>
                        </Link>
                    ))
                }

                <button className='text-2xl px-4'>
                    <RxHamburgerMenu />
                </button>
            </div>
        </header>
    )
}

export default Header