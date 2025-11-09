import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { BreathingExercise } from "@/components/BreathingExercise";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTechniqueById } from "@/data/techniques";
import { addPracticeSession } from "@/lib/progressUtils";
import { ArrowLeft, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TechniqueDetail() {
  const { id } = useParams<{ id: string }>();
  const technique = getTechniqueById(id || "");
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (id) {
      const completed = localStorage.getItem(`completed-${id}`);
      setIsCompleted(completed === "true");
    }
  }, [id]);

  if (!technique) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Technique Not Found</h1>
            <Button asChild>
              <Link to="/techniques">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Techniques
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const markAsCompleted = () => {
    localStorage.setItem(`completed-${technique.id}`, "true");
    addPracticeSession(technique.id, technique.timeMinutes);
    setIsCompleted(true);
    toast.success("Great job! Technique marked as completed.", {
      description: "Your progress has been saved."
    });
  };

  const difficultyColors = {
    easy: "bg-secondary/20 text-secondary-foreground border-secondary/30",
    medium: "bg-warm/20 text-foreground border-warm/30",
    advanced: "bg-primary/20 text-primary-foreground border-primary/30"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back Button */}
          <Button variant="ghost" asChild>
            <Link to="/techniques">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Techniques
            </Link>
          </Button>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-4xl font-bold text-foreground">
                {technique.title}
              </h1>
              {isCompleted && (
                <Badge variant="outline" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Completed
                </Badge>
              )}
            </div>
            
            <p className="text-lg text-muted-foreground">
              {technique.shortDescription}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="outline" className={difficultyColors[technique.difficulty]}>
                {technique.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{technique.timeMinutes} minutes</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span className="capitalize">{technique.category}</span>
              </div>
            </div>
          </div>

          {/* Interactive Exercise */}
          {(technique.id === "box-breathing" || technique.id === "4-7-8-breathing") && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Interactive Practice
              </h2>
              <BreathingExercise type={technique.id === "box-breathing" ? "box" : "4-7-8"} />
            </div>
          )}

          {/* About This Technique */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>About This Technique</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                {technique.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
              <CardDescription>
                Research-backed benefits of this technique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {technique.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Steps */}
          {technique.steps && (
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>How to Practice</CardTitle>
                <CardDescription>
                  Follow these steps to get the most out of this technique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {technique.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-foreground pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {/* Complete Button */}
          {!isCompleted && (
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                onClick={markAsCompleted}
                className="bg-secondary hover:bg-secondary/90"
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Mark as Completed
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
