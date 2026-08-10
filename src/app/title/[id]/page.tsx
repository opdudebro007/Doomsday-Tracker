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
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium relative z-10">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>
      
      {/* Ambient Glassmorphism Backgrounds */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-marvel-red/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Poster */}
        <div className="w-3/4 sm:w-1/2 md:w-1/3 shrink-0 mx-auto md:mx-0">
          <div className="w-full aspect-[2/3] bg-card/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-border/50 relative overflow-hidden shadow-2xl">
            {item.posterUrl ? (
              <img src={item.posterUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <span className="text-sm text-muted-foreground relative z-0">Poster</span>
            )}
            {isWatched && (
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center backdrop-blur-sm z-10">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            )}
          </div>
          
          <button
            onClick={() => toggleWatched(item.id)}
            className={`w-full mt-6 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
              isWatched 
                ? "bg-foreground/10 text-foreground hover:bg-foreground/20" 
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
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-foreground/10 px-3 py-1.5 rounded flex items-center gap-2 text-foreground font-medium">
              <Calendar className="w-4 h-4" /> {item.year}
            </span>
            <span className="bg-foreground/10 px-3 py-1.5 rounded flex items-center gap-2 text-foreground font-medium">
              <Clock className="w-4 h-4" /> {item.runtime} min
            </span>
            <span className="bg-foreground/10 px-3 py-1.5 rounded text-foreground font-medium capitalize">
              {item.type}
            </span>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold font-heading mb-4">Synopsis</h2>
            <p className="text-muted-foreground leading-relaxed">
              {item.synopsis}
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold font-heading mb-4">Main Characters</h2>
            <div className="flex flex-wrap gap-2">
              {item.characters.map((char, idx) => (
                <span key={idx} className="bg-foreground/5 border border-border px-3 py-1.5 rounded-full text-sm font-medium">
                  {char}
                </span>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 mb-8 mt-8">
            <h2 className="text-xl font-bold font-heading mb-4">Where to Watch</h2>
            <div className="flex gap-4">
               {item.phase === "Legacy" ? (
                  <span className="px-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm font-bold flex items-center gap-2">Vudu / Prime Video</span>
               ) : item.year >= 2025 ? (
                  <span className="px-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm font-bold flex items-center gap-2">In Theaters</span>
               ) : (
                  <span className="px-4 py-2 bg-[#001489] text-white rounded-lg text-sm font-bold flex items-center gap-2">Disney+</span>
               )}
            </div>
          </Card>
          
          <div className="mt-8">
            <a 
              href={item.trailerUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + ' official trailer')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <PlayCircle className="w-5 h-5 text-marvel-red" /> Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
