export interface ProgressData {
  completedTechniques: string[];
  practiceHistory: { date: string; techniqueId: string; duration: number }[];
  currentStreak: number;
  totalMinutes: number;
}

export function getProgressData(): ProgressData {
  const completedTechniques: string[] = [];
  const practiceHistory: { date: string; techniqueId: string; duration: number }[] = [];
  
  // Get completed techniques from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('completed-')) {
      const techniqueId = key.replace('completed-', '');
      completedTechniques.push(techniqueId);
    }
  }
  
  // Get practice history
  const historyStr = localStorage.getItem('practice-history');
  if (historyStr) {
    try {
      const history = JSON.parse(historyStr);
      practiceHistory.push(...history);
    } catch (e) {
      console.error('Failed to parse practice history', e);
    }
  }
  
  // Calculate streak
  const currentStreak = calculateStreak(practiceHistory);
  
  // Calculate total minutes
  const totalMinutes = practiceHistory.reduce((sum, session) => sum + session.duration, 0);
  
  return {
    completedTechniques,
    practiceHistory,
    currentStreak,
    totalMinutes
  };
}

export function addPracticeSession(techniqueId: string, duration: number) {
  const today = new Date().toISOString().split('T')[0];
  const historyStr = localStorage.getItem('practice-history');
  let history: { date: string; techniqueId: string; duration: number }[] = [];
  
  if (historyStr) {
    try {
      history = JSON.parse(historyStr);
    } catch (e) {
      console.error('Failed to parse practice history', e);
    }
  }
  
  history.push({ date: today, techniqueId, duration });
  localStorage.setItem('practice-history', JSON.stringify(history));
}

function calculateStreak(practiceHistory: { date: string; techniqueId: string; duration: number }[]): number {
  if (practiceHistory.length === 0) return 0;
  
  // Get unique practice dates sorted descending
  const uniqueDates = [...new Set(practiceHistory.map(p => p.date))].sort().reverse();
  
  if (uniqueDates.length === 0) return 0;
  
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  
  // Check if there's practice today or yesterday
  if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) {
    return 0;
  }
  
  // Count consecutive days
  let streak = 1;
  let expectedDate = new Date(uniqueDates[0]);
  
  for (let i = 1; i < uniqueDates.length; i++) {
    expectedDate = new Date(expectedDate.getTime() - 86400000);
    const expectedDateStr = expectedDate.toISOString().split('T')[0];
    
    if (uniqueDates[i] === expectedDateStr) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}
