import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", value: 88 },
  { month: "Feb", value: 76 },
  { month: "Mar", value: 81 },
  { month: "Apr", value: 42 },
  { month: "May", value: 88 },
  { month: "Jun", value: 79 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 88 },
  { month: "Sept", value: 79 }, // Image says Sept
  { month: "Oct", value: 55 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 79 },
];

export const PerformanceBarChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-[10px] border border-figma-border shadow-sm h-full flex flex-col">
      <div className="mb-6">
        <h3 className="font-semibold text-figma-textPrimary">
          12-Month Performance
        </h3>
      </div>

      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E0E8ED"
              vertical={false}
              opacity={0.5}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8597A8", fontSize: 12 }}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8597A8", fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E0E8ED",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              cursor={{ fill: "transparent" }}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#0078D7" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              barSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
