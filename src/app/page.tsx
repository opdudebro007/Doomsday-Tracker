"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useTracker } from "@/context/TrackerContext";
import { mcuTimeline } from "@/data/timeline";
import { Play, Check, Clock, Calendar, Flame, Search, CheckCircle2, Circle, Filter, Sparkles, Film, Tv, Heart, ArrowDownUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type FilterType = "all" | "imp" | "optional" | "legacy" | "movies" | "shows" | "watched" | "unwatched" | "favorites" | "phase1" | "phase2" | "phase3" | "phase4" | "phase5" | "phase6";
type SortType = "timeline" | "runtime" | "alpha" | "newest" | "oldest";

export default function Home() {
  const {
    isHydrated,
    watchedIds,
    favoriteIds,
    toggleWatched,
    toggleFavorite,
    overallProgress,
    watchedTitlesCount,
    totalTitles,
    nextUnwatched,
    lastWatched,
    hoursRemaining,
    minutesRemaining,
    hoursWatched,
    minutesWatched,
    finishPaceDays,
    streak,
  } = useTracker();

  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("timeline");
  const [includeExtended, setIncludeExtended] = useState(false);
  const [prefsLoaded, setPrefsLoaded] = useState(false);

  useEffect(() => {
    if (isHydrated && !prefsLoaded) {
      const savedFilter = localStorage.getItem("doomsday-tracker-filter") as FilterType;
      const savedSort = localStorage.getItem("doomsday-tracker-sort") as SortType;
      const savedExtended = localStorage.getItem("doomsday-tracker-extended");
      if (savedFilter) setActiveFilter(savedFilter);
      if (savedSort) setSortBy(savedSort);
      if (savedExtended !== null) setIncludeExtended(savedExtended === "true");
      setPrefsLoaded(true);
    }
  }, [isHydrated, prefsLoaded]);

  useEffect(() => {
    if (prefsLoaded) {
      localStorage.setItem("doomsday-tracker-filter", activeFilter);
      localStorage.setItem("doomsday-tracker-sort", sortBy);
      localStorage.setItem("doomsday-tracker-extended", includeExtended.toString());
    }
  }, [activeFilter, sortBy, includeExtended, prefsLoaded]);

  const filteredAndSorted = useMemo(() => {
    let result = mcuTimeline;
    
    // Filter extended
    if (!includeExtended) {
      result = result.filter(i => !i.extended);
    }
    
    if (activeFilter === "imp") result = result.filter(i => i.importance === "imp");
    if (activeFilter === "optional") result = result.filter(i => i.importance === "optional");
    if (activeFilter === "legacy") result = result.filter(i => i.phase === "Legacy");
    if (activeFilter === "movies") result = result.filter(i => i.type === "movie");
    if (activeFilter === "shows") result = result.filter(i => i.type === "show");
    if (activeFilter === "watched") result = result.filter(i => watchedIds.includes(i.id));
    if (activeFilter === "unwatched") result = result.filter(i => !watchedIds.includes(i.id));
    if (activeFilter === "favorites") result = result.filter(i => favoriteIds.includes(i.id));
    if (activeFilter.startsWith("phase")) {
      const p = parseInt(activeFilter.replace("phase", ""));
      result = result.filter(i => i.phase === p);
    }
    
    result = [...result].sort((a, b) => {
      if (sortBy === "timeline") return a.timelineOrder - b.timelineOrder;
      if (sortBy === "runtime") return b.runtime - a.runtime;
      if (sortBy === "alpha") return a.title.localeCompare(b.title);
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      return 0;
    });

    return result;
  }, [activeFilter, sortBy, watchedIds, favoriteIds, includeExtended]);

  if (!isHydrated || !prefsLoaded) return null;

  return (
    <div className="container mx-auto px-6 py-8 max-w-[1200px]">
      
      {/* TOP DASHBOARD AREA */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-10 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-marvel-red/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-marvel-red/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="flex flex-col xl:flex-row gap-12 relative z-10">
          
          {/* LEFT PROGRESS CARD */}
          <div className="xl:w-1/3 flex flex-col items-center justify-center pt-4">
            <div className="relative flex items-center justify-center mb-10">
              <svg height="220" width="220" className="transform -rotate-90">
                <circle stroke="#222" fill="transparent" strokeWidth="16" r="95" cx="110" cy="110" />
                <circle
                  className="text-[#e62429] transition-all duration-1000 ease-out"
                  stroke="currentColor" fill="transparent" strokeWidth="16"
                  strokeDasharray={95 * 2 * Math.PI}
                  strokeDashoffset={(95 * 2 * Math.PI) - ((overallProgress / 100) * (95 * 2 * Math.PI))}
                  strokeLinecap="round" r="95" cx="110" cy="110"
                  style={{ filter: "drop-shadow(0 0 12px rgba(230,36,41,0.6))" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-[52px] font-bold font-heading leading-tight">{overallProgress}%</span>
                <span className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] mt-1">OVERALL PROGRESS</span>
                <span className="text-[13px] font-bold text-[#e62429] mt-1 tracking-wide">{watchedTitlesCount} / {totalTitles} Done</span>
              </div>
            </div>
            
            <div className="w-full max-w-[280px] bg-muted h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-[#e62429] h-full rounded-full relative" style={{ width: `${overallProgress}%` }}>
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT METRICS AREA */}
          <div className="xl:w-2/3 flex flex-col gap-5 justify-center">
            
            {/* UP NEXT CARD */}
            <div className="flex-1 p-5 rounded-2xl border border-border bg-gradient-to-br from-card to-muted shadow-sm">
              {nextUnwatched ? (
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  {/* Poster Placeholder */}
                  <div className="w-20 h-28 bg-muted rounded-xl border border-border shrink-0 flex items-center justify-center overflow-hidden">
                    {nextUnwatched.posterUrl ? (
                      <img src={nextUnwatched.posterUrl} alt={nextUnwatched.title} className="w-full h-full object-cover" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-[#e62429] opacity-70" />
                    )}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#e62429] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">
                        UP NEXT • TIMELINE #{nextUnwatched.timelineOrder}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">{nextUnwatched.runtime} min</span>
                    </div>
                    
                    <h2 className="text-[22px] font-bold font-heading mb-1.5 leading-tight tracking-wide">{nextUnwatched.title}</h2>
                    <p className="text-[13px] text-muted-foreground line-clamp-1 max-w-xl mb-4 font-medium">{nextUnwatched.synopsis}</p>
                    
                  </div>

                  <div className="flex items-center gap-3 shrink-0 sm:self-end sm:mb-2">
                    <button className="bg-[#e62429] hover:bg-[#e62429]/80 text-white font-bold py-2.5 px-6 rounded-full flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(230,36,41,0.3)]">
                      <Play className="w-4 h-4 fill-current" /> Continue
                    </button>
                    <button 
                      onClick={() => toggleWatched(nextUnwatched.id)}
                      className="w-11 h-11 rounded-xl border border-green-500/30 bg-[#0a1a0f] flex items-center justify-center text-green-500 hover:bg-green-500/20 transition-colors"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">You're completely caught up!</div>
              )}
            </div>
            
            {/* 4 STAT BLOCKS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatBlock icon={<Clock className="w-4 h-4 text-[#3b82f6]" />} label="Remaining" value={`${hoursRemaining}h ${minutesRemaining}m`} />
              <StatBlock icon={<CheckCircle2 className="w-4 h-4 text-[#22c55e]" />} label="Completed" value={`${hoursWatched}h ${minutesWatched}m`} />
              <StatBlock icon={<Calendar className="w-4 h-4 text-[#eab308]" />} label="Finish Pace" value={`~${finishPaceDays} Days`} />
              <StatBlock icon={<Flame className="w-4 h-4 text-[#f97316]" />} label="Streak" value={`${streak} Days`} valueColor="text-[#eab308]" />
            </div>

            {/* LAST WATCHED FOOTER */}
            <div className="flex justify-between items-center text-[13px] px-2 mt-2">
              <div className="text-muted-foreground font-medium">Last Watched: <span className="text-foreground font-bold">{lastWatched?.title || "None"}</span></div>
              {lastWatched && <div className="text-[#e62429] font-bold tracking-wide">Timeline #{lastWatched.timelineOrder}</div>}
            </div>
            
          </div>
        </div>
      </div>

      {/* ROADMAP SECTION */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
        {/* Roadmap Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-[#e62429]" />
            <h2 className="text-xl font-bold font-heading uppercase tracking-widest">MCU Timeline Roadmap</h2>
            <span className="bg-muted border border-border text-foreground text-[11px] font-bold px-3 py-1 rounded-full">{totalTitles} titles</span>
          </div>
          
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-[13px] text-foreground font-medium cursor-pointer">
              <input type="checkbox" checked={includeExtended} onChange={(e) => setIncludeExtended(e.target.checked)} className="rounded border-border bg-black/50 accent-[#e62429]" />
              Include Extended TV (SHIELD, Agent Carter)
            </label>
            
            <div className="flex items-center gap-2 text-[13px]">
              <ArrowDownUp className="w-3.5 h-3.5 text-[#eab308]" />
              <span className="text-muted-foreground">Sort:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="bg-transparent text-foreground font-bold focus:outline-none cursor-pointer"
              >
                <option value="timeline" className="bg-muted">Timeline Order</option>
                <option value="runtime" className="bg-muted">Runtime</option>
                <option value="alpha" className="bg-muted">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-hide mb-6 items-center">
          <FilterPill label="All Projects" active={activeFilter === "all"} onClick={() => setActiveFilter("all")} />
          <FilterPill label="Legacy (Fox/Sony)" active={activeFilter === "legacy"} onClick={() => setActiveFilter("legacy")} />
          <FilterPill icon={<Flame className="w-3.5 h-3.5" />} label="Important" active={activeFilter === "imp"} onClick={() => setActiveFilter("imp")} />
          <FilterPill label="Optional" active={activeFilter === "optional"} onClick={() => setActiveFilter("optional")} />
          <FilterPill icon={<Film className="w-3.5 h-3.5" />} label="Movies" active={activeFilter === "movies"} onClick={() => setActiveFilter("movies")} />
          <FilterPill icon={<Tv className="w-3.5 h-3.5" />} label="Series & Specials" active={activeFilter === "shows"} onClick={() => setActiveFilter("shows")} />
          <FilterPill icon={<CheckCircle2 className="w-3.5 h-3.5" />} label="Watched" active={activeFilter === "watched"} onClick={() => setActiveFilter("watched")} />
          <FilterPill icon={<Circle className="w-3.5 h-3.5" />} label="Not Watched" active={activeFilter === "unwatched"} onClick={() => setActiveFilter("unwatched")} />
          <FilterPill icon={<Heart className="w-3.5 h-3.5" />} label="Favorites" active={activeFilter === "favorites"} onClick={() => setActiveFilter("favorites")} />
          <FilterPill label="Phase 1" active={activeFilter === "phase1"} onClick={() => setActiveFilter("phase1")} />
          <FilterPill label="Phase 2" active={activeFilter === "phase2"} onClick={() => setActiveFilter("phase2")} />
          <FilterPill label="Phase 3" active={activeFilter === "phase3"} onClick={() => setActiveFilter("phase3")} />
          <FilterPill label="Phase 4" active={activeFilter === "phase4"} onClick={() => setActiveFilter("phase4")} />
          <FilterPill label="Phase 5" active={activeFilter === "phase5"} onClick={() => setActiveFilter("phase5")} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          <AnimatePresence>
            {filteredAndSorted.map((item) => {
              const isWatched = watchedIds.includes(item.id);
              const isFavorite = favoriteIds.includes(item.id);
              const saga = item.phase === "Legacy" ? "Legacy Universe" : (item.phase as number) <= 3 ? "Infinity Saga" : "Multiverse Saga";
              
              return (
                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }} key={item.id}>
                  <div className="flex flex-col h-full rounded-2xl bg-card border border-border overflow-hidden group">
                    
                    {/* Poster Area */}
                    <div className="relative w-full aspect-[2/3] flex flex-col items-center justify-center transition-colors overflow-hidden group/poster bg-muted">
                      
                      {item.posterUrl && (
                        <img 
                          src={item.posterUrl} 
                          alt={item.title} 
                          className={cn("absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-110", isWatched ? "opacity-40 mix-blend-luminosity" : "opacity-90")} 
                        />
                      )}
                      
                      <div className={cn("absolute inset-0 transition-opacity", isWatched ? "bg-[#081a11]/70" : "bg-gradient-to-t from-[#111216] via-transparent to-transparent opacity-80")}></div>
                      
                      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
                        {isWatched ? (
                          <>
                            <div className="w-12 h-12 rounded-full bg-[#22c55e] flex items-center justify-center mt-auto mb-2 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                              <Check className="w-8 h-8 text-[#081a11] stroke-[3]" />
                            </div>
                            <span className="text-[11px] font-bold text-[#22c55e] tracking-widest mt-auto">WATCHED</span>
                          </>
                        ) : (
                          <>
                            {!item.posterUrl && (
                              <div className="flex flex-col items-center">
                                <Film className="w-10 h-10 text-[#e62429] mb-3 opacity-80" />
                                <h3 className="text-[13px] font-bold text-foreground text-center leading-tight mb-1">{item.title}</h3>
                                <span className="text-[11px] text-muted-foreground">{item.year}</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      {/* Heart Icon */}
                      <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(item.id); }}
                        className={cn(
                          "absolute bottom-3 left-3 w-7 h-7 rounded-full backdrop-blur border flex items-center justify-center transition-colors z-20",
                          isFavorite 
                            ? "bg-[#e62429]/20 border-[#e62429]/50 text-[#e62429]" 
                            : "bg-card/80 border-border text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Heart className={cn("w-3.5 h-3.5", isFavorite && "fill-current")} />
                      </button>
                    </div>

                    {/* Details Area */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#eab308]">Phase {item.phase}</span>
                          {item.importance === "imp" ? (
                            <span className="bg-[#e62429]/20 text-[#e62429] text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Important</span>
                          ) : (
                            <span className="bg-foreground/10 text-muted-foreground text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Optional</span>
                          )}
                        </div>
                        <span className="text-[11px] text-muted-foreground">{saga}</span>
                      </div>
                      
                      <h3 className="text-[15px] font-bold text-foreground leading-tight mb-2 line-clamp-1">{item.title}</h3>
                      
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.year}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.runtime} min</span>
                      </div>

                      <div className="mt-auto">
                        <button
                          onClick={() => toggleWatched(item.id)}
                          className={cn(
                            "w-full py-2 rounded-xl text-[13px] font-bold transition-colors flex items-center justify-center gap-2 border",
                            isWatched 
                              ? "bg-[#062413] border-[#104b27] text-[#22c55e] hover:bg-[#0a351c]" 
                              : "bg-muted border-border text-foreground hover:bg-[#22242a]"
                          )}
                        >
                          {isWatched ? (
                            <><CheckCircle2 className="w-4 h-4" /> Watched ✓</>
                          ) : (
                            <><div className="w-3.5 h-3.5 rounded-sm border border-current"></div> Mark Watched</>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}

function StatBlock({ icon, label, value, valueColor = "text-foreground" }: { icon: React.ReactNode, label: string, value: string, valueColor?: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col justify-center">
      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium tracking-wide mb-1">
        {icon} {label}
      </div>
      <div className={cn("text-[17px] font-bold font-heading tracking-wide", valueColor)}>
        {value}
      </div>
    </div>
  );
}

function FilterPill({ icon, label, active, onClick }: { icon?: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "whitespace-nowrap flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold transition-all border",
        active 
          ? "bg-[#e62429] text-white border-[#e62429]" 
          : "bg-muted text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
