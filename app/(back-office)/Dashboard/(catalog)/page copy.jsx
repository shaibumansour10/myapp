import React from 'react'

export default function page() {
    return (
        <div>
            {/*header */}
            <pageHeader heading="produucts"
                href="/dashboard/products/new"
                LinkTitle="Add product" />
            {/*Table Action*/}
            {/*export// search // burk delete */}
            <div className="flex py-4 px-8 justify-between bg-slate-700 rounded-lg">
                <button>export</button>
                (/*search */)
                <button><trash /></button>
            </div>
            <h2>products</h2>
        </div>

    )
}