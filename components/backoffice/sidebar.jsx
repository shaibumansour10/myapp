'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
export default function sidebar() {
    const sidebarLinks = [
        {
            title; "customers",
            icon: User2,
            href: "/Dashboard/costomers"
        },
        {
            title; "markets",
            icon: warehouse,
            href: "/Dashboard/markets"
        },
        {
            title; "farmers",
            icon: ,
            href: "/Dashboard/farmers"
        },
        {
            title; "orders",
            icon: User2,
            href: "/Dashboard/orders"
        },
        {
            title; "our staff",
            icon: User2,
            href: "/Dashboard/our staff"
        },
        {
            title; "setting",
            icon: User2,
            href: "/Dashboard/setting"
        },
        {
            title; "online store",
            icon: User2,
            href: "/Dashboard/online store"
        },
    ]
    return (
        <div className='dark:bg-slate-700 bg-white  space-y-6 w-64 h-screen px-6 py-4 dark:text-slate-50 text-slate-800
         p-3 fixed left-0 top-0 shadow-md'>
            <link className='' href='#'>
                <image src={logo} alt="mansour" className="w-36" />
            </link>
            <div className='space-y-3 flex flex-col mt-14'>
                <link href='#' className="flex iterm center space-x-3 py-2 px-6 border-l-4 border-green-600">
                    <span><layoutGrid /></span>
                    <span>Dashboard</span>
                </link>
                <link href='#' className="flex iterm center space-x-3 py-2 px-6 border-l-4 border-green-600">
                    <span><layoutGrid /></span>
                </link>
                <link href='#' className="flex iterm center space-x-3 py-2 px-6 border-l-4 border-green-600">
                    <span><slack /></span>
                    <span>customers</span>
                    <span>catalogue</span>
                </link>
                {sidebarLinks.map((item, i) => {
                    const Icon = item.href
                    return (
                        <link
                            key={i}
                            href={item.href}
                            className={item.href == Pathname ? "flex iterm center space-x-3 py-2 px-6 border-l-4 border-green-600"
                                : "flex iterm center space-x-3 py-2 px-6 "
                            }>


                            <span><Icon /></span>
                            <span>{item.title}</span>
                        </link

        )
                })
                    < div className="py-2 px-6">
                <button className="bg-lime-800 rounded-md flex item-center space-x-3 px-6 py-3">
                    <logout />
                    <span>logout</span>
                </button>

            </div>
                }
        </div>
        </div >
    )
}