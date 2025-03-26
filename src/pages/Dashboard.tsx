
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProgramCard } from "@/components/dashboard/ProgramCard";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, AlertCircle, CheckCircle, BarChart3 } from "lucide-react";

const Dashboard = () => {
  // Sample data for dashboard
  const stats = [
    {
      title: "Total Draw Packages",
      value: "42",
      icon: <FileText className="h-4 w-4" />,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Awaiting Review",
      value: "8",
      icon: <AlertCircle className="h-4 w-4" />,
      trend: { value: 3, isPositive: false }
    },
    {
      title: "Compliance Rate",
      value: "94%",
      icon: <CheckCircle className="h-4 w-4" />,
      trend: { value: 2, isPositive: true }
    },
    {
      title: "Processing Efficiency",
      value: "3.2 days",
      icon: <BarChart3 className="h-4 w-4" />,
      trend: { value: 0.5, isPositive: true }
    }
  ];

  const programs = [
    {
      id: "prog-1",
      name: "Housing Development Fund",
      status: "active" as const,
      progress: 85,
      budget: "$2,500,000",
      allocated: "$1,750,000",
      drawPackages: {
        total: 28,
        pending: 5
      }
    },
    {
      id: "prog-2",
      name: "Community Growth Initiative",
      status: "active" as const,
      progress: 72,
      budget: "$1,800,000",
      allocated: "$950,000",
      drawPackages: {
        total: 14,
        pending: 3
      }
    },
    {
      id: "prog-3",
      name: "Small Business Recovery Grant",
      status: "completed" as const,
      progress: 100,
      budget: "$750,000",
      allocated: "$750,000",
      drawPackages: {
        total: 10,
        pending: 0
      }
    }
  ];

  const activities = [
    {
      id: "act-1",
      type: "upload" as const,
      title: "Documents Uploaded",
      description: "12 new documents uploaded to Housing Development Fund",
      timestamp: "Today at 2:34 PM",
      user: {
        name: "Sarah Johnson",
        avatar: ""
      }
    },
    {
      id: "act-2",
      type: "review" as const,
      title: "Draw Package Submitted for Review",
      description: "Draw Package #DP-2023-42 is ready for review",
      timestamp: "Today at 11:15 AM",
      user: {
        name: "Michael Chen",
        avatar: ""
      }
    },
    {
      id: "act-3",
      type: "approval" as const,
      title: "Draw Package Approved",
      description: "Draw Package #DP-2023-39 has been approved for payment",
      timestamp: "Yesterday at 4:52 PM",
      user: {
        name: "Amanda Rodriguez",
        avatar: ""
      }
    },
    {
      id: "act-4",
      type: "rejection" as const,
      title: "Draw Package Rejected",
      description: "Draw Package #DP-2023-40 was rejected due to missing documentation",
      timestamp: "Yesterday at 1:23 PM",
      user: {
        name: "John Smith",
        avatar: ""
      }
    }
  ];

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button>Create New Draw Package</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">Active Programs</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {programs.slice(0, 2).map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-md font-medium">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {activities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
