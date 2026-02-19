interface SidebarProps {
  active: string;
  setActive: (section: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  active,
  setActive,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {

  const handleClick = (section: string) => {
    setActive(section);
    setSidebarOpen(false); // 🔥 auto close on mobile
  };

  return (
    <>
      {/* Overlay (Mobile Only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative
          z-50 md:z-auto
          h-full
          w-64
          bg-gradient-to-b from-black to-gray-900
          border-r border-white/10
          p-6
          space-y-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h2 className="text-2xl font-bold text-purple-400">NEXUS</h2>

        <div className="space-y-6 mt-12 text-lg">

          <div
            onClick={() => handleClick("dashboard")}
            className={`cursor-pointer transition-all duration-300 ${
              active === "dashboard"
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Dashboard
          </div>

          <div
            onClick={() => handleClick("agents")}
            className={`cursor-pointer transition-all duration-300 ${
              active === "agents"
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Agents
          </div>

          <div
            onClick={() => handleClick("analytics")}
            className={`cursor-pointer transition-all duration-300 ${
              active === "analytics"
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Analytics
          </div>

          <div
            onClick={() => handleClick("settings")}
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
    </>
  );
}
