import React from 'react'

export default function LargeCard({ className }) {
    return (
        <div className={'rounded-lg text-white shawod-md p-8 flex items-center flex-cols-2 &{data.className}'}>
            <Layers />
            <h4>{data.period}</h4>
            <h2 className='lg:text-3xl text-2xl'>tsh.{data.sales}</h2>
        </div>
    )
    i