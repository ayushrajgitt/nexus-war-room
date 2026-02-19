"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const backgrounds = Array.from({ length: 18 }, (_, i) => `/bg${i + 1}.jpg`);

export default function Home() {
  const [industry, setIndustry] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [launching, setLaunching] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

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
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      router.push("/war-room");
    }, 3500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white flex flex-col items-center justify-center px-6">

      {/* Background */}
      <div
        className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms]"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.08)`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/70 via-black/85 to-black" />

      {/* HERO */}
      <div className="text-center max-w-4xl">

        {/* Logo + Title */}
        <div
          className={`flex items-center justify-center gap-6 mb-10 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/logo.svg"
            alt="Nexus Logo"
            className="w-20 h-20"
          />

          <h1 className="text-6xl md:text-7xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            NEXUS
          </h1>
        </div>

        {/* Headline */}
        {mounted && (
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-100">
            Autonomous Marketing Infrastructure
          </h2>
        )}

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Research. Design. Write. Launch.  
          AI agents operating inside your private War Room.
        </p>

        {/* FORM PANEL */}
        <div className="w-full max-w-2xl mx-auto bg-black/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-10 space-y-8 shadow-[0_0_40px_rgba(168,85,247,0.15)]">

          <div>
            <label className="block text-sm text-purple-400 font-semibold mb-3 tracking-wide">
              Industry / Brand
            </label>
            <input
              type="text"
              placeholder="Sustainable Fashion, AI Startup..."
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-purple-400 font-semibold mb-3 tracking-wide">
              Target Audience
            </label>
            <input
              type="text"
              placeholder="Gen-Z Creators, SaaS Founders..."
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-purple-400 font-semibold mb-3 tracking-wide">
              Primary Goal
            </label>
            <input
              type="text"
              placeholder="Increase Sales, Launch Product..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-black/40 border border-purple-500/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <button
            onClick={launchWarRoom}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold tracking-wide hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/20"
          >
            Initialize War Room →
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative w-full mt-32 py-20 px-8 bg-black/80 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10 text-gray-400 text-sm">

          <div>
            <h3 className="text-white font-semibold mb-4">NEXUS</h3>
            <p>Autonomous AI Marketing Infrastructure.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>War Room</li>
              <li>AI Agents</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Nexus Campaign Studio.
        </div>
      </footer>

      {/* LAUNCH OVERLAY */}
      {launching && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center animate-pulse">
            <div className="text-6xl mb-6 text-purple-500">⚡</div>
            <h2 className="text-3xl font-semibold text-white tracking-widest">
              INITIALIZING WAR ROOM
            </h2>
            <p className="text-gray-400 mt-4">
              Deploying AI Agents...
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
