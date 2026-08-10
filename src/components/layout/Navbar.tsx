"use client";

import Link from "next/link";
import { Search, Trophy, Share2, Settings, Flame, Shuffle, Clock } from "lucide-react";
import { useTracker } from "@/context/TrackerContext";
import { useState, useEffect } from "react";
import { AVENGERS_DOOMSDAY_RELEASE_DATE } from "@/data/timeline";

export function Navbar() {
  const { overallProgress, streak } = useTracker();
  
  const calculateTimeLeft = () => {
    const target = new Date(AVENGERS_DOOMSDAY_RELEASE_DATE).getTime();
    const now = new Date().getTime();
    const dist = target - now;
    if (dist < 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(dist / (1000 * 60 * 60 * 24)),
      h: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      m: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
      s: Math.floor((dist % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-3">
      <div className="px-6 flex items-center justify-between gap-4">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="bg-[#e62429] text-white font-bold tracking-tighter px-2 py-0.5 text-lg leading-tight">
              MARVEL
            </div>
            <span className="font-heading font-bold text-xl tracking-wide uppercase">
              DOOMSDAY <span className="text-[#e62429]">TRACKER</span>
            </span>
          </div>
          <span className="text-[10px] text-text-secondary mt-0.5 tracking-wider">
            MCU Road to Avengers: Doomsday
          </span>
        </Link>

        {/* MIDDLE ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          {/* Countdown Pill */}
          <div className="flex items-center gap-2 bg-marvel-red/10 border border-marvel-red/20 rounded-full pl-1 pr-4 py-1 text-sm">
            <div className="w-6 h-6 rounded-full bg-marvel-red/20 flex items-center justify-center text-marvel-red">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-text-secondary">Doomsday in:</span>
            <span className="font-mono text-marvel-red font-bold">
              {mounted ? `${timeLeft.d}d ${timeLeft.h}h ${timeLeft.m}m ${timeLeft.s}s` : "Loading..."}
            </span>
          </div>

          {/* Search */}
          <div className="relative w-64 xl:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search title, character..."
              className="w-full bg-[#111113] border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-white placeholder:text-text-secondary focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-2">
          {/* Streak */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#1a150e] border border-yellow-600/30 text-yellow-500 rounded-full px-3 py-1.5 text-xs font-bold">
            <Flame className="w-3.5 h-3.5" fill="currentColor" /> {streak}d
          </div>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111113] border border-white/10 text-[#5cb85c] hover:bg-white/5 transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111113] border border-white/10 text-yellow-500 hover:bg-white/5 transition-colors">
            <Trophy className="w-4 h-4" />
          </button>
          
          <Link href="/stats" className="hidden md:flex items-center gap-2 rounded-full bg-marvel-red/10 border border-marvel-red/20 hover:bg-marvel-red/20 transition-colors px-3 py-1.5 text-marvel-red text-xs font-bold">
            <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin-slow"></div>
            Stats <span className="bg-marvel-red text-white px-1.5 py-0.5 rounded-full text-[10px]">{overallProgress}%</span>
          </Link>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111113] border border-white/10 text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>

          <Link href="/settings" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#111113] border border-white/10 text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
