import { FileText, Filter, Clock, Calendar, Sparkles, CheckCircle } from "lucide-react";

interface DashboardProps {
  onViewCandidate: () => void;
}

const stats = [
  { 
    icon: FileText, 
    value: "24", 
    label: "Resumes Parsed",
    subtext: "Since 9 AM",
    change: "+12%",
    iconBg: "bg-primary/10",
    iconColor: "text-primary"
  },
  { 
    icon: Filter, 
    value: "92%", 
    label: "Auto-Rejection Rate",
    subtext: "AI filtered automatically",
    iconBg: "bg-warning/10",
    iconColor: "text-warning"
  },
  { 
    icon: Clock, 
    value: "3.5", 
    label: "Hours Saved",
    subtext: "This week",
    iconBg: "bg-success/10",
    iconColor: "text-success"
  },
];

const activities = [
  {
    id: 1,
    type: "scheduled",
    icon: Calendar,
    title: "Interview Scheduled",
    description: "Agent successfully scheduled interview with",
    highlight: "Jordan Lee",
    role: "for Senior Frontend Eng role.",
    time: "10m ago",
    action: "View Details",
  },
  {
    id: 2,
    type: "match",
    icon: Sparkles,
    title: "High Match Detected",
    score: 92,
    description: "Candidate from LinkedIn",
    highlight: "Alex Chen",
    role: "New application for Product Manager role matches top criteria.",
    time: "24m ago",
    action: "Review Profile",
    clickable: true,
  },
];

export function Dashboard({ onViewCandidate }: DashboardProps) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">{dateStr}</p>
        <h1 className="text-3xl font-bold text-foreground">Good morning, Sarah.</h1>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              {stat.change && (
                <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              )}
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-foreground">{stat.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.subtext}</div>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="activity-item animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full ${
                    activity.type === "scheduled" 
                      ? "bg-gradient-to-br from-primary/20 to-primary/10" 
                      : "bg-gradient-to-br from-ai/20 to-ai/10"
                  } flex items-center justify-center`}>
                    <activity.icon className={`w-5 h-5 ${
                      activity.type === "scheduled" ? "text-primary" : "text-ai"
                    }`} />
                  </div>
                  {activity.type === "scheduled" && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-success-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{activity.title}</h3>
                      {activity.score && (
                        <span className="inline-block mt-1 bg-success/10 text-success text-xs font-semibold px-2 py-1 rounded-md">
                          {activity.score} Match Score
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {activity.description}{" "}
                    <span className="font-medium text-foreground">{activity.highlight}</span>{" "}
                    {activity.role}
                  </p>
                  <button 
                    onClick={activity.clickable ? onViewCandidate : undefined}
                    className={`mt-3 inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      activity.clickable 
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {activity.type === "scheduled" && <Calendar className="w-4 h-4" />}
                    {activity.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
