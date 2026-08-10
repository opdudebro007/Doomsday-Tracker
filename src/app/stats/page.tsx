"use client";

import React, { useMemo } from "react";
import { useTracker } from "@/context/TrackerContext";
import { Card } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { mcuTimeline } from "@/data/timeline";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid 
} from "recharts";
import { Award, Film, Tv, Clock, Target, TrendingUp } from "lucide-react";

const COLORS = ['#e23636', '#9ca3af', '#b32a2a', '#ffffff'];

export default function StatsPage() {
  const {
    isHydrated,
    watchedIds,
    overallProgress,
    totalTitles,
    watchedTitlesCount,
    moviesWatched,
    showsWatched,
    totalMovies,
    totalShows,
    hoursWatched,
    hoursRemaining
  } = useTracker();

  const chartData = useMemo(() => {
    return [
      { name: 'Movies', value: moviesWatched },
      { name: 'Shows', value: showsWatched },
    ];
  }, [moviesWatched, showsWatched]);

  const phaseData = useMemo(() => {
    const phases = [1, 2, 3, 4, 5, 6];
    return phases.map(phase => {
      const phaseItems = mcuTimeline.filter(t => t.phase === phase);
      const watched = phaseItems.filter(t => watchedIds.includes(t.id)).length;
      return {
        name: `Phase ${phase}`,
        Total: phaseItems.length,
        Watched: watched,
      };
    }).filter(p => p.Total > 0);
  }, [watchedIds]);

  // Achievements logic
  const achievements = useMemo(() => {
    const list = [];
    if (moviesWatched > 0) list.push({ icon: "🎬", name: "First Movie", desc: "You've taken your first step." });
    if (showsWatched > 0) list.push({ icon: "📺", name: "First Show", desc: "Expanding the universe." });
    if (watchedTitlesCount >= 10) list.push({ icon: "🔥", name: "10 Titles", desc: "A solid streak." });
    
    const phase1Items = mcuTimeline.filter(t => t.phase === 1);
    if (phase1Items.length > 0 && phase1Items.every(t => watchedIds.includes(t.id))) {
      list.push({ icon: "⚡", name: "Phase 1 Complete", desc: "The Avengers assemble." });
    }

    const infinitySaga = mcuTimeline.filter(t => typeof t.phase === 'number' && t.phase >= 1 && t.phase <= 3);
    if (infinitySaga.length > 0 && infinitySaga.every(t => watchedIds.includes(t.id))) {
      list.push({ icon: "🛡️", name: "Infinity Saga Complete", desc: "I am Iron Man." });
    }

    if (overallProgress === 100) {
      list.push({ icon: "👑", name: "100% Complete", desc: "You are ready for Doomsday." });
    }

    return list;
  }, [moviesWatched, showsWatched, watchedTitlesCount, watchedIds, overallProgress]);

  if (!isHydrated) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-heading font-bold mb-8">STATISTICS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Film />} title="Movies Watched" value={`${moviesWatched} / ${totalMovies}`} />
        <StatCard icon={<Tv />} title="Shows Watched" value={`${showsWatched} / ${totalShows}`} />
        <StatCard icon={<Clock />} title="Hours Watched" value={hoursWatched.toString()} />
        <StatCard icon={<Target />} title="Hours Left" value={hoursRemaining.toString()} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-marvel-red" /> Content Breakdown
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#191b21', borderColor: 'rgba(255,255,255,0.1)' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {chartData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2 text-sm text-text-secondary">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                {entry.name}: {entry.value}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-marvel-red" /> Phase Completion
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={phaseData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#191b21', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                />
                <Bar dataKey="Watched" stackId="a" fill="#e23636" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Total" stackId="a" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-marvel-red" /> Achievements
        </h2>
        
        {achievements.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center flex flex-col items-center justify-center gap-2">
                <div className="text-4xl mb-2">{ach.icon}</div>
                <div className="font-bold text-sm">{ach.name}</div>
                <div className="text-xs text-text-secondary">{ach.desc}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-text-secondary">
            <p>Watch titles to start unlocking achievements.</p>
          </div>
        )}
      </Card>
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <Card className="p-6 flex items-center gap-4 glowOnHover">
      <div className="p-3 bg-marvel-red/10 text-marvel-red rounded-lg">
        {icon}
      </div>
      <div>
        <div className="text-xs text-text-secondary uppercase tracking-wider">{title}</div>
        <div className="text-2xl font-bold font-heading">{value}</div>
      </div>
    </Card>
  );
}
