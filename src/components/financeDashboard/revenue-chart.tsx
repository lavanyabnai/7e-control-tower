"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    quarter: "Q1 2023",
    Beverages: 3.8,
    Alcohol: 2.1,
    Tobacco: 1.2,
  },
  {
    quarter: "Q2 2023",
    Beverages: 4.0,
    Alcohol: 2.3,
    Tobacco: 1.3,
  },
  {
    quarter: "Q3 2023",
    Beverages: 4.2,
    Alcohol: 2.4,
    Tobacco: 1.4,
  },
  {
    quarter: "Q4 2023",
    Beverages: 4.5,
    Alcohol: 2.6,
    Tobacco: 1.5,
  },
  {
    quarter: "Q1 2024",
    Beverages: 4.7,
    Alcohol: 2.7,
    Tobacco: 1.6,
  },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        Beverages: {
          label: "Beverages",
          color: "hsl(var(--chart-1))",
        },
        Alcohol: {
          label: "Alcohol",
          color: "hsl(var(--chart-2))",
        },
        Tobacco: {
          label: "Tobacco",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis label={{ value: "Revenue ($B)", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Beverages" stackId="a" fill="var(--color-Beverages)" />
          <Bar dataKey="Alcohol" stackId="a" fill="var(--color-Alcohol)" />
          <Bar dataKey="Tobacco" stackId="a" fill="var(--color-Tobacco)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
