import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TechniqueCard } from "@/components/TechniqueCard";
import { Button } from "@/components/ui/button";
import { techniques, categories, getTechniquesByCategory } from "@/data/techniques";

export default function Techniques() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredTechniques = getTechniquesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Stress Relief Techniques
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore evidence-based techniques designed to help you manage stress, 
              improve focus, and find calm in your daily life.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Techniques Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechniques.map((technique) => (
              <TechniqueCard key={technique.id} technique={technique} />
            ))}
          </div>

          {filteredTechniques.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No techniques found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
