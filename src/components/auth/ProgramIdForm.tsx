
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router-dom";

export function ProgramIdForm() {
  const [programId, setProgramId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!programId) return;
    
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">GrantCheck AI</CardTitle>
        <CardDescription className="text-center">
          Enter your Program ID to access your grants
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="programId">Program ID</Label>
              <Input
                id="programId"
                placeholder="Enter your Program ID"
                value={programId}
                onChange={(e) => setProgramId(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="role" className="form-checkbox h-4 w-4" />
              <label htmlFor="role" className="text-sm text-muted-foreground">
                Sign in as Administrator
              </label>
            </div>
          </div>
          <Button className="w-full mt-4" type="submit" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Continue"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <p className="text-xs text-center text-muted-foreground">
          By continuing, you agree to the Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
}
