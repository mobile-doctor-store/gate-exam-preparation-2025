export interface Subject {
  id: string;
  name: string;
  progress: number;
  color: string;
  topics: Topic[];
  questionCount: number;
}

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  questionCount: number;
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface MockTest {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  duration: number;
  completed: boolean;
  score?: number;
  maxScore: number;
}

export interface LiveTest {
  id: string;
  name: string;
  date: string;
  time: string;
  duration: number;
  questionCount: number;
  registeredCount: number;
  status: 'upcoming' | 'completed' | 'live';
  rank?: number;
  totalParticipants?: number;
  score?: number;
  percentile?: number;
}

export interface TestSeries {
  id: string;
  name: string;
  description: string;
  totalTests: number;
  completedTests: number;
  progress: number;
  icon: string;
  color: string;
}

export interface Resource {
  id: string;
  title: string;
  author: string;
  type: 'book' | 'video' | 'notes' | 'website' | 'tool';
  rating: number;
  downloads: number;
  format: string;
  image: string;
  downloadUrl?: string;
}

export interface UserStats {
  questionsSolved: number;
  accuracy: number;
  mockTests: number;
  studyStreak: number;
}

export interface Activity {
  id: string;
  type: 'practice' | 'test' | 'study' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  color: string;
}

// Sample data
export const subjects: Subject[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    progress: 78,
    color: 'bg-primary',
    questionCount: 144,
    topics: [
      { id: 'arrays', name: 'Arrays & Linked Lists', completed: true, questionCount: 45, status: 'completed' },
      { id: 'trees', name: 'Trees & Graphs', completed: false, questionCount: 38, status: 'in-progress' },
      { id: 'sorting', name: 'Sorting & Searching', completed: true, questionCount: 32, status: 'completed' },
      { id: 'dp', name: 'Dynamic Programming', completed: false, questionCount: 29, status: 'not-started' },
    ]
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    progress: 85,
    color: 'bg-secondary',
    questionCount: 93,
    topics: [
      { id: 'osi', name: 'OSI Model & TCP/IP', completed: true, questionCount: 28, status: 'completed' },
      { id: 'routing', name: 'Routing Algorithms', completed: true, questionCount: 22, status: 'completed' },
      { id: 'security', name: 'Network Security', completed: false, questionCount: 18, status: 'in-progress' },
      { id: 'application', name: 'Application Layer', completed: true, questionCount: 25, status: 'completed' },
    ]
  },
  {
    id: 'os',
    name: 'Operating Systems',
    progress: 72,
    color: 'bg-accent',
    questionCount: 87,
    topics: [
      { id: 'processes', name: 'Process Management', completed: true, questionCount: 25, status: 'completed' },
      { id: 'memory', name: 'Memory Management', completed: false, questionCount: 22, status: 'in-progress' },
      { id: 'files', name: 'File Systems', completed: true, questionCount: 20, status: 'completed' },
      { id: 'sync', name: 'Synchronization', completed: false, questionCount: 20, status: 'not-started' },
    ]
  },
  {
    id: 'dbms',
    name: 'Database Management',
    progress: 91,
    color: 'bg-red-500',
    questionCount: 76,
    topics: [
      { id: 'relational', name: 'Relational Model', completed: true, questionCount: 20, status: 'completed' },
      { id: 'sql', name: 'SQL Queries', completed: true, questionCount: 18, status: 'completed' },
      { id: 'normalization', name: 'Normalization', completed: true, questionCount: 16, status: 'completed' },
      { id: 'transactions', name: 'Transactions', completed: true, questionCount: 22, status: 'completed' },
    ]
  },
  {
    id: 'coa',
    name: 'Computer Organization',
    progress: 64,
    color: 'bg-purple-500',
    questionCount: 68,
    topics: [
      { id: 'arithmetic', name: 'Computer Arithmetic', completed: true, questionCount: 18, status: 'completed' },
      { id: 'control', name: 'Control Unit', completed: false, questionCount: 15, status: 'in-progress' },
      { id: 'memory-arch', name: 'Memory Hierarchy', completed: true, questionCount: 17, status: 'completed' },
      { id: 'io', name: 'I/O Organization', completed: false, questionCount: 18, status: 'not-started' },
    ]
  }
];

