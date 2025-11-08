import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Brain, Heart, Sparkles, Timer, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Evidence-Based Stress Relief for Students
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Find Your
              <span className="bg-gradient-calm bg-clip-text text-transparent"> Calm</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover quick, practical techniques to manage stress, improve focus, 
              and feel better—backed by science, built for busy students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Link to="/techniques">
                  Explore Techniques
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/techniques/box-breathing">
                  Try Quick Exercise
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why CalmSpace?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand student life. That's why every technique is designed 
                to fit into your busy schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Timer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Quick & Effective</CardTitle>
                  <CardDescription>
                    Most techniques take 2-10 minutes. Perfect for between classes or study breaks.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Brain className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Science-Backed</CardTitle>
                  <CardDescription>
                    Every technique is based on peer-reviewed research from psychology and neuroscience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Zap className="h-10 w-10 text-warm mb-2" />
                  <CardTitle>Interactive Practice</CardTitle>
                  <CardDescription>
                    Guided exercises with timers, visuals, and step-by-step instructions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Users className="h-10 w-10 text-calm mb-2" />
                  <CardTitle>Built for Students</CardTitle>
                  <CardDescription>
                    Designed specifically for academic stress, exam anxiety, and student life challenges.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Your Privacy</CardTitle>
                  <CardDescription>
                    All progress is saved locally. No tracking, no selling your data, no ads.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-soft transition-all">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Free Forever</CardTitle>
                  <CardDescription>
                    100% free access to all techniques and features. No hidden costs or premium tiers.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-hero text-center border-none shadow-soft">
              <CardContent className="pt-12 pb-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Feel Better?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Start with a simple breathing exercise or explore our full catalog 
                  of stress-relief techniques. Your calmer self is just one click away.
                </p>
                <div className="pt-4">
                  <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                    <Link to="/techniques">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
