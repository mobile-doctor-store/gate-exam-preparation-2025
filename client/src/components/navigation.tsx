import { useState } from 'react';
import { User } from '@/lib/auth';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  user: User | null;
}

export default function Navigation({ currentSection, onSectionChange, user }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'practice', label: 'Practice', icon: 'fas fa-brain' },
    { id: 'tests', label: 'Tests', icon: 'fas fa-clipboard-check' },
    { id: 'syllabus', label: 'Syllabus', icon: 'fas fa-book' },
    { id: 'resources', label: 'Resources', icon: 'fas fa-graduation-cap' }
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">GATE CSE Master</h1>
            </div>
            <div className="hidden md:block ml-8">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-neutral-600 hover:text-primary'
                    }`}
                  >
                    <i className={`${item.icon} mr-2`}></i>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {user && (
                <div className="text-sm text-neutral-600">
                  <span>{user.name}</span>
                  <span className="text-neutral-400 mx-2">|</span>
                  <span>{user.phone}</span>
                </div>
              )}
              <button className="bg-neutral-100 p-2 rounded-full text-neutral-600 hover:text-primary transition-colors">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
