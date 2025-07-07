import { subjects } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Syllabus() {
  const totalTopics = subjects.reduce((acc, subject) => acc + subject.topics.length, 0);
  const completedTopics = subjects.reduce((acc, subject) => 
    acc + subject.topics.filter(topic => topic.status === 'completed').length, 0
  );
  const inProgressTopics = subjects.reduce((acc, subject) => 
    acc + subject.topics.filter(topic => topic.status === 'in-progress').length, 0
  );
  const notStartedTopics = totalTopics - completedTopics - inProgressTopics;
  const overallProgress = Math.round((completedTopics / totalTopics) * 100);

  return (
    <section className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">GATE CSE Syllabus</h2>
        <p className="text-neutral-600">Complete syllabus coverage with topic-wise progress tracking and resources.</p>
      </div>

      {/* Syllabus Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 sticky top-24">
            <h3 className="font-semibold text-neutral-800 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Total Topics</span>
                <span className="text-sm font-medium">{totalTopics}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Completed</span>
                <span className="text-sm font-medium text-secondary">{completedTopics}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">In Progress</span>
                <span className="text-sm font-medium text-accent">{inProgressTopics}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Not Started</span>
                <span className="text-sm font-medium text-red-500">{notStartedTopics}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{overallProgress}%</div>
                <div className="text-sm text-neutral-600">Overall Progress</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {/* Subject Cards */}
          <div className="space-y-6">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`${subject.color}/10 p-3 rounded-lg mr-4`}>
                        <i className={`fas fa-sitemap ${subject.color.replace('bg-', 'text-')} text-lg`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-800">{subject.name}</h3>
                        <p className="text-sm text-neutral-600">Foundation of computer science programming</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${subject.color.replace('bg-', 'text-')}`}>
                        {subject.progress}%
                      </div>
                      <div className="text-sm text-neutral-600">Progress</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-neutral-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${subject.color}`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subject.topics.map((topic) => (
                      <div key={topic.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            topic.status === 'completed' ? 'bg-secondary' :
                            topic.status === 'in-progress' ? 'bg-accent' : 'bg-red-200'
                          }`}></div>
                          <span className="text-sm font-medium text-neutral-700">{topic.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className={`fas text-sm ${
                            topic.status === 'completed' ? 'fa-check-circle text-secondary' :
                            topic.status === 'in-progress' ? 'fa-clock text-accent' : 'fa-circle text-red-300'
                          }`}></i>
                          <span className="text-xs text-neutral-600">{topic.questionCount} Qs</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="link" className="text-primary hover:text-blue-600 text-sm font-medium p-0">
                        <i className="fas fa-play mr-1"></i>Practice Questions
                      </Button>
                      <Button variant="link" className="text-neutral-600 hover:text-neutral-800 text-sm font-medium p-0">
                        <i className="fas fa-book mr-1"></i>Study Resources
                      </Button>
                    </div>
                    <span className="text-xs text-neutral-500">{subject.questionCount} total questions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
