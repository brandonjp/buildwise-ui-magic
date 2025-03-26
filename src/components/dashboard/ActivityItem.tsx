
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  activity: {
    id: string;
    type: "upload" | "review" | "approval" | "rejection" | "comment";
    title: string;
    description: string;
    timestamp: string;
    user: {
      name: string;
      avatar?: string;
    };
  };
  className?: string;
}

export function ActivityItem({ activity, className }: ActivityItemProps) {
  const iconMap = {
    upload: (
      <div className="rounded-full bg-info/20 p-2 text-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      </div>
    ),
    review: (
      <div className="rounded-full bg-warning/20 p-2 text-warning">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </div>
    ),
    approval: (
      <div className="rounded-full bg-success/20 p-2 text-success">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </div>
    ),
    rejection: (
      <div className="rounded-full bg-destructive/20 p-2 text-destructive">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      </div>
    ),
    comment: (
      <div className="rounded-full bg-muted p-2 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>
    ),
  };

  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex-shrink-0">{iconMap[activity.type]}</div>
      <div className="flex-1 relative">
        <h4 className="text-sm font-medium">{activity.title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs font-medium">{activity.user.name}</span>
          <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
