import React from 'react'

export default function Navbar() {
    return (<div className='flex items-center justify-between bg-slate-800 text-slate-50 h-16 p-x-8 fixed top-0 w-full ml-60'>
        {/*Icon */}
        <button><menu></button>
        {/* 3 Icons */}
        <div className="flex space-x-3">
            <button><Sun></button>
            <button><Bell></button>
            <button><User></button>
        </div>
    </div>

    )
}