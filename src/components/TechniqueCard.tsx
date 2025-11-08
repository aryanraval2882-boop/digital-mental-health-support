import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import { Technique } from "@/data/techniques";
import { Link } from "react-router-dom";

interface TechniqueCardProps {
  technique: Technique;
}

export function TechniqueCard({ technique }: TechniqueCardProps) {
  const difficultyColors = {
    easy: "bg-secondary/20 text-secondary-foreground border-secondary/30",
    medium: "bg-warm/20 text-foreground border-warm/30",
    advanced: "bg-primary/20 text-primary-foreground border-primary/30"
  };

  const categoryIcons = {
    breathing: "🌬️",
    mindfulness: "🧘",
    cognitive: "🧠",
    movement: "💪",
    quick: "⚡"
  };

  return (
    <Link to={`/techniques/${technique.id}`}>
      <Card className="h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <span className="text-3xl" role="img" aria-label={technique.category}>
              {categoryIcons[technique.category]}
            </span>
            <Badge variant="outline" className={difficultyColors[technique.difficulty]}>
              {technique.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            {technique.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {technique.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{technique.timeMinutes} min</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>{technique.category}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
