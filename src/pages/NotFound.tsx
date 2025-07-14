import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="her-health-card w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-6xl font-bold text-primary mb-2">404</div>
          <CardTitle className="her-health-header text-2xl">Page Not Found</CardTitle>
          <CardDescription>
            The page you're looking for doesn't exist in HER HEALTH.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => navigate("/")} 
            className="her-health-button-primary w-full"
          >
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
