import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex'>
            {/*sidebar */}
            <sidebar />
            {/*main body */}
            <div className='w-full '>
                {/*header */}
                <Navbar />
                {/*main */}
                <main className='p-8 bg-slate-900 text-slate-50 min-height-screen mt-16'>{children}</main>

            </div>

        </div>
    )
}

