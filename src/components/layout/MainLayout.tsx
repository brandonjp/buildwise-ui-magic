
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="bg-background">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <ProgramSelector />
            </div>
          </header>
          <main className="flex-1 space-y-4 p-4 md:p-6 pt-4">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function ProgramSelector() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Program:</span>
      <button className="inline-flex items-center gap-1 text-sm font-medium">
        Housing Development Fund
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
    </div>
  );
}
