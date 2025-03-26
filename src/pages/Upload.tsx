
import { MainLayout } from "@/components/layout/MainLayout";
import { UploadZone } from "@/components/upload/UploadZone";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CheckCircle, AlertTriangle, Eye, HelpCircle } from "lucide-react";
import { useState } from "react";

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  
  // Sample documents
  const sampleDocuments = [
    {
      id: "doc-1",
      name: "BudgetJustification.pdf",
      status: "valid" as const,
      type: "Budget Justification",
      confidenceScore: 95,
      preview: "",
    },
    {
      id: "doc-2",
      name: "IncomeVerification2023.pdf",
      status: "invalid" as const,
      type: "Income Verification",
      confidenceScore: 42,
      preview: "",
      errorMessage: "Missing signatures on page 2"
    },
    {
      id: "doc-3",
      name: "ProjectTimeline.xlsx",
      status: "review" as const,
      type: "Project Timeline",
      confidenceScore: 78,
      preview: "",
    },
    {
      id: "doc-4",
      name: "Attachment_298.pdf",
      status: "unidentified" as const,
      type: "Unknown Document",
      preview: "",
    }
  ];
  
  const handleUpload = (files: File[]) => {
    // Convert uploaded files to our document format
    const newFiles = files.map((file, index) => ({
      id: `upload-${Date.now()}-${index}`,
      name: file.name,
      status: "unidentified" as const,
      type: "Unknown Document",
      preview: "",
    }));
    
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  
  const handleViewDocument = (id: string) => {
    console.log("Viewing document:", id);
  };
  
  const handleDownloadDocument = (id: string) => {
    console.log("Downloading document:", id);
  };
  
  // Combine sample and uploaded files
  const allDocuments = [...sampleDocuments, ...uploadedFiles];
  
  // Filter documents by status
  const validDocuments = allDocuments.filter(doc => doc.status === "valid");
  const invalidDocuments = allDocuments.filter(doc => doc.status === "invalid");
  const reviewDocuments = allDocuments.filter(doc => doc.status === "review");
  const unidentifiedDocuments = allDocuments.filter(doc => doc.status === "unidentified");

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Upload Documents</h1>
          <p className="text-muted-foreground mt-1">
            Upload and verify documents for your grant draw package
          </p>
        </div>
        <Button>Continue to Verification</Button>
      </div>
      
      <div className="grid gap-6 mt-6">
        <UploadZone onUpload={handleUpload} />
        
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Document Status</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-success/20 p-3 text-success mb-2">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="font-medium">{validDocuments.length}</p>
                <p className="text-sm text-muted-foreground">Valid Documents</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-destructive/20 p-3 text-destructive mb-2">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <p className="font-medium">{invalidDocuments.length}</p>
                <p className="text-sm text-muted-foreground">Invalid Documents</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-warning/20 p-3 text-warning mb-2">
                  <Eye className="h-6 w-6" />
                </div>
                <p className="font-medium">{reviewDocuments.length}</p>
                <p className="text-sm text-muted-foreground">Review Required</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="rounded-full bg-muted p-3 text-muted-foreground mb-2">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <p className="font-medium">{unidentifiedDocuments.length}</p>
                <p className="text-sm text-muted-foreground">Unidentified</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-md mb-4">
              <TabsTrigger value="all">All ({allDocuments.length})</TabsTrigger>
              <TabsTrigger value="valid">Valid ({validDocuments.length})</TabsTrigger>
              <TabsTrigger value="invalid">Invalid ({invalidDocuments.length})</TabsTrigger>
              <TabsTrigger value="review">Review ({reviewDocuments.length})</TabsTrigger>
              <TabsTrigger value="unidentified">Unidentified ({unidentifiedDocuments.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allDocuments.map(doc => (
                  <DocumentCard 
                    key={doc.id} 
                    document={doc} 
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="valid" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {validDocuments.map(doc => (
                  <DocumentCard 
                    key={doc.id} 
                    document={doc} 
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="invalid" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {invalidDocuments.map(doc => (
                  <DocumentCard 
                    key={doc.id} 
                    document={doc} 
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="review" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {reviewDocuments.map(doc => (
                  <DocumentCard 
                    key={doc.id} 
                    document={doc} 
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="unidentified" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {unidentifiedDocuments.map(doc => (
                  <DocumentCard 
                    key={doc.id} 
                    document={doc} 
                    onView={handleViewDocument}
                    onDownload={handleDownloadDocument}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Upload;
