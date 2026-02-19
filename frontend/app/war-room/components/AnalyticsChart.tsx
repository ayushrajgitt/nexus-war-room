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
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:scale-[1.01] transition duration-500">
      <h3 className="text-lg font-semibold mb-4 text-purple-400">
        Campaign Growth
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="reach"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
