"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", reach: 4000 },
  { name: "Tue", reach: 5200 },
  { name: "Wed", reach: 6100 },
  { name: "Thu", reach: 7800 },
  { name: "Fri", reach: 9000 },
  { name: "Sat", reach: 12000 },
  { name: "Sun", reach: 15000 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-purple-400">
          Campaign Growth
        </h3>

        <span className="text-sm text-gray-400">
          Last 7 Days
        </span>
      </div>

      {/* IMPORTANT: Fixed Height Container */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />

            <XAxis
              dataKey="name"
              stroke="#aaa"
              tick={{ fill: "#888", fontSize: 12 }}
            />

            <YAxis
              stroke="#aaa"
              tick={{ fill: "#888", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f0f0f",
                border: "1px solid #a855f7",
                borderRadius: "8px",
                color: "#fff",
              }}
              cursor={{ stroke: "#a855f7", strokeWidth: 1 }}
            />

            <Line
              type="monotone"
              dataKey="reach"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ r: 4, fill: "#a855f7" }}
              activeDot={{ r: 6 }}
              animationDuration={1000}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
