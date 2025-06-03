import { COOKIES_ACCESS_TOKEN, COOKIES_REFRESH_TOKEN } from '@/constants/cookies';
import AuthServices from '@/services/authServices';
import { Drawer } from 'antd';
import { deleteCookie } from 'cookies-next';
import React, { FC } from 'react';
import toast from 'react-hot-toast';
import { MdLogout } from 'react-icons/md';

interface MenuDrawerProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const MenuDrawer: FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
    const handleLogout = async () => {
        try {
            await AuthServices.logout();
            toast.success('Logout successful');
            window.location.href = '/auth/login';
        } finally {
            deleteCookie(COOKIES_REFRESH_TOKEN);
            deleteCookie(COOKIES_ACCESS_TOKEN);
        }
    };

    return (
        <Drawer
            open={isOpen}
            onClose={onClose}
            classNames={{
                body: '!p-0',
            }}
        >
            <div className="flex flex-col gap-y-2">
                <button onClick={handleLogout} className="flex items-center gap-x-2 py-3 px-4 hover:bg-gray-50">
                    <MdLogout className="text-lg" />
                    <span>Logout</span>
                </button>
            </div>
        </Drawer>
    );
};

export default MenuDrawer;
