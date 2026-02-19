interface SidebarProps {
  active: string;
  setActive: (section: string) => void;
}
export default function Sidebar({ active, setActive }: SidebarProps) {

  return (
    <div className="w-64 bg-gradient-to-b from-black to-gray-900 border-r border-white/10 p-6 space-y-6">
      <h2 className="text-2xl font-bold text-purple-400">NEXUS</h2>

     <div className="space-y-6 mt-12 text-lg">

  <div
    onClick={() => setActive("dashboard")}
    className={`cursor-pointer transition-all duration-300 ${
      active === "dashboard"
        ? "text-purple-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`}
  >
    Dashboard
  </div>

  <div
    onClick={() => setActive("agents")}
    className={`cursor-pointer transition-all duration-300 ${
      active === "agents"
        ? "text-purple-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`}
  >
    Agents
  </div>

  <div
    onClick={() => setActive("analytics")}
    className={`cursor-pointer transition-all duration-300 ${
      active === "analytics"
        ? "text-purple-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`}
  >
    Analytics
  </div>

  <div
    onClick={() => setActive("settings")}
    className={`cursor-pointer transition-all duration-300 ${
      active === "settings"
        ? "text-purple-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`}
  >
    Settings
  </div>

</div>

    </div>
  );
  

}
