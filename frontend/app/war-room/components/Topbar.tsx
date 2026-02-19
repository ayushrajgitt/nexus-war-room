export default function Topbar() {
  return (
    <div className="h-16 bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8">
      <h1 className="text-xl font-semibold">War Room Dashboard</h1>

      <div className="text-sm text-gray-400">
        Agents Online: <span className="text-green-400">12</span>
      </div>
    </div>
  );
}
