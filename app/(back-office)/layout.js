import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex'>
            {/*sidebar */}
            <sidebar />
            {/*main body */}
            <div className="lg:ml-64 ml-0 flex-grow bg-slate-900 min-h-screen">
                {/*header */}
                <Navbar />
                {/*main */}
                <main className='p-8 bg-slate-900 text-slate-50 min-height-screen mt-16'>{children}</main>

            </div>

        </div>
    )
}

