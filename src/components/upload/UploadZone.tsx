
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  onUpload?: (files: File[]) => void;
  className?: string;
  accept?: string;
  multiple?: boolean;
}

export function UploadZone({ 
  onUpload, 
  className, 
  accept = "application/pdf, image/*", 
  multiple = true 
}: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  }, []);

  const handleFiles = useCallback((fileList: FileList) => {
    const files = Array.from(fileList);
    
    // Simulate upload process
    setUploading(true);
    setProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setUploading(false);
        if (onUpload) onUpload(files);
      }
    }, 100);
  }, [onUpload]);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        <div
          className={cn(
            "flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg transition-colors",
            isDragging ? "border-primary bg-primary/5" : "border-border",
            uploading ? "pointer-events-none" : "cursor-pointer"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!uploading ? (
            <>
              <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Drag and drop your files</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
                Drop your PDF documents, images or other files here to upload them automatically to the system
              </p>
              <input
                type="file"
                className="hidden"
                accept={accept}
                multiple={multiple}
                id="file-upload"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload">
                <Button asChild>
                  <span>Select Files</span>
                </Button>
              </label>
            </>
          ) : (
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Uploading files...</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                Please wait while your files are being uploaded and processed
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
