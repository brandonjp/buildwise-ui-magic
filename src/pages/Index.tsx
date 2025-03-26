
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to dashboard or login
    const isAuthenticated = true; // In a real app, check if user is authenticated
    
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-semibold text-2xl">
            GC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
