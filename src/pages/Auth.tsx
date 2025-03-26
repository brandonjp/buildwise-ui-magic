
import { ProgramIdForm } from "@/components/auth/ProgramIdForm";

const Auth = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="relative h-12 w-12 mb-4">
        <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-semibold text-lg">
          GC
        </div>
      </div>
      <ProgramIdForm />
    </div>
  );
};

export default Auth;
