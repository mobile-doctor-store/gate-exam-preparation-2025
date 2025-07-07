import { useState } from 'react';
import { User } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginModalProps {
  isOpen: boolean;
  onLogin: (user: User) => Promise<boolean>;
  isLoading: boolean;
}

export default function LoginModal({ isOpen, onLogin, isLoading }: LoginModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim()) {
      setError('Please fill in all fields');
      return;
    }

    const phoneRegex = /^[+]?[1-9][\d\s\-()]{8,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      setError('Please enter a valid phone number');
      return;
    }

    const success = await onLogin({ name: name.trim(), phone: phone.trim() });
    if (!success) {
      setError('Failed to save your information. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
            Welcome to GATE CSE Master
          </h3>
          <p className="text-neutral-600 text-sm">
            Enter your details to track your progress
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              className="w-full"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            {isLoading ? 'Saving...' : 'Start Learning Journey'}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-neutral-500">
            Your progress will be saved and synced across devices
          </p>
        </div>
      </div>
    </div>
  );
}
