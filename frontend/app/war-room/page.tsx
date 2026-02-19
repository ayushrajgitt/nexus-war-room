"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import TerminalBoot from "./components/TerminalBoot";
import StatsCard from "./components/StatsCard";
import AnalyticsChart from "./components/AnalyticsChart";
import AgentCard from "./components/AgentCard";

export default function WarRoom() {

  const [activeSection, setActiveSection] = useState("dashboard"); // ✅ INSIDE component

  return (
    <div className="flex h-screen bg-black text-white">

      <Sidebar active={activeSection} setActive={setActiveSection} />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-8 space-y-8 overflow-y-auto">

          {activeSection === "dashboard" && (
            <>
              <TerminalBoot />

              <div className="grid md:grid-cols-3 gap-6">
                <StatsCard title="Active Agents" value="12" />
                <StatsCard title="Campaign Reach" value="2.3M" />
                <StatsCard title="Conversion Rate" value="8.7%" />
              </div>

              <AnalyticsChart />
            </>
          )}

          {activeSection === "agents" && (
            <div className="grid md:grid-cols-3 gap-6">
              <AgentCard name="Research AI" desc="Market & competitor analysis engine" />
              <AgentCard name="Copy AI" desc="Generates high converting ad copy" />
              <AgentCard name="Design AI" desc="Creates creatives & thumbnails" />
              <AgentCard name="SEO AI" desc="Optimizes search ranking strategy" />
              <AgentCard name="Automation AI" desc="Deploys multi-channel campaigns" />
            </div>
          )}

          {activeSection === "analytics" && (
            <>
              <AnalyticsChart />
              <div className="bg-black/40 border border-purple-500/20 rounded-xl p-6">
                <h2 className="text-xl text-purple-400 mb-4">
                  AI Performance Insights
                </h2>
                <p className="text-gray-400">
                  Conversion velocity increased 18% in last 7 days.
                </p>
              </div>
            </>
          )}

          {activeSection === "settings" && (
            <div className="bg-black/40 border border-purple-500/20 rounded-xl p-8 space-y-6">
              <h2 className="text-xl text-purple-400">System Configuration</h2>

              <div className="flex justify-between items-center">
                <span>Enable Autonomous Mode</span>
                <div className="w-12 h-6 bg-purple-500 rounded-full cursor-pointer"></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Notification Alerts</span>
                <div className="w-12 h-6 bg-gray-600 rounded-full cursor-pointer"></div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold">
                Save Settings
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
