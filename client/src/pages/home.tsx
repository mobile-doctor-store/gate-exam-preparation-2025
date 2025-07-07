import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import Navigation from '@/components/navigation';
import LoginModal from '@/components/login-modal';
import Dashboard from '@/components/dashboard';
import Practice from '@/components/practice';
import Tests from '@/components/tests';
import Syllabus from '@/components/syllabus';
import Resources from '@/components/resources';

export default function Home() {
  const { user, isLoggedIn, isLoading, login } = useAuth();
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'practice':
        return <Practice />;
      case 'tests':
        return <Tests />;
      case 'syllabus':
        return <Syllabus />;
      case 'resources':
        return <Resources />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        user={user}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      <LoginModal 
        isOpen={!isLoggedIn && !isLoading}
        onLogin={login}
        isLoading={isLoading}
      />
    </div>
  );
}
