import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import herHealthLogo from "@/assets/her_health_logo.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="text-center mb-8">
        <img 
          src={herHealthLogo} 
          alt="HER HEALTH Logo" 
          className="w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold her-health-header mb-4">
          HER HEALTH
        </h1>
        <p className="text-2xl text-foreground mb-2">
          Empowering Maternal Care
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Supporting expectant mothers, caretakers, and health workers with personalized 
          health tracking, automated trimester guidance, and comprehensive care management.
        </p>
      </div>

      <Card className="her-health-card w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="her-health-header">Welcome to HER HEALTH</CardTitle>
          <CardDescription>
            Your comprehensive maternal healthcare companion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full her-health-button-primary" 
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Improving maternal healthcare access in developing regions
        </p>
      </div>
    </div>
  );
}