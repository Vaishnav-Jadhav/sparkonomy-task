import React from "react";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Line,} from "recharts";

const data = [
  { name: "Jan", income: 4000, momGrowth: 20 },
  { name: "Feb", income: 5000, momGrowth: 40 },
  { name: "Mar", income: 7000, momGrowth: 40 },
  { name: "Apr", income: 3000, momGrowth: -40 },
  { name: "May", income: 6000, momGrowth: 50 },
  { name: "Jun", income: 5000, momGrowth: -100 },
];

export function GraphSection() {
  return (
    <section className="w-full px-4 py-6">
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-4 w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <h3 className="text-gray-700 font-semibold">Income Trend</h3>
        <p className="text-gray-500 text-sm mb-4">
          Your monthly income and growth for the last 6 months.
        </p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart  data={data}  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#9333ea" tickFormatter={(val) => `$${val / 1000}k`}/>
              <YAxis  yAxisId="right"  orientation="right"  stroke="#b91c1c"  domain={[-100, 100]}  tickFormatter={(val) => `${val}%`}/>
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="income" fill="#9333ea" />
              <Line  yAxisId="right"  type="monotone"  dataKey="momGrowth"  stroke="#b91c1c"  strokeWidth={2}  dot/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
