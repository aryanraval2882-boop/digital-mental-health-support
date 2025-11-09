import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProgressData } from "@/lib/progressUtils";
import { techniques } from "@/data/techniques";
import { CheckCircle2, Clock, Flame, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Progress() {
  const progressData = getProgressData();
  const completedTechniquesData = techniques.filter(t => 
    progressData.completedTechniques.includes(t.id)
  );
  
  const completionRate = techniques.length > 0 
    ? Math.round((progressData.completedTechniques.length / techniques.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Your Progress</h1>
            <p className="text-lg text-muted-foreground">
              Track your journey to a calmer, more focused you
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Current Streak
                  </CardTitle>
                  <Flame className="h-5 w-5 text-warm" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {progressData.currentStreak}
                  <span className="text-lg text-muted-foreground ml-1">days</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Keep it going!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Practice Time
                  </CardTitle>
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {progressData.totalMinutes}
                  <span className="text-lg text-muted-foreground ml-1">min</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Time invested in yourself
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Completed Techniques
                  </CardTitle>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {progressData.completedTechniques.length}
                  <span className="text-lg text-muted-foreground ml-1">
                    / {techniques.length}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {completionRate}% complete
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Practice Sessions
                  </CardTitle>
                  <TrendingUp className="h-5 w-5 text-calm" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">
                  {progressData.practiceHistory.length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Sessions completed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Completed Techniques */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Completed Techniques
              </CardTitle>
              <CardDescription>
                Techniques you've mastered so far
              </CardDescription>
            </CardHeader>
            <CardContent>
              {completedTechniquesData.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    No completed techniques yet. Start your journey today!
                  </p>
                  <Link 
                    to="/techniques" 
                    className="text-primary hover:underline"
                  >
                    Explore Techniques →
                  </Link>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {completedTechniquesData.map((technique) => (
                    <Link 
                      key={technique.id}
                      to={`/techniques/${technique.id}`}
                      className="block"
                    >
                      <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-all hover:shadow-soft">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-2">
                            <CardTitle className="text-base">
                              {technique.title}
                            </CardTitle>
                            <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                          </div>
                          <CardDescription className="line-clamp-2">
                            {technique.shortDescription}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">
                              {technique.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {technique.timeMinutes} min
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Motivational Message */}
          {progressData.completedTechniques.length > 0 && (
            <Card className="bg-gradient-hero border-none text-center">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Keep Up the Great Work! 🎉
                </h3>
                <p className="text-white/90">
                  You're building healthy habits that will serve you for life.
                  {progressData.completedTechniques.length === techniques.length && (
                    <span className="block mt-2 font-semibold">
                      Amazing! You've completed all techniques! 🏆
                    </span>
                  )}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
