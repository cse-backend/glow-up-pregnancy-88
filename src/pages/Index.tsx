
import { Heart, Activity, Calendar, User, Shield, Users, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-purple-900">Her Health</h1>
            </div>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h2 className="text-5xl font-bold text-purple-900 mb-6">
              Guiding Mothers, Saving Lives
            </h2>
            <p className="text-xl text-purple-700 mb-8">
              Empowering expectant mothers with personalized care, expert guidance, and community support throughout their pregnancy journey.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-purple-700">Expert medical guidance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-purple-700">Supportive community</span>
              </div>
              <div className="flex items-center space-x-3">
                <Baby className="h-5 w-5 text-orange-500" />
                <span className="text-purple-700">Healthy pregnancy tracking</span>
              </div>
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start Your Journey
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-purple-200 to-orange-200 rounded-2xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/4463db6e-24d5-4f1c-b9b2-5ad307da2e63.png" 
                alt="Beautiful Black pregnant woman in red dress" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-orange-100">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-xl text-purple-900">Pregnancy Tracking</CardTitle>
              <CardDescription className="text-purple-600">
                Monitor your pregnancy milestones, baby's development, and maternal health with expert-designed tracking tools.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-purple-100">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-xl text-purple-900">Appointment Management</CardTitle>
              <CardDescription className="text-purple-600">
                Never miss important prenatal appointments, tests, and checkups with smart scheduling and reminders.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-orange-100">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-xl text-purple-900">Maternal Wellness</CardTitle>
              <CardDescription className="text-purple-600">
                Get personalized nutrition, exercise, and wellness recommendations to support a healthy pregnancy.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Thousands of Mothers on Their Journey
          </h3>
          <p className="text-lg mb-6 text-purple-100">
            Every mother deserves expert care, support, and guidance. Start your empowered pregnancy journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
