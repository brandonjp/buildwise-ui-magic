
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: {
    id: string;
    name: string;
    status: "active" | "inactive" | "completed";
    progress: number;
    budget: string;
    allocated: string;
    drawPackages: {
      total: number;
      pending: number;
    };
  };
  className?: string;
}

export function ProgramCard({ program, className }: ProgramCardProps) {
  const statusColors = {
    active: "bg-success/20 text-success",
    inactive: "bg-muted text-muted-foreground",
    completed: "bg-primary/20 text-primary"
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{program.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={cn("text-xs px-2 py-1 rounded-full font-medium", statusColors[program.status])}>
                {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Compliance</span>
            <span className="font-medium">{program.progress}%</span>
          </div>
          <Progress value={program.progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-xs text-muted-foreground">Total Budget</p>
            <p className="text-sm font-medium">{program.budget}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Allocated</p>
            <p className="text-sm font-medium">{program.allocated}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-muted-foreground">Draw Packages</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-medium">{program.drawPackages.total} total</span>
            {program.drawPackages.pending > 0 && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm font-medium text-warning">
                  {program.drawPackages.pending} pending
                </span>
              </>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="w-full">View Details</Button>
        <Button size="sm" className="w-full">Add Draw Package</Button>
      </CardFooter>
    </Card>
  );
}
