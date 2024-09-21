
import React from 'react'

export default function page() {
    return (
        <div>
            {/*header */}
            <div className="flex justify-between border-b
             border-slate-500 py-4  ">
                <Heading title="catagories" />
                <link className="item-center 
                take style of button sign with twitter in flowbite"
                    href="/dashboard/categories/new">
                    <span>Add categories </span>
                    <plus /></link>
            </div>
            {/*Table*/}
            <h2>categories</h2>
        </div>

    )
}