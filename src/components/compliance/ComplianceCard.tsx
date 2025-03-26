
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";

type VerificationStatus = "met" | "not-met" | "partial";

interface ComplianceCardProps {
  requirement: {
    id: string;
    title: string;
    description: string;
    status: VerificationStatus;
    confidenceScore?: number;
    documentReference?: string;
  };
  className?: string;
}

export function ComplianceCard({ requirement, className }: ComplianceCardProps) {
  const statusConfig = {
    "met": {
      color: "success",
      icon: <CheckCircle className="h-4 w-4" />,
      label: "Requirement Met",
    },
    "not-met": {
      color: "destructive",
      icon: <AlertTriangle className="h-4 w-4" />,
      label: "Requirement Not Met",
    },
    "partial": {
      color: "warning",
      icon: <HelpCircle className="h-4 w-4" />,
      label: "Partially Met",
    },
  };

  const status = statusConfig[requirement.status];

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{requirement.title}</h3>
          
          <div className={cn(
            "text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1",
            `text-${status.color} bg-${status.color}/10`
          )}>
            {status.icon}
            <span>{status.label}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">{requirement.description}</p>
        
        {requirement.confidenceScore !== undefined && (
          <div className="space-y-1 mb-3">
            <div className="flex justify-between text-xs">
              <span>AI Confidence</span>
              <span className="font-medium">{requirement.confidenceScore}%</span>
            </div>
            <Progress 
              value={requirement.confidenceScore} 
              className="h-1.5" 
              indicatorClassName={cn(
                requirement.confidenceScore > 80 ? "bg-success" :
                requirement.confidenceScore > 50 ? "bg-warning" : "bg-destructive"
              )}
            />
          </div>
        )}
        
        {requirement.documentReference && (
          <div className="mt-2">
            <p className="text-xs text-muted-foreground">Supporting Document</p>
            <p className="text-xs font-medium mt-1">{requirement.documentReference}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
