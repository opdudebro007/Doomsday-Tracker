"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { MCUItem, mcuTimeline } from "../data/timeline";

interface TrackerContextType {
  watchedIds: string[];
  favoriteIds: string[];
  toggleWatched: (id: string) => void;
  toggleFavorite: (id: string) => void;
  resetProgress: () => void;
  isHydrated: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Computed stats
  totalTitles: number;
  watchedTitlesCount: number;
  overallProgress: number;
  moviesWatched: number;
  showsWatched: number;
  totalMovies: number;
  totalShows: number;
  hoursWatched: number;
  hoursRemaining: number;
  minutesWatched: number;
  minutesRemaining: number;
  streak: number;
  finishPaceDays: number;
  
  nextUnwatched: MCUItem | null;
  lastWatched: MCUItem | null;
}

const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

export const TrackerProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchedIds, setWatchedIds] = useState<string[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Load from local storage on mount
  useEffect(() => {
    const savedWatched = localStorage.getItem("doomsday-tracker-watched");
    if (savedWatched) {
      try {
        setWatchedIds(JSON.parse(savedWatched));
      } catch (e) {
        console.error("Failed to parse watched items", e);
      }
    }
    const savedFavorites = localStorage.getItem("doomsday-tracker-favorites");
    if (savedFavorites) {
      try {
        setFavoriteIds(JSON.parse(savedFavorites));
      } catch (e) {
        console.error("Failed to parse favorite items", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to local storage whenever watchedIds changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("doomsday-tracker-watched", JSON.stringify(watchedIds));
      localStorage.setItem("doomsday-tracker-favorites", JSON.stringify(favoriteIds));
    }
  }, [watchedIds, favoriteIds, isHydrated]);

  const toggleWatched = (id: string) => {
    setWatchedIds((prev) => {
      if (!prev.includes(id)) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#15803d', '#ffffff', '#eab308'],
          disableForReducedMotion: true
        });
        return [...prev, id];
      }
      return prev.filter((i) => i !== id);
    });
  };

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      setWatchedIds([]);
      setFavoriteIds([]);
    }
  };

  // Compute stats
  const totalTitles = mcuTimeline.length;
  const watchedTitlesCount = watchedIds.length;
  const overallProgress = totalTitles === 0 ? 0 : Math.round((watchedTitlesCount / totalTitles) * 100);

  const movies = mcuTimeline.filter(t => t.type === 'movie');
  const shows = mcuTimeline.filter(t => t.type === 'show');
  
  const totalMovies = movies.length;
  const totalShows = shows.length;
  
  const moviesWatched = movies.filter(m => watchedIds.includes(m.id)).length;
  const showsWatched = shows.filter(s => watchedIds.includes(s.id)).length;

  const totalRuntimeWatched = mcuTimeline
    .filter(t => watchedIds.includes(t.id))
    .reduce((acc, curr) => acc + curr.runtime, 0);
    
  const totalRuntimeRemaining = mcuTimeline
    .filter(t => !watchedIds.includes(t.id))
    .reduce((acc, curr) => acc + curr.runtime, 0);

  const hoursWatched = Math.floor(totalRuntimeWatched / 60);
  const minutesWatched = totalRuntimeWatched % 60;
  
  const hoursRemaining = Math.floor(totalRuntimeRemaining / 60);
  const minutesRemaining = totalRuntimeRemaining % 60;

  const unwatchedTitles = mcuTimeline.filter(t => !watchedIds.includes(t.id));
  const nextUnwatched = unwatchedTitles.length > 0 ? unwatchedTitles[0] : null;

  const watchedTimelineItems = mcuTimeline.filter(t => watchedIds.includes(t.id));
  const lastWatched = watchedTimelineItems.length > 0 ? watchedTimelineItems[watchedTimelineItems.length - 1] : null;

  // Mock streak and finish pace
  const streak = watchedIds.length > 0 ? 1 : 0;
  // Assume a pace of 3 hours per day
  const finishPaceDays = Math.ceil(totalRuntimeRemaining / (3 * 60));

  return (
    <TrackerContext.Provider
      value={{
        watchedIds,
        favoriteIds,
        toggleWatched,
        toggleFavorite,
        resetProgress,
        isHydrated,
        searchQuery,
        setSearchQuery,
        totalTitles,
        watchedTitlesCount,
        overallProgress,
        moviesWatched,
        showsWatched,
        totalMovies,
        totalShows,
        hoursWatched,
        hoursRemaining,
        minutesWatched,
        minutesRemaining,
        streak,
        finishPaceDays,
        nextUnwatched,
        lastWatched
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
};

export const useTracker = () => {
  const context = useContext(TrackerContext);
  if (context === undefined) {
    throw new Error("useTracker must be used within a TrackerProvider");
  }
  return context;
};
