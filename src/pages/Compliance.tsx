
import { MainLayout } from "@/components/layout/MainLayout";
import { ComplianceCard } from "@/components/compliance/ComplianceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, Printer } from "lucide-react";

const Compliance = () => {
  // Sample compliance data
  const overallCompliance = 78;
  
  const requirementCategories = [
    {
      name: "Financial Documentation",
      compliance: 85,
      requirements: [
        {
          id: "req-1",
          title: "Budget Justification",
          description: "Detailed breakdown of how funds will be allocated",
          status: "met" as const,
          confidenceScore: 92,
          documentReference: "BudgetJustification.pdf"
        },
        {
          id: "req-2",
          title: "Income Verification",
          description: "Proof of income for all beneficiaries",
          status: "not-met" as const,
          confidenceScore: 42,
          documentReference: "IncomeVerification2023.pdf"
        }
      ]
    },
    {
      name: "Project Timeline",
      compliance: 78,
      requirements: [
        {
          id: "req-3",
          title: "Milestone Schedule",
          description: "Detailed timeline with project milestones",
          status: "partial" as const,
          confidenceScore: 68,
          documentReference: "ProjectTimeline.xlsx"
        }
      ]
    },
    {
      name: "Legal Documentation",
      compliance: 100,
      requirements: [
        {
          id: "req-4",
          title: "Property Deed",
          description: "Legal proof of property ownership",
          status: "met" as const,
          confidenceScore: 96,
          documentReference: "PropertyDeed.pdf"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Compliance Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Draw Package #DP-2023-42 | Housing Development Fund
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>Approve Package</Button>
        </div>
      </div>
      
      <div className="grid gap-6 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Overall Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{overallCompliance}% Compliant</span>
                <span className="text-sm text-muted-foreground">
                  {requirementCategories.reduce((acc, category) => acc + category.requirements.length, 0)} Requirements
                </span>
              </div>
              <Progress value={overallCompliance} className="h-2" />
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Met</span>
                  <span className="text-lg font-medium">3</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Partially Met</span>
                  <span className="text-lg font-medium">1</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Not Met</span>
                  <span className="text-lg font-medium">1</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          {requirementCategories.map(category => (
            <div key={category.name}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <div className="flex items-center gap-2">
                  <Progress value={category.compliance} className="w-32 h-2" />
                  <span className="text-sm font-medium">{category.compliance}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.requirements.map(requirement => (
                  <ComplianceCard key={requirement.id} requirement={requirement} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Missing Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-md">
                <div className="rounded-full bg-destructive/20 p-2 text-destructive mt-1">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Environmental Impact Assessment</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Required for all construction projects over $500,000
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Upload Document
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-md">
                <div className="rounded-full bg-destructive/20 p-2 text-destructive mt-1">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Contractor Certification</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Verified certification for all contractors working on the project
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Upload Document
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Compliance;
