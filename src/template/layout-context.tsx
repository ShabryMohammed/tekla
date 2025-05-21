"use client";

import Footer from "@/components/molecules/footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    );

}