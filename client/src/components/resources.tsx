import { useState } from 'react';
import { resources } from '@/lib/data';
import { Button } from '@/components/ui/button';

const resourceCategories = [
  { id: 'books', label: 'Books & PDFs', icon: 'fas fa-book' },
  { id: 'videos', label: 'Video Lectures', icon: 'fas fa-video' },
  { id: 'notes', label: 'Study Notes', icon: 'fas fa-sticky-note' },
  { id: 'websites', label: 'Websites', icon: 'fas fa-globe' },
  { id: 'tools', label: 'Tools & Apps', icon: 'fas fa-tools' }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('books');

  const renderResourceContent = () => {
    switch (activeCategory) {
      case 'books':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.filter(r => r.type === 'book').map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={resource.image} 
                    alt={`${resource.title} cover`}
                    className="w-16 h-20 object-cover rounded-lg shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-800 mb-1">{resource.title}</h4>
                    <p className="text-sm text-neutral-600 mb-2">{resource.author}</p>
                    <div className="flex items-center space-x-4 text-xs text-neutral-500 mb-3">
                      <span>
                        <i className="fas fa-star text-accent mr-1"></i>
                        {resource.rating}/5
                      </span>
                      <span>
                        <i className="fas fa-download mr-1"></i>
                        {(resource.downloads / 1000).toFixed(1)}k
                      </span>
                      <span>
                        <i className="fas fa-file-pdf mr-1"></i>
                        {resource.format}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm"
                        className="bg-primary text-white px-3 py-1 text-xs font-medium hover:bg-blue-600"
                      >
                        Download PDF
                      </Button>
                      <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-neutral-800 p-1">
                        <i className="fas fa-bookmark"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-neutral-800">
                {resourceCategories.find(cat => cat.id === activeCategory)?.label} Coming Soon
              </h4>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">In Development</span>
            </div>
            <p className="text-neutral-600">
              We're curating the best {activeCategory === 'videos' ? 'video lectures' : 
              activeCategory === 'notes' ? 'study notes' : 
              activeCategory === 'websites' ? 'educational websites' : 'learning tools'} from top educators. Stay tuned!
            </p>
          </div>
        );
    }
  };

  return (
    <section className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Study Resources</h2>
        <p className="text-neutral-600">Curated collection of the best study materials for GATE CSE preparation.</p>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 sticky top-24">
            <h3 className="font-semibold text-neutral-800 mb-4">Categories</h3>
            <div className="space-y-2">
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Content */}
        <div className="lg:col-span-3">
          {renderResourceContent()}
        </div>
      </div>
    </section>
  );
}
