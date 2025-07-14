import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExitButton } from "@/components/Layout/ExitButton";
import { Baby, Heart, AlertCircle } from "lucide-react";

export default function TrimesterInfo() {
  // Mock trimester calculation - in a real app, this would be calculated from due date
  const currentTrimester = 2;
  
  // Mock trimester data - in a real app, this would come from API
  const trimesterData = {
    1: {
      trimester: 1,
      title: "First Trimester (Weeks 1–12)",
      description: "The first trimester is critical for fetal development. The baby's major organs begin to form.",
      healthTips: "Take prenatal vitamins with folic acid. Eat a balanced diet rich in fruits and vegetables. Avoid alcohol, smoking, and caffeine. Schedule your first prenatal visit.",
    },
    2: {
      trimester: 2,
      title: "Second Trimester (Weeks 13–27)",
      description: "The second trimester is often the most comfortable period. The baby grows rapidly, and you may feel movement.",
      healthTips: "Maintain regular exercise like walking or prenatal yoga. Stay hydrated and monitor weight gain. Attend regular checkups to track fetal growth.",
    },
    3: {
      trimester: 3,
      title: "Third Trimester (Weeks 28–40)",
      description: "The third trimester prepares you for delivery. The baby gains weight and organs mature.",
      healthTips: "Prepare a birth plan. Practice breathing exercises for labor. Get adequate rest and avoid heavy lifting. Discuss delivery options with your healthcare provider.",
    },
  };

  const currentInfo = trimesterData[currentTrimester as keyof typeof trimesterData];

  return (
    <div className="trimester-container">
      <ExitButton to="/dashboard" />
      
      <div className="w-full max-w-4xl space-y-6">
        <Card className="her-health-card">
          <CardHeader>
            <CardTitle className="her-health-header text-center flex items-center justify-center gap-2">
              <Baby className="w-6 h-6" />
              Trimester Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground text-2xl font-bold mb-4">
                {currentTrimester}
              </div>
              <h2 className="text-2xl font-bold her-health-header mb-2">
                {currentInfo.title}
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Heart className="w-5 h-5 text-primary" />
                    About This Trimester
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {currentInfo.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Health Tips & Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {currentInfo.healthTips}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Always consult with your healthcare provider for personalized medical advice.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}