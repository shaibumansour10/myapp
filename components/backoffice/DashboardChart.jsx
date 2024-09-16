import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSalesProductChart from './BestsalesProductChart'

export default function DashboardCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <WeeklySalesChart />
            <BestSalesProductChart />
        </div>
    )
}