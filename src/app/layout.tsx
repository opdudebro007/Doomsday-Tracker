import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { TrackerProvider } from "@/context/TrackerContext";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doomsday Tracker",
  description: "Track your progress towards watching everything required before Avengers: Doomsday.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-doomsday-green selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TrackerProvider>
            <Navbar user={user} />
            <main className="flex-1">
              {children}
            </main>
          </TrackerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
