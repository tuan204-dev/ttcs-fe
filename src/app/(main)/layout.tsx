import Header from '@/components/layout/Header'
import AuthHoc from '@/hoc/AuthHoc'
import React, { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthHoc>
            <main>
                <Header />
                <div className='mt-16'>{children}</div>
            </main>
        </AuthHoc>
    )
}

export default MainLayout