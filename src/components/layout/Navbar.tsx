"use client";

import Link from "next/link";
import { Search, Trophy, Share2, Settings, Flame, Shuffle, Clock } from "lucide-react";
import { useTracker } from "@/context/TrackerContext";
import { useState, useEffect } from "react";
import { AVENGERS_DOOMSDAY_RELEASE_DATE } from "@/data/timeline";

export function Navbar() {
  const { overallProgress, streak, searchQuery, setSearchQuery } = useTracker();
  
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
    <nav className="sticky top-4 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-[1600px] mx-auto bg-background/60 backdrop-blur-2xl border border-border/50 rounded-2xl py-2 md:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        
        <div className="flex items-center justify-between w-full md:w-auto">
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
          <span className="text-[10px] text-muted-foreground mt-0.5 tracking-wider">
            MCU Road to Avengers: Doomsday
          </span>
          </Link>
          
          {/* RIGHT ICONS ON MOBILE */}
          <div className="flex md:hidden items-center gap-2">
            <div className="bg-[#1a150e] border border-yellow-600/30 text-yellow-500 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" fill="currentColor" /> {streak}d
            </div>
          </div>
        </div>

        {/* MIDDLE ACTIONS (Desktop Countdown + Mobile/Desktop Search) */}
        <div className="flex w-full md:w-auto items-center gap-4 flex-1 justify-center">
          {/* Countdown Pill (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2 bg-marvel-red/10 border border-marvel-red/20 rounded-full pl-1 pr-4 py-1 text-sm">
            <div className="w-6 h-6 rounded-full bg-marvel-red/20 flex items-center justify-center text-marvel-red">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-muted-foreground">Doomsday in:</span>
            <span className="font-mono text-marvel-red font-bold">
              {mounted ? `${timeLeft.d}d ${timeLeft.h}h ${timeLeft.m}m ${timeLeft.s}s` : "Loading..."}
            </span>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64 xl:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search title, character..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted border border-border rounded-full py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-colors"
            />
          </div>
        </div>

        {/* RIGHT ICONS */}
        {/* RIGHT ICONS ON DESKTOP */}
        <div className="hidden md:flex items-center gap-2">
          {/* Streak */}
          <div className="flex items-center gap-1.5 bg-[#1a150e] border border-yellow-600/30 text-yellow-500 rounded-full px-3 py-1.5 text-xs font-bold">
            <Flame className="w-3.5 h-3.5" fill="currentColor" /> {streak}d
          </div>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-muted border border-border text-[#5cb85c] hover:bg-foreground/5 transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-muted border border-border text-yellow-500 hover:bg-foreground/5 transition-colors">
            <Trophy className="w-4 h-4" />
          </button>
          
          <Link href="/stats" className="hidden md:flex items-center gap-2 rounded-full bg-marvel-red/10 border border-marvel-red/20 hover:bg-marvel-red/20 transition-colors px-3 py-1.5 text-marvel-red text-xs font-bold">
            <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin-slow"></div>
            Stats <span className="bg-marvel-red text-white px-1.5 py-0.5 rounded-full text-[10px]">{overallProgress}%</span>
          </Link>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>

          <Link href="/settings" className="w-9 h-9 flex items-center justify-center rounded-full bg-muted border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors">
            <Settings className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
