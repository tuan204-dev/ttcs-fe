import Header from '@/components/layout/Header'
import React, { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Header />
            <div className='mt-16'>{children}</div>
        </main>
    )
}

export default MainLayout