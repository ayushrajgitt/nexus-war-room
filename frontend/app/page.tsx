"use client";

import { useState, useEffect } from "react";

const backgrounds = Array.from({ length: 18 }, (_, i) => `/bg${i + 1}.jpg`);

export default function Home() {
  const [industry, setIndustry] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [launching, setLaunching] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // Footer particles (safe for hydration)
  const [footerParticles, setFooterParticles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate footer particles only on client
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }));
    setFooterParticles(generated);
  }, []);

  const launchWarRoom = () => {
    if (!industry || !audience || !goal) return;

    setLaunching(true);

    setTimeout(() => {
      setLaunching(false);
      alert("🚀 War Room Activated!");
    }, 3500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white flex flex-col items-center justify-center px-6">

      {/* Background */}
      <div
  className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out"
  style={{
    backgroundImage: `url(${backgrounds[bgIndex]})`,
    transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)`,
  }}
/>


      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />

      {/* HERO */}
      <div className="text-center max-w-4xl">

        <div
          className={`flex items-center justify-center gap-6 mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <img
            src="/logo.svg"
            alt="Nexus Logo"
            className="w-24 h-24 hover:scale-110 transition duration-700"
          />

          <h1 className="relative text-6xl md:text-7xl font-black tracking-widest glow-pulse">
            <span className="absolute inset-0 text-black opacity-60 translate-x-[4px] translate-y-[4px]">
              NEXUS
            </span>
            <span className="bg-gradient-to-b from-purple-200 via-pink-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(236,72,153,0.6)]">
              NEXUS
            </span>
          </h1>
        </div>

        {mounted && (
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {"AUTONOMOUS".split("").map((l, i) => (
              <span key={i} className="letter text-white" style={{ animationDelay: `${i * 0.05}s` }}>
                {l}
              </span>
            ))}
            <br />
            {"MARKETING ENGINE".split("").map((l, i) => (
              <span
                key={i}
                className="letter bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
                style={{ animationDelay: `${i * 0.05 + 0.6}s` }}
              >
                {l}
              </span>
            ))}
          </h2>
        )}

        <p className={`text-gray-300 text-lg mb-14 transition-all duration-1000 delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          Research. Design. Write. Launch.
          AI agents working together inside your War Room.
        </p>

        {/* SEARCH AREA (UNCHANGED) */}
        <div className={`w-full max-w-2xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/15 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-8 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}>

          <div>
            <label className="block text-sm text-gray-300 font-semibold mb-3 tracking-wide">
              Industry / Brand
            </label>
            <input
              type="text"
              placeholder="e.g. Sustainable Fashion, AI Startup"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 italic backdrop-blur-md focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 font-semibold mb-3 tracking-wide">
              Target Audience
            </label>
            <input
              type="text"
              placeholder="e.g. Gen-Z Creators, Tech Enthusiasts"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 italic backdrop-blur-md focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 font-semibold mb-3 tracking-wide">
              Primary Goal
            </label>
            <input
              type="text"
              placeholder="e.g. Increase Sales, Launch Product"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 italic backdrop-blur-md focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all duration-300"
            />
          </div>

          <button
            onClick={launchWarRoom}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 font-bold text-lg tracking-wide hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          >
            🚀 Launch War Room
          </button>
        </div>
      </div>

      {/* PREMIUM ENTERPRISE FOOTER */}
      <footer className="relative w-full mt-32 py-20 px-8 bg-black/70 backdrop-blur-xl border-t border-white/10">

        {/* Glow Border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse" />

        {/* Floating Footer Particles */}
        {footerParticles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">

          <div className="space-y-4 hover-lift">
            <h3 className="text-xl font-bold text-white">NEXUS</h3>
            <p className="text-gray-400 text-sm">
              Autonomous AI Marketing Infrastructure.
              Built for modern enterprises.
            </p>
          </div>

          <div className="space-y-3 hover-lift">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>War Room</li>
              <li>AI Agents</li>
              <li>Automation</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="space-y-3 hover-lift">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="space-y-3 hover-lift">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Compliance</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-500 text-sm relative z-10">
          © {new Date().getFullYear()} Nexus Campaign Studio. All rights reserved.
        </div>
      </footer>

      {launching && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadeIn">
          <div className="text-center">
            <div className="text-6xl animate-spin-slow mb-6">🚀</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Launching War Room...
            </h2>
            <p className="text-gray-400 mt-4 animate-fadeIn">
              Initializing AI Agents...
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
