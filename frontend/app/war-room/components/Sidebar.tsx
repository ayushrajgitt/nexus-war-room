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
    setSidebarOpen(false);
  };

  const menuItem = (label: string, key: string) => {
    const isActive = active === key;

    return (
      <div
        onClick={() => handleClick(key)}
        className={`
          relative cursor-pointer px-4 py-3 rounded-lg
          transition-all duration-300
          group
          ${isActive
            ? "bg-purple-500/10 text-purple-400 font-semibold"
            : "text-gray-400 hover:text-white hover:bg-white/5"
          }
        `}
      >
        {/* Active Indicator Bar */}
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-r-md" />
        )}

        <span className="relative z-10 tracking-wide">
          {label}
        </span>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/5 to-pink-500/5 transition-opacity duration-300" />
      </div>
    );
  };

  return (
    <>
      {/* Overlay (Mobile Only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
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
          bg-gradient-to-b from-black via-gray-950 to-black
          border-r border-purple-500/10
          p-6
          space-y-6
          backdrop-blur-xl
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
          <h2 className="text-2xl font-bold text-purple-400 tracking-wider">
            NEXUS
          </h2>
        </div>

        {/* Menu */}
        <div className="space-y-4 mt-10 text-base">
          {menuItem("Dashboard", "dashboard")}
          {menuItem("Agents", "agents")}
          {menuItem("Analytics", "analytics")}
          {menuItem("Settings", "settings")}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6 text-xs text-gray-500">
          <div className="border-t border-white/10 pt-4">
            Nexus Campaign Studio v1.0
          </div>
        </div>
      </div>
    </>
  );
}
