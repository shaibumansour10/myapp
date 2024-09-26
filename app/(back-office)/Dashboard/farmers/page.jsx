import React from "react"

export default function Coupons() {
    return (
        <div>
            {/* Header */}
           <pageHeader
           heanding="Farmers"
           href="/dashboard/farmers/new"
           linkTitle="Add Farmer"/>
            {/* Table Action */}
            <TableAction/>

            {/* Export // search // bulk Delete*/}
            <div className="py-8">
                <h2>Table</h2>
            </div>
        </div>

    ) 
}