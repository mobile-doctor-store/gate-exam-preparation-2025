import { userStats, activities, subjects } from '@/lib/data';
import { User } from '@/lib/auth';

interface DashboardProps {
  user: User | null;
}

export default function Dashboard({ user }: DashboardProps) {
  return (
    <section className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">
          Welcome back, {user?.name || 'Student'}!
        </h2>
        <p className="text-neutral-600">
          Track your GATE CSE preparation progress and continue your learning journey.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Questions Solved</p>
              <p className="text-2xl font-bold text-neutral-800">{userStats.questionsSolved.toLocaleString()}</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <i className="fas fa-check-circle text-primary text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-secondary">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>+12% from last week</span>
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Accuracy Rate</p>
              <p className="text-2xl font-bold text-neutral-800">{userStats.accuracy}%</p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <i className="fas fa-bullseye text-secondary text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-secondary">
              <i className="fas fa-arrow-up mr-1"></i>
              <span>+3.2% improvement</span>
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Mock Tests</p>
              <p className="text-2xl font-bold text-neutral-800">{userStats.mockTests}</p>
            </div>
            <div className="bg-accent/10 p-3 rounded-lg">
              <i className="fas fa-clipboard-list text-accent text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-neutral-600">
              <span>Last: 68/100 marks</span>
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Study Streak</p>
              <p className="text-2xl font-bold text-neutral-800">{userStats.studyStreak} days</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <i className="fas fa-fire text-red-500 text-xl"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-secondary">
              <i className="fas fa-trophy mr-1"></i>
              <span>Personal best!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject-wise Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
          <h3 className="text-lg font-semibold text-neutral-800 mb-4">Subject-wise Progress</h3>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 ${subject.color} rounded-full mr-3`}></div>
                  <span className="text-sm font-medium text-neutral-700">{subject.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="subject-progress-bar">
                    <div
                      className={`progress-fill ${subject.color}`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-neutral-600">{subject.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
          <h3 className="text-lg font-semibold text-neutral-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`${activity.color} p-2 rounded-lg`}>
                  <i className={`${activity.icon} text-sm`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-800">{activity.title}</p>
                  <p className="text-xs text-neutral-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
