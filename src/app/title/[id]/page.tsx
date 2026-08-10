"use client";

import { use, useEffect, useState } from "react";
import { useTracker } from "@/context/TrackerContext";
import { mcuTimeline, MCUItem } from "@/data/timeline";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Circle, Clock, ArrowLeft, PlayCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function TitleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [item, setItem] = useState<MCUItem | null>(null);
  const { watchedIds, toggleWatched, isHydrated } = useTracker();
  
  useEffect(() => {
    const found = mcuTimeline.find(t => t.id === resolvedParams.id);
    if (found) {
      setItem(found);
    } else {
      notFound();
    }
  }, [resolvedParams.id]);

  if (!isHydrated || !item) return null;

  const isWatched = watchedIds.includes(item.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/timeline" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Timeline
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="w-full md:w-1/3 shrink-0">
          <div className="w-full aspect-[2/3] bg-black/40 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden shadow-2xl">
            {isWatched && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-10">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            )}
            <span className="text-sm text-text-secondary">Poster</span>
          </div>
          
          <button
            onClick={() => toggleWatched(item.id)}
            className={`w-full mt-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
              isWatched 
                ? "bg-white/10 text-white hover:bg-white/20" 
                : "bg-marvel-red text-white hover:bg-marvel-dark-red"
            }`}
          >
            {isWatched ? (
              <><CheckCircle2 className="w-5 h-5 text-green-500" /> Watched</>
            ) : (
              <><Circle className="w-5 h-5" /> Mark as Watched</>
            )}
          </button>
        </div>

        {/* Details */}
        <div className="flex-1">
          <div className="text-sm font-bold text-marvel-red mb-2 uppercase tracking-wider flex items-center gap-4">
            <span>Phase {item.phase}</span>
            <span>•</span>
            <span>Timeline #{item.timelineOrder}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {item.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-8">
            <span className="bg-white/10 px-3 py-1.5 rounded flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" /> {item.year}
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" /> {item.runtime} min
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded text-white capitalize">
              {item.type}
            </span>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold font-heading mb-4">Synopsis</h2>
            <p className="text-text-secondary leading-relaxed">
              {item.synopsis}
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold font-heading mb-4">Main Characters</h2>
            <div className="flex flex-wrap gap-2">
              {item.characters.map((char, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm">
                  {char}
                </span>
              ))}
            </div>
          </Card>
          
          <div className="mt-8">
            <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
              <PlayCircle className="w-5 h-5 text-marvel-red" /> Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
