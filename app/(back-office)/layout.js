import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex'>
            {/*sidebar */}
            <div className>
                sidebar
            </div>
            {/*main body */}
            <div className=''>
                {/*header */}
                <h2>Nav Bar</h2>
                {/*main */}
                <main>{children}</main>

            </div>

        </div>
    )
}