export const mockTests: MockTest[] = [
  {
    id: 'mock-24',
    name: 'Mock Test #24',
    description: 'Full Syllabus • 65 Questions',
    questionCount: 65,
    duration: 180,
    completed: false,
    maxScore: 100
  },
  {
    id: 'mock-23',
    name: 'Mock Test #23',
    description: 'Completed • Score: 68/100',
    questionCount: 65,
    duration: 180,
    completed: true,
    score: 68,
    maxScore: 100
  }
];

export const liveTests: LiveTest[] = [
  {
    id: 'live-15',
    name: 'GATE CSE Live Test #15',
    date: 'Dec 25, 2024',
    time: '10:00 AM',
    duration: 180,
    questionCount: 65,
    registeredCount: 1247,
    status: 'upcoming'
  },
  {
    id: 'live-14',
    name: 'GATE CSE Live Test #14',
    date: 'Dec 18, 2024',
    time: '10:00 AM',
    duration: 180,
    questionCount: 65,
    registeredCount: 2156,
    status: 'completed',
    rank: 142,
    totalParticipants: 2156,
    score: 72,
    percentile: 91.2
  }
];

export const testSeries: TestSeries[] = [
  {
    id: 'complete-series',
    name: 'Complete GATE CSE Series',
    description: '20 Full-length mock tests covering entire GATE CSE syllabus',
    totalTests: 20,
    completedTests: 12,
    progress: 60,
    icon: 'fas fa-graduation-cap',
    color: 'bg-primary'
  },
  {
    id: 'subject-series',
    name: 'Subject-wise Series',
    description: 'Focused tests for each subject with detailed analysis',
    totalTests: 40,
    completedTests: 0,
    progress: 0,
    icon: 'fas fa-brain',
    color: 'bg-accent'
  },
  {
    id: 'speed-series',
    name: 'Speed Test Series',
    description: 'Quick 30-minute tests to improve solving speed',
    totalTests: 15,
    completedTests: 0,
    progress: 0,
    icon: 'fas fa-clock',
    color: 'bg-red-500'
  }
];

export const resources: Resource[] = [
  {
    id: 'clrs',
    title: 'Introduction to Algorithms (CLRS)',
    author: 'Thomas H. Cormen, Charles E. Leiserson',
    type: 'book',
    rating: 4.8,
    downloads: 12500,
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120',
    downloadUrl: '#'
  },
  {
    id: 'tanenbaum-cn',
    title: 'Computer Networks - Tanenbaum',
    author: 'Andrew S. Tanenbaum, David J. Wetherall',
    type: 'book',
    rating: 4.6,
    downloads: 8900,
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120',
    downloadUrl: '#'
  },
  {
    id: 'silberschatz-os',
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz, Peter Galvin',
    type: 'book',
    rating: 4.7,
    downloads: 11200,
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120',
    downloadUrl: '#'
  },
  {
    id: 'korth-dbms',
    title: 'Database System Concepts',
    author: 'Henry F. Korth, S. Sudarshan',
    type: 'book',
    rating: 4.5,
    downloads: 7800,
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120',
    downloadUrl: '#'
  }
];

export const userStats: UserStats = {
  questionsSolved: 1247,
  accuracy: 87.3,
  mockTests: 23,
  studyStreak: 14
};

export const activities: Activity[] = [
  {
    id: 'activity-1',
    type: 'test',
    title: 'Completed Mock Test #23',
    description: 'Scored 68/100 • 2 hours ago',
    timestamp: '2 hours ago',
    icon: 'fas fa-check-circle',
    color: 'bg-secondary/10 text-secondary'
  },
  {
    id: 'activity-2',
    type: 'practice',
    title: 'Solved 25 DSA Questions',
    description: 'Arrays & Linked Lists • 5 hours ago',
    timestamp: '5 hours ago',
    icon: 'fas fa-brain',
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 'activity-3',
    type: 'study',
    title: 'Studied Computer Networks',
    description: 'TCP/IP Protocol • Yesterday',
    timestamp: 'Yesterday',
    icon: 'fas fa-book',
    color: 'bg-accent/10 text-accent'
  },
  {
    id: 'activity-4',
    type: 'achievement',
    title: 'Achieved 14-day Study Streak',
    description: 'Keep it up! • Yesterday',
    timestamp: 'Yesterday',
    icon: 'fas fa-trophy',
    color: 'bg-purple-100 text-purple-600'
  }
];
