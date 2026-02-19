interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  return (
    <div className="relative h-16 bg-black/70 backdrop-blur-xl border-b border-purple-500/10 flex items-center justify-between px-4 md:px-8">

      {/* Subtle Gradient Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-gray-300 hover:text-white text-2xl transition duration-300 hover:scale-110"
        >
          ☰
        </button>

        <h1 className="text-lg md:text-xl font-semibold tracking-wide text-white">
          War Room Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 text-xs md:text-sm text-gray-400">

        {/* Live Pulse Indicator */}
        <div className="relative flex items-center">
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <span>
          Agents Online:
          <span className="text-green-400 font-semibold ml-1">
            12
          </span>
        </span>
      </div>
    </div>
  );
}
