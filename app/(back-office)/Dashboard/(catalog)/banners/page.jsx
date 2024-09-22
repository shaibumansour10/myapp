import React from "react"

export default function page() {
    return (
        <div>
            {/*header */}
            <pageHeader
                heading="banners"
                href="/dashboard/banner/new"
                linkTitle="Add banner" />
            {/*table action */}
            {/*Export//search//bulk Delete */}
            <TableAction />
            <div className="py-8">
                <h2>Table</h2>
            </div>

        </div>

    )
}