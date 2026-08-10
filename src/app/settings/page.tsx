"use client";

import React, { useState, useRef } from "react";
import { useTracker } from "@/context/TrackerContext";
import { Card } from "@/components/ui/Card";
import { Settings2, Download, Upload, Trash2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { watchedIds, resetProgress, isHydrated } = useTracker();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  if (!isHydrated) return null;

  const handleExport = () => {
    const data = JSON.stringify({ watchedIds });
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "doomsday-tracker-backup.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const result = event.target?.result as string;
        const parsed = JSON.parse(result);
        if (parsed && Array.isArray(parsed.watchedIds)) {
          localStorage.setItem("doomsday-tracker-watched", JSON.stringify(parsed.watchedIds));
          setImportStatus("Import successful! Please refresh the page.");
          setTimeout(() => window.location.reload(), 1500);
        } else {
          setImportStatus("Invalid backup file.");
        }
      } catch (error) {
        setImportStatus("Error parsing file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-heading font-bold mb-8 flex items-center gap-4">
        <Settings2 className="w-10 h-10 text-marvel-red" /> SETTINGS
      </h1>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold font-heading mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Theme</p>
              <p className="text-sm text-text-secondary">Toggle between dark and light mode (Dark mode highly recommended).</p>
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg transition-colors border border-border flex items-center gap-2"
            >
              {mounted && isDark ? <Moon className="w-5 h-5 text-marvel-red" /> : <Sun className="w-5 h-5 text-yellow-500" />}
              {mounted && isDark ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold font-heading mb-4">Data Management</h2>
          <div className="space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <p className="font-bold">Export Progress</p>
                <p className="text-sm text-text-secondary">Download a JSON file of your watched titles.</p>
              </div>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Export Backup
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <p className="font-bold">Import Progress</p>
                <p className="text-sm text-text-secondary">Restore from a previous JSON backup.</p>
                {importStatus && <p className="text-xs text-marvel-red mt-1">{importStatus}</p>}
              </div>
              <div>
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImport}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10 flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" /> Import Backup
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-red-500">Reset Progress</p>
                <p className="text-sm text-text-secondary">Permanently delete your local progress.</p>
              </div>
              <button
                onClick={resetProgress}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/40 text-red-500 rounded-lg transition-colors border border-red-500/30 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Reset All
              </button>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
}
