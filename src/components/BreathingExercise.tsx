import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

interface BreathingPhase {
  name: string;
  duration: number;
  instruction: string;
}

interface BreathingExerciseProps {
  type?: "box" | "4-7-8";
}

const breathingPatterns = {
  box: [
    { name: "Breathe In", duration: 4, instruction: "Inhale deeply through your nose" },
    { name: "Hold", duration: 4, instruction: "Hold your breath gently" },
    { name: "Breathe Out", duration: 4, instruction: "Exhale slowly through your mouth" },
    { name: "Hold", duration: 4, instruction: "Hold with empty lungs" }
  ],
  "4-7-8": [
    { name: "Breathe In", duration: 4, instruction: "Inhale through your nose" },
    { name: "Hold", duration: 7, instruction: "Hold your breath" },
    { name: "Breathe Out", duration: 8, instruction: "Exhale completely through your mouth" }
  ]
};

export function BreathingExercise({ type = "box" }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(breathingPatterns[type][0].duration);
  const [completedCycles, setCompletedCycles] = useState(0);

  const pattern = breathingPatterns[type];
  const currentPhase = pattern[currentPhaseIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      const nextPhaseIndex = (currentPhaseIndex + 1) % pattern.length;
      
      if (nextPhaseIndex === 0) {
        setCompletedCycles((prev) => prev + 1);
      }
      
      setCurrentPhaseIndex(nextPhaseIndex);
      setTimeLeft(pattern[nextPhaseIndex].duration);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, currentPhaseIndex, pattern]);

  const toggleExercise = () => {
    setIsActive(!isActive);
  };

  const resetExercise = () => {
    setIsActive(false);
    setCurrentPhaseIndex(0);
    setTimeLeft(pattern[0].duration);
    setCompletedCycles(0);
  };

  const getAnimationScale = () => {
    const progress = (currentPhase.duration - timeLeft) / currentPhase.duration;
    if (currentPhase.name === "Breathe In") {
      return 0.5 + (progress * 0.5); // Scale from 0.5 to 1
    } else if (currentPhase.name === "Breathe Out") {
      return 1 - (progress * 0.5); // Scale from 1 to 0.5
    }
    return currentPhase.name === "Hold" && currentPhaseIndex === 1 ? 1 : 0.5; // Hold at max or min
  };

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Breathing Circle */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div
              className="absolute w-full h-full rounded-full bg-gradient-calm opacity-20 blur-xl transition-all duration-1000 ease-in-out"
              style={{
                transform: `scale(${getAnimationScale()})`,
              }}
            />
            <div
              className="absolute w-48 h-48 rounded-full bg-gradient-calm transition-all duration-1000 ease-in-out flex items-center justify-center"
              style={{
                transform: `scale(${getAnimationScale()})`,
              }}
            >
              <div className="text-center text-white">
                <div className="text-5xl font-bold">{timeLeft}</div>
                <div className="text-sm opacity-90 mt-1">seconds</div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">
              {currentPhase.name}
            </h3>
            <p className="text-muted-foreground">
              {currentPhase.instruction}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{completedCycles}</div>
              <div className="text-sm text-muted-foreground">Cycles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">
                {Math.floor(completedCycles * pattern.reduce((sum, p) => sum + p.duration, 0) / 60)}
              </div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <Button
              size="lg"
              onClick={toggleExercise}
              className="bg-primary hover:bg-primary/90"
            >
              {isActive ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Start
                </>
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={resetExercise}
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="w-full max-w-md">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              {pattern.map((phase, idx) => (
                <div
                  key={idx}
                  className={`transition-colors ${
                    idx === currentPhaseIndex ? "text-primary font-semibold" : ""
                  }`}
                >
                  {phase.name}
                </div>
              ))}
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-calm transition-all duration-300"
                style={{
                  width: `${((currentPhaseIndex / pattern.length) + ((currentPhase.duration - timeLeft) / currentPhase.duration / pattern.length)) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
