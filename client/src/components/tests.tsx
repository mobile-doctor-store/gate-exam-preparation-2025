import { mockTests, liveTests, testSeries } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Tests() {
  return (
    <section className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 mb-2">Tests & Assessments</h2>
        <p className="text-neutral-600">Take mock tests, live tests, and track your performance.</p>
      </div>

      {/* Test Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Mock Tests */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-800">Mock Tests</h3>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Full Length
            </span>
          </div>
          <p className="text-neutral-600 mb-6">Complete GATE pattern tests with 65 questions in 3 hours.</p>
          
          <div className="space-y-3 mb-6">
            {mockTests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <div>
                  <p className="font-medium text-neutral-800">{test.name}</p>
                  <p className="text-sm text-neutral-600">{test.description}</p>
                </div>
                <Button 
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    test.completed 
                      ? 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                      : 'bg-primary text-white hover:bg-blue-600'
                  }`}
                >
                  {test.completed ? 'View Results' : 'Start Test'}
                </Button>
              </div>
            ))}
          </div>
          
          <Button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            <i className="fas fa-plus mr-2"></i>Create Custom Mock Test
          </Button>
        </div>

        {/* Live Tests */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-800">Live Tests</h3>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
              Scheduled
            </span>
          </div>
          <p className="text-neutral-600 mb-6">Join live test sessions with real-time ranking and analysis.</p>
          
          <div className="space-y-3 mb-6">
            {liveTests.map((test) => (
              <div key={test.id} className="border border-neutral-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-800">{test.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    test.status === 'upcoming' 
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {test.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>
                <div className="text-sm text-neutral-600 mb-3">
                  <p><i className="fas fa-calendar mr-2"></i>{test.date} • {test.time}</p>
                  <p><i className="fas fa-clock mr-2"></i>{test.duration / 60} Hours • {test.questionCount} Questions</p>
                  {test.status === 'upcoming' ? (
                    <p><i className="fas fa-users mr-2"></i>{test.registeredCount.toLocaleString()} registered</p>
                  ) : (
                    <>
                      <p><i className="fas fa-trophy mr-2"></i>Rank: {test.rank}/{test.totalParticipants?.toLocaleString()}</p>
                      <p><i className="fas fa-star mr-2"></i>Score: {test.score}/100</p>
                      <p><i className="fas fa-percentage mr-2"></i>Percentile: {test.percentile}%</p>
                    </>
                  )}
                </div>
                <Button 
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    test.status === 'upcoming'
                      ? 'bg-secondary text-white hover:bg-green-600'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {test.status === 'upcoming' ? 'Register Now' : 'View Analysis'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Series */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Test Series</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testSeries.map((series) => (
            <div key={series.id} className="border border-neutral-200 rounded-lg p-4">
              <div className={`${series.color}/10 p-3 rounded-lg w-fit mb-3`}>
                <i className={`${series.icon} ${series.color.replace('bg-', 'text-')} text-lg`}></i>
              </div>
              <h4 className="font-semibold text-neutral-800 mb-2">{series.name}</h4>
              <p className="text-sm text-neutral-600 mb-3">{series.description}</p>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-neutral-600">Progress: {series.completedTests}/{series.totalTests}</span>
                <span className={`font-medium ${series.color.replace('bg-', 'text-')}`}>
                  {series.progress}% Complete
                </span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-2 mb-4">
                <div 
                  className={`h-2 rounded-full ${series.color}`}
                  style={{ width: `${series.progress}%` }}
                ></div>
              </div>
              <Button 
                className={`w-full py-2 text-sm font-medium rounded-lg ${series.color} text-white hover:opacity-90`}
              >
                {series.progress > 0 ? 'Continue Series' : 'Start Series'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
