"use client";

interface AgentProps {
  name: string;
  desc: string;
}

export default function AgentCard({ name, desc }: AgentProps) {
  return (
    <div className="relative group bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(168,85,247,0.25)] hover:border-purple-500/40">

      {/* Subtle Glow Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-xl" />

      {/* Agent Name */}
      <h3 className="text-xl font-semibold text-purple-400 mb-2 relative z-10">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm relative z-10">
        {desc}
      </p>

      {/* Status + Action */}
      <div className="mt-6 flex items-center justify-between relative z-10">

        {/* Animated Online Indicator */}
        <div className="flex items-center gap-2 text-xs text-green-400">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Online
        </div>

        {/* Action Button */}
        <button className="text-xs px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition duration-300">
          Manage
        </button>

      </div>
    </div>
  );
}
