import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Brain, Heart, Sparkles, Timer, Users, Zap, AlertTriangle, TrendingUp, BookOpen, Lightbulb } from "lucide-react";

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

      {/* Mental Health Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Understanding Student Mental Health Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Academic pressure is at an all-time high, and students worldwide are facing unprecedented mental health challenges.
              </p>
            </div>

            {/* Statistics */}
            <Card className="mb-12 border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <CardTitle className="text-2xl">The Crisis in Numbers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-foreground">87%</p>
                    <p className="text-muted-foreground">of college students report feeling overwhelmed by academic demands (American College Health Association, 2023)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-foreground">60%</p>
                    <p className="text-muted-foreground">experience significant stress affecting their academic performance (WHO Global Student Health Survey)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-foreground">1 in 5</p>
                    <p className="text-muted-foreground">students experience symptoms of depression or anxiety disorders annually</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Global concern:</strong> Student suicide rates have increased by 30% over the past decade, with academic pressure cited as a leading contributing factor (International Association for Suicide Prevention, 2024). In high-pressure educational systems like South Korea, Japan, and India, exam-related stress has become a public health crisis.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Causes of Study-Related Stress */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Main Causes of Academic Stress</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Academic Pressures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• High-stakes exams and GPA requirements</li>
                      <li>• Heavy workload and assignment deadlines</li>
                      <li>• Competition for scholarships and opportunities</li>
                      <li>• Fear of failure and disappointing others</li>
                      <li>• Perfectionism and unrealistic self-expectations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <Users className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>Social & Environmental Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Financial worries and student debt</li>
                      <li>• Balancing work, study, and personal life</li>
                      <li>• Social isolation and relationship challenges</li>
                      <li>• Uncertain future and career anxiety</li>
                      <li>• Lack of adequate sleep and self-care time</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Psychological Effects */}
            <Card className="mb-12 bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-warm" />
                  <CardTitle className="text-2xl">Psychological Impact of Chronic Academic Stress</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Cognitive Effects:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Impaired concentration and memory retention</li>
                      <li>• Difficulty making decisions</li>
                      <li>• Racing thoughts and mental fatigue</li>
                      <li>• Reduced problem-solving abilities</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Emotional & Physical Effects:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Anxiety, panic attacks, and mood swings</li>
                      <li>• Persistent feelings of inadequacy</li>
                      <li>• Sleep disturbances and chronic fatigue</li>
                      <li>• Headaches, digestive issues, and weakened immunity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Mindfulness Matters */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Why Daily Mindfulness Practice Changes Everything
              </h3>
              
              <Card className="mb-8 bg-gradient-to-br from-primary/5 to-background border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">The Science Behind Mindfulness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Mindfulness—the practice of bringing focused, non-judgmental awareness to the present moment—has been extensively studied in neuroscience and psychology. Research consistently shows that regular mindfulness practice literally rewires the brain.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-4">
                      <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Reduces Stress Hormones</h4>
                        <p className="text-sm text-muted-foreground">Studies show that just 8 weeks of mindfulness practice significantly lowers cortisol levels (the primary stress hormone) by up to 25% (Hoge et al., Harvard Medical School, 2023)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-2 bg-secondary rounded-full flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Enhances Brain Function</h4>
                        <p className="text-sm text-muted-foreground">MRI scans reveal that mindfulness meditation increases gray matter density in brain regions associated with learning, memory, and emotional regulation (Lazar et al., 2023)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-2 bg-warm rounded-full flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Improves Academic Performance</h4>
                        <p className="text-sm text-muted-foreground">Students who practice mindfulness show improved focus, test scores, and GPA compared to non-practitioners (Mindfulness in Education Research, 2024)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-2 bg-calm rounded-full flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Builds Emotional Resilience</h4>
                        <p className="text-sm text-muted-foreground">Regular practice strengthens the prefrontal cortex, improving emotional regulation and reducing reactivity to stressful situations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <Timer className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Simple Daily Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Box Breathing (2 min):</strong> Inhale 4 counts, hold 4, exhale 4, hold 4. Activates the parasympathetic nervous system, instantly calming anxiety.
                      </li>
                      <li>
                        <strong className="text-foreground">Body Scan (5 min):</strong> Mentally scan from head to toe, releasing tension. Proven to reduce physical stress symptoms.
                      </li>
                      <li>
                        <strong className="text-foreground">Mindful Study Break (3 min):</strong> Close eyes, focus on breath. Resets attention span and improves information retention.
                      </li>
                      <li>
                        <strong className="text-foreground">Gratitude Reflection (2 min):</strong> Note three positive moments. Shifts brain toward positive neural pathways.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-secondary mb-2" />
                    <CardTitle>How It Helps Students Cope</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <strong className="text-foreground">Before Exams:</strong> Reduces test anxiety by 40% and improves recall under pressure
                      </li>
                      <li>
                        <strong className="text-foreground">During Study Sessions:</strong> Enhances concentration, allowing deeper learning in less time
                      </li>
                      <li>
                        <strong className="text-foreground">Managing Deadlines:</strong> Prevents overwhelm by focusing on one task at a time
                      </li>
                      <li>
                        <strong className="text-foreground">Long-term Benefits:</strong> Builds mental habits that protect against burnout throughout academic and professional life
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    <strong className="text-foreground text-lg">The bottom line:</strong> Just 5-10 minutes of daily mindfulness practice can transform how your brain responds to stress, turning academic challenges from overwhelming threats into manageable tasks.
                  </p>
                </CardContent>
              </Card>
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
