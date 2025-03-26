
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type DocumentStatus = "valid" | "invalid" | "review" | "unidentified";

interface DocumentCardProps {
  document: {
    id: string;
    name: string;
    status: DocumentStatus;
    type: string;
    confidenceScore?: number;
    preview?: string;
    errorMessage?: string;
  };
  className?: string;
  onView?: (id: string) => void;
  onDownload?: (id: string) => void;
}

export function DocumentCard({ document, className, onView, onDownload }: DocumentCardProps) {
  const statusConfig = {
    valid: {
      color: "success",
      icon: <CheckCircle className="h-4 w-4" />,
      label: "Valid",
    },
    invalid: {
      color: "destructive",
      icon: <AlertTriangle className="h-4 w-4" />,
      label: "Invalid",
    },
    review: {
      color: "warning",
      icon: <Eye className="h-4 w-4" />,
      label: "Review Required",
    },
    unidentified: {
      color: "muted-foreground",
      icon: <HelpCircle className="h-4 w-4" />,
      label: "Unidentified",
    },
  };

  const status = statusConfig[document.status];

  return (
    <Card className={cn("overflow-hidden transition-shadow hover:shadow-md", className)}>
      <div 
        className="h-32 bg-muted flex items-center justify-center" 
        style={document.preview ? { backgroundImage: `url(${document.preview})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {!document.preview && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-muted-foreground"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="truncate flex-1 pr-2">
            <p className="font-medium text-sm truncate" title={document.name}>
              {document.name}
            </p>
            <p className="text-xs text-muted-foreground">{document.type}</p>
          </div>
          
          <div className={cn(
            "text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1",
            `text-${status.color} bg-${status.color}/10`
          )}>
            {status.icon}
            <span>{status.label}</span>
          </div>
        </div>
        
        {document.confidenceScore !== undefined && (
          <div className="flex items-center gap-1 mb-2">
            <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full",
                  document.confidenceScore > 80 ? "bg-success" :
                  document.confidenceScore > 50 ? "bg-warning" : "bg-destructive"
                )}
                style={{ width: `${document.confidenceScore}%` }}
              />
            </div>
            <span className="text-xs font-medium">{document.confidenceScore}%</span>
          </div>
        )}
        
        {document.errorMessage && (
          <p className="text-xs text-destructive mb-2">
            {document.errorMessage}
          </p>
        )}

        <div className="flex justify-between mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-1/2 mr-1"
            onClick={() => onView && onView(document.id)}
          >
            <Eye className="h-3 w-3 mr-1" />
            View
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-1/2 ml-1"
            onClick={() => onDownload && onDownload(document.id)}
          >
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
