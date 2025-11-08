export interface Technique {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "breathing" | "mindfulness" | "cognitive" | "movement" | "quick";
  timeMinutes: number;
  difficulty: "easy" | "medium" | "advanced";
  benefits: string[];
  steps?: string[];
}

export const techniques: Technique[] = [
  {
    id: "box-breathing",
    title: "Box Breathing",
    shortDescription: "A calming 4-4-4-4 breathing pattern used by athletes and military personnel",
    fullDescription: "Box breathing, also known as square breathing, is a powerful stress-relief technique that can help you reset your nervous system. By breathing in a rhythmic pattern, you activate your parasympathetic nervous system, which promotes calmness and focus.",
    category: "breathing",
    timeMinutes: 5,
    difficulty: "easy",
    benefits: [
      "Reduces stress and anxiety",
      "Improves focus and concentration",
      "Lowers heart rate and blood pressure",
      "Can be done anywhere, anytime"
    ],
    steps: [
      "Breathe in for 4 seconds",
      "Hold your breath for 4 seconds",
      "Exhale slowly for 4 seconds",
      "Hold empty for 4 seconds",
      "Repeat for 5 minutes"
    ]
  },
  {
    id: "4-7-8-breathing",
    title: "4-7-8 Breathing",
    shortDescription: "A natural tranquilizer for the nervous system",
    fullDescription: "The 4-7-8 breathing technique is a simple but powerful relaxation method that can help you fall asleep faster and manage stress throughout the day. It works by increasing oxygen in the bloodstream and slowing your heart rate.",
    category: "breathing",
    timeMinutes: 3,
    difficulty: "easy",
    benefits: [
      "Helps you fall asleep faster",
      "Reduces anxiety quickly",
      "Calms the mind",
      "No equipment needed"
    ],
    steps: [
      "Breathe in through your nose for 4 seconds",
      "Hold your breath for 7 seconds",
      "Exhale completely through your mouth for 8 seconds",
      "Repeat 4 times"
    ]
  },
  {
    id: "body-scan",
    title: "Body Scan Meditation",
    shortDescription: "Progressive relaxation through mindful body awareness",
    fullDescription: "Body scan meditation is a mindfulness practice that involves systematically focusing on different parts of your body. This technique helps release physical tension and brings awareness to areas where you hold stress.",
    category: "mindfulness",
    timeMinutes: 10,
    difficulty: "medium",
    benefits: [
      "Releases physical tension",
      "Increases body awareness",
      "Improves sleep quality",
      "Reduces chronic pain"
    ],
    steps: [
      "Find a comfortable position",
      "Start at your toes and notice sensations",
      "Slowly move attention up through your body",
      "Release tension as you notice it",
      "End at the crown of your head"
    ]
  },
  {
    id: "5-minute-mindfulness",
    title: "5-Minute Mindfulness",
    shortDescription: "Quick present-moment awareness practice",
    fullDescription: "This short mindfulness practice helps you reset and refocus during a busy day. By bringing attention to your breath and present-moment experience, you can reduce stress and improve mental clarity.",
    category: "mindfulness",
    timeMinutes: 5,
    difficulty: "easy",
    benefits: [
      "Quick stress relief",
      "Improves focus",
      "Can be done anywhere",
      "No experience needed"
    ],
    steps: [
      "Sit comfortably and close your eyes",
      "Notice your breath without changing it",
      "When your mind wanders, gently return to the breath",
      "Expand awareness to sounds and sensations",
      "Slowly open your eyes"
    ]
  },
  {
    id: "cognitive-reframe",
    title: "Thought Reframing",
    shortDescription: "Transform negative thoughts into balanced perspectives",
    fullDescription: "Cognitive reframing is an evidence-based technique from CBT that helps you identify and challenge negative thought patterns. By examining your thoughts objectively, you can develop more balanced and realistic perspectives.",
    category: "cognitive",
    timeMinutes: 10,
    difficulty: "medium",
    benefits: [
      "Reduces negative thinking",
      "Builds resilience",
      "Improves problem-solving",
      "Increases self-awareness"
    ],
    steps: [
      "Identify the stressful thought",
      "Write down evidence for and against it",
      "Consider alternative perspectives",
      "Create a more balanced thought",
      "Notice how you feel"
    ]
  },
  {
    id: "desk-stretches",
    title: "Desk Stretches",
    shortDescription: "Quick physical movement to release tension",
    fullDescription: "Simple stretches you can do at your desk to release physical tension, improve circulation, and give your mind a break from studying or working.",
    category: "movement",
    timeMinutes: 3,
    difficulty: "easy",
    benefits: [
      "Releases muscle tension",
      "Improves circulation",
      "Increases energy",
      "Prevents desk-related pain"
    ],
    steps: [
      "Neck rolls in both directions",
      "Shoulder shrugs and rolls",
      "Seated spinal twist",
      "Wrist and finger stretches",
      "Forward fold from seated position"
    ]
  },
  {
    id: "five-senses",
    title: "5-4-3-2-1 Grounding",
    shortDescription: "Use your senses to anchor to the present moment",
    fullDescription: "The 5-4-3-2-1 technique is a powerful grounding exercise that uses your five senses to bring you back to the present moment, especially helpful during anxiety or panic.",
    category: "quick",
    timeMinutes: 2,
    difficulty: "easy",
    benefits: [
      "Stops anxiety spirals",
      "Quick and effective",
      "Works anywhere",
      "No preparation needed"
    ],
    steps: [
      "Name 5 things you can see",
      "Name 4 things you can touch",
      "Name 3 things you can hear",
      "Name 2 things you can smell",
      "Name 1 thing you can taste"
    ]
  },
  {
    id: "progressive-relaxation",
    title: "Progressive Muscle Relaxation",
    shortDescription: "Systematically tense and release muscle groups",
    fullDescription: "Progressive muscle relaxation involves tensing and then releasing different muscle groups throughout your body. This practice helps you recognize and release physical tension.",
    category: "movement",
    timeMinutes: 15,
    difficulty: "medium",
    benefits: [
      "Deep physical relaxation",
      "Reduces muscle tension",
      "Improves body awareness",
      "Helps with sleep"
    ],
    steps: [
      "Start with your feet, tense for 5 seconds",
      "Release and notice the difference",
      "Move up through each muscle group",
      "End with facial muscles",
      "Rest and notice full-body relaxation"
    ]
  }
];

export const categories = [
  { id: "all", label: "All Techniques" },
  { id: "breathing", label: "Breathing" },
  { id: "mindfulness", label: "Mindfulness" },
  { id: "cognitive", label: "Cognitive" },
  { id: "movement", label: "Movement" },
  { id: "quick", label: "Quick Relief" }
];

export function getTechniqueById(id: string): Technique | undefined {
  return techniques.find(t => t.id === id);
}

export function getTechniquesByCategory(category: string): Technique[] {
  if (category === "all") return techniques;
  return techniques.filter(t => t.category === category);
}
