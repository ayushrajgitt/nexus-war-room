"use client";

interface AgentProps {
  name: string;
  desc: string;
}

export default function AgentCard({ name, desc }: AgentProps) {
  return (
    <div className="bg-black/40 border border-purple-500/20 rounded-2xl p-6 hover:scale-105 hover:border-purple-400 transition-all duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-purple-400 mb-2">
        {name}
      </h3>
      <p className="text-gray-400 text-sm">
        {desc}
      </p>
      <div className="mt-4 text-xs text-green-400">
        ● Online
      </div>
    </div>
  );
}
