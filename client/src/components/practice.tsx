import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const practiceModes = [
  {
    id: 'subject-wise',
    title: 'Subject-wise Practice',
    description: 'Focus on specific subjects like DSA, CN, OS, DBMS, etc.',
    icon: 'fas fa-list',
    color: 'bg-primary/10 text-primary',
    count: '8 subjects available'
  },
  {
    id: 'topic-wise',
    title: 'Topic-wise Practice',
    description: 'Dive deep into specific topics within each subject.',
    icon: 'fas fa-sitemap',
    color: 'bg-secondary/10 text-secondary',
    count: '120+ topics available'
  },
  {
    id: 'year-wise',
    title: 'Year-wise PYQs',
    description: 'Practice previous year questions from 2007-2024.',
    icon: 'fas fa-calendar',
    color: 'bg-accent/10 text-accent',
    count: '18 years available'
  },
  {
    id: 'difficulty-wise',
    title: 'Difficulty-wise',
    description: 'Practice based on Easy, Medium, or Hard difficulty levels.',
    icon: 'fas fa-signal',
    color: 'bg-red-100 text-red-500',
    count: '3 difficulty levels'
  },
  {
    id: 'method-wise',
    title: 'Method-wise',
    description: 'Practice by solution approach: Algorithms, Data Structures, etc.',
    icon: 'fas fa-cogs',
    color: 'bg-purple-100 text-purple-600',
    count: '12 methods available'
  },
  {
    id: 'random',
    title: 'Random Practice',
    description: 'Mixed questions from all subjects and years for comprehensive practice.',
    icon: 'fas fa-random',
    color: 'bg-pink-100 text-pink-600',
    count: '5000+ questions'
  }
];

export default function Practice() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedQuestionCount, setSelectedQuestionCount] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleStartPractice = () => {
    console.log('Starting practice session:', {
      subject: selectedSubject,
      questionCount: selectedQuestionCount,
      difficulty: selectedDifficulty
    });
    // Implement practice session logic
  };

  return (
    <section className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Practice Questions</h2>
        <p className="text-neutral-600">Choose your practice mode and start solving GATE CSE questions.</p>
      </div>

      {/* Practice Modes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {practiceModes.map((mode) => (
          <button
            key={mode.id}
            className="practice-mode-card text-left"
            onClick={() => console.log(`Selected practice mode: ${mode.id}`)}
          >
            <div className={`${mode.color} p-3 rounded-lg w-fit mb-4`}>
              <i className={`${mode.icon} text-xl`}></i>
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">{mode.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{mode.description}</p>
            <div className="flex items-center text-sm">
              <span className={mode.color.includes('primary') ? 'text-primary' : 
                           mode.color.includes('secondary') ? 'text-secondary' :
                           mode.color.includes('accent') ? 'text-accent' :
                           mode.color.includes('red') ? 'text-red-500' :
                           mode.color.includes('purple') ? 'text-purple-600' : 'text-pink-600'}>
                {mode.count}
              </span>
              <i className="fas fa-arrow-right ml-2"></i>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Practice Session */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Quick Practice Session</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
              <SelectItem value="cn">Computer Networks</SelectItem>
              <SelectItem value="os">Operating Systems</SelectItem>
              <SelectItem value="dbms">Database Management</SelectItem>
              <SelectItem value="coa">Computer Organization</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedQuestionCount} onValueChange={setSelectedQuestionCount}>
            <SelectTrigger>
              <SelectValue placeholder="Number of Questions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 Questions</SelectItem>
              <SelectItem value="25">25 Questions</SelectItem>
              <SelectItem value="50">50 Questions</SelectItem>
              <SelectItem value="100">100 Questions</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
              <SelectItem value="mixed">Mixed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleStartPractice}
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-play mr-2"></i>Start Practice Session
        </Button>
      </div>
    </section>
  );
}
