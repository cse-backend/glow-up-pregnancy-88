import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExitButton } from "@/components/Layout/ExitButton";
import { useNavigate } from "react-router-dom";
import { Baby, Bell, User, Mail, Phone, Weight, Calendar } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  // Mock user data - in a real app, this would come from authentication context
  const userData = {
    username: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "mother",
    contact: "+1-555-0123",
    weight: "65.5",
    dueDate: "2024-12-15",
  };

  const isMother = userData.role === "mother";

  return (
    <div className="dashboard-container">
      <ExitButton />
      
      <div className="w-full max-w-4xl space-y-6">
        <Card className="her-health-card">
          <CardHeader>
            <CardTitle className="her-health-header text-center flex items-center justify-center gap-2">
              <User className="w-6 h-6" />
              User Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Username:</p>
                  <p className="text-muted-foreground">{userData.username}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-muted-foreground">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                  R
                </span>
                <div>
                  <p className="font-semibold">Role:</p>
                  <p className="text-muted-foreground capitalize">{userData.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Contact:</p>
                  <p className="text-muted-foreground">{userData.contact}</p>
                </div>
              </div>

              {isMother && (
                <>
                  <div className="flex items-center gap-3">
                    <Weight className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Weight:</p>
                      <p className="text-muted-foreground">{userData.weight} kg</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Due Date:</p>
                      <p className="text-muted-foreground">{userData.dueDate}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isMother && (
            <Button
              className="her-health-button-primary h-20 text-lg"
              onClick={() => navigate("/trimester-info")}
            >
              <Baby className="w-6 h-6 mr-3" />
              View Trimester Info
            </Button>
          )}

          <Button
            className="her-health-button-secondary h-20 text-lg"
            onClick={() => navigate("/reminders")}
          >
            <Bell className="w-6 h-6 mr-3" />
            View Reminders
          </Button>
        </div>
      </div>
    </div>
  );
}