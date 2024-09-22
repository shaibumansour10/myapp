import React from "react"

export default function Coupons() {
    return (
        <div>
            {/* Header */}
            <pageHeader
                heanding="Coupons"
                href="/dashboard/coupons/new"
                linkTitle="Add coupons" />
            {/* Table Action */}
            <TableAction />

            {/* Export // search // bulk Delete*/}
            <div className="py-8">
                <h2>Table</h2>
            </div>
        </div>

    )
}