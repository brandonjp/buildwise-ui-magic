
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter
} from "@/components/ui/sidebar";
import { 
  Home, 
  FileText, 
  BarChart3, 
  CheckSquare, 
  Settings, 
  Building, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <div className="flex items-center px-4">
          <div className="relative h-8 w-8 mr-2">
            <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-semibold">
              GC
            </div>
          </div>
          <div className="font-semibold text-lg">GrantCheck AI</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <a href="/">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Programs">
                <a href="/programs">
                  <Building className="h-4 w-4" />
                  <span>Programs</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Draw Packages">
                <a href="/draw-packages">
                  <FileText className="h-4 w-4" />
                  <span>Draw Packages</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Compliance">
                <a href="/compliance">
                  <CheckSquare className="h-4 w-4" />
                  <span>Compliance</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Reports">
                <a href="/reports">
                  <BarChart3 className="h-4 w-4" />
                  <span>Reports</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <a href="/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9 rounded-full border">
            <AvatarImage src="/placeholder.svg" alt="Avatar" className="rounded-full" />
            <AvatarFallback className="rounded-full bg-muted">JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Administrator</span>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
