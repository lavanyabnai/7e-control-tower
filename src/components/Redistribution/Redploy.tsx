'use client'

import React, { useState } from 'react'
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { AgChartsReact } from 'ag-charts-react'
import { generatedDeficitData, generatedInventoryExcess } from './excessDeficit'
import type { AgChartOptions } from 'ag-charts-community'

const inventory = [
    { title: 'SKU-775833', location: 'Location016', deficit: '1.9M', percent: 9 },
    { title: 'SKU-569018', location: 'Location017', deficit: '0.6M', percent: 20 },
    { title: 'SKU-166046', location: 'Location018', deficit: '1.8M', percent: 58 },
    { title: 'SKU-144887', location: 'Location019', deficit: '0.4M', percent: 76 },
]

const deficit = [...inventory]

const buildBarOptions = (
    data: { title: string; percent: number }[],
    yName: string,
    color: string
): AgChartOptions => ({
    data: data.flatMap((d) =>
        'children' in (d as any)
            ? (d as any).children
            : [d]
    ),
    series: [
        {
            type: 'bar',
            xKey: 'title',
            yKey: 'percent',
            yName,
            fill: color,
            cornerRadius: 4,
        },
    ],
    axes: [
        { type: 'category', position: 'bottom', label: { rotation: -45, fontSize: 10 } },
        { type: 'number', position: 'left', title: { text: yName } },
    ],
    background: { fill: 'transparent' },
})

export default function Redploy() {
    const [excessOptions] = useState<AgChartOptions>(() =>
        buildBarOptions(generatedInventoryExcess as any, 'Excess %', '#43A047')
    )
    const [deficitOptions] = useState<AgChartOptions>(() =>
        buildBarOptions(generatedDeficitData as any, 'Deficit %', '#FF5722')
    )

    return (
        <div className="bg-white rounded-b-lg border w-full">
            <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4">
                {/* Excess Section */}
                <div className="w-full bg-white rounded-b-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Excess</TableHead>
                                <TableHead>Percent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inventory.map((item) => (
                                <TableRow key={item.title}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.deficit}</TableCell>
                                    <TableCell>
                                        <Progress indicatorColor="bg-green-400" value={item.percent} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="w-full h-[400px] mt-4">
                        <AgChartsReact options={excessOptions} />
                    </div>
                </div>

                {/* Deficit Section */}
                <div className="w-full bg-white rounded-b-md border mt-8 lg:mt-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Deficit</TableHead>
                                <TableHead>Percent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {deficit.map((item) => (
                                <TableRow key={item.title}>
                                    <TableCell className="font-medium">{item.title}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.deficit}</TableCell>
                                    <TableCell>
                                        <Progress indicatorColor="bg-red-400" value={item.percent} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="w-full h-[400px] mt-4">
                        <AgChartsReact options={deficitOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}
