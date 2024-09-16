import React from 'react'

export default function sidebar() {
    return (
        <div className='bg-slate-700 space-y-6 w-60 h-screen text-slate-60 p-3 fixed left-0 top-0'>
            <link className='mb-6' href='#'>logo</link>
            <div className='space-y-3 flex flex-col'>
                <link href='#'>Dashboard</link>
                <link href='#'>catalogue</link>
                <link href='#'>customers</link>
                <link href='#'>market</link>
                <link href='#'>farmers</link>
                <link href='#'>orders</link>
                <link href='#'>staffs</link>
                <link href='#'>settings</link>
                <link href='#'>online store</link>
                <link href='#'>logo</link>
            </div>
        </div>
    )
}