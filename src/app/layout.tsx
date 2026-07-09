import type { Metadata } from "next";
import { Navigation, MobileNavigation } from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saravana Kumar Portfolio",
  description: "Saravana Kumar Portfolio -  built on Next.js.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <Navigation />
            <main>
              {children}
            </main>
            <MobileNavigation />
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
