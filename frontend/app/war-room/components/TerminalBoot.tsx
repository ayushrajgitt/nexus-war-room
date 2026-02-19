"use client";

import { useEffect, useState } from "react";

const lines = [
  "Booting Nexus Core...",
  "Initializing Neural Engine...",
  "Connecting AI Agents...",
  "Calibrating Campaign Modules...",
  "War Room Online."
];

export default function TerminalBoot() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-purple-500/20 rounded-xl p-6 font-mono text-green-400 text-sm">
      {visibleLines.map((line, index) => (
        <div key={index} className="animate-fadeIn">
          {">"} {line}
        </div>
      ))}
    </div>
  );
}
