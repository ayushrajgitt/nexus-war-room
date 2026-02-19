interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  return (
    <div className="h-16 bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 md:px-8">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-gray-300 hover:text-white text-2xl"
        >
          ☰
        </button>

        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          War Room Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="text-xs md:text-sm text-gray-400">
        Agents Online: <span className="text-green-400 font-semibold">12</span>
      </div>
    </div>
  );
}
