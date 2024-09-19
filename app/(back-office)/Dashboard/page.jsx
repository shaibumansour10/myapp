import React from 'react'
import LargeCards from '../../../components/backoffice/LargeCards'
import SmallCards from '../../../components/backoffice/SmallCards'
import DashboardCharts from '../../../components/backoffice/DashboardChart'

export default function heading() {
    return (
        <div>
            <heading title="dashboard overviews" />
            {/*Large cards */}
            <LargeCards />
            {/*Small cards */}
            <SmallCards />
            {/*Charts */}
            <DashboardCharts />
            {/*Recent orders table */}
            <customerDataTable />

        </div>

    )
}