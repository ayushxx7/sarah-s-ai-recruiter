import { ArrowLeft, MapPin, Sparkles, CheckCircle, AlertTriangle, FileText, MoreHorizontal } from "lucide-react";

interface CandidateViewProps {
  onBack: () => void;
  onApprove: () => void;
}

const candidate = {
  name: "Alex Chen",
  role: "Tech Lead @ FintechFlow",
  location: "San Francisco (Remote)",
  score: 92,
  level: "Senior Level",
};

const insights = {
  summary: "Strong match. Alex demonstrates exceptional alignment with the Senior Tech Lead requirements, particularly with his 7 years of Python experience and recent leadership at a high-growth fintech startup.",
  strengths: [
    "Direct experience scaling payment infrastructure similar to our roadmap.",
    "Proven track record of managing distributed teams (5+ engineers).",
  ],
  risks: [
    "Salary expectation is slightly above the posted range base.",
    "Short tenure (1.5 years) at current role compared to history.",
  ],
};

export function CandidateView({ onBack, onApprove }: CandidateViewProps) {
  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="font-semibold text-foreground">Candidate Analysis</h1>
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {/* Candidate Info */}
        <div className="flex items-center gap-4 mb-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xl font-bold text-primary">
            AC
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-foreground">{candidate.name}</h2>
              <span className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded-full">
                {candidate.level}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{candidate.role}</p>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              {candidate.location}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 p-1 bg-muted rounded-lg w-fit">
          <button className="px-4 py-2 text-sm font-medium bg-card text-foreground rounded-md shadow-sm">
            Deep Read
          </button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors">
            Resume View
          </button>
        </div>

        {/* Score Ring */}
        <div className="flex flex-col items-center mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="8"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(candidate.score / 100) * 352} 352`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{candidate.score}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Match</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 bg-success/10 text-success px-3 py-1.5 rounded-full">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Recommended for Interview</span>
          </div>
        </div>

        {/* AI Insights */}
        <div className="insight-card mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-ai" />
            <h3 className="font-semibold text-foreground">Gemini Insights</h3>
          </div>

          <p className="text-sm text-foreground leading-relaxed mb-6">
            <span className="font-semibold">Strong match.</span> {insights.summary}
          </p>

          <div className="mb-4">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Key Strengths
            </h4>
            <ul className="space-y-2">
              {insights.strengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Potential Risks
            </h4>
            <ul className="space-y-2">
              {insights.risks.map((risk, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resume Link */}
        <div className="flex items-center justify-between p-4 bg-muted rounded-xl animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Source Resume.pdf</p>
              <p className="text-xs text-muted-foreground">Added 2 days ago • 2.4 MB</p>
            </div>
          </div>
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            View
          </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-3 px-6 py-4 border-t border-border bg-card">
        <button className="p-3 hover:bg-muted rounded-lg transition-colors">
          <Sparkles className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="flex-1 py-3 px-4 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          Reject
        </button>
        <button 
          onClick={onApprove}
          className="flex-1 py-3 px-4 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 rotate-[135deg]" />
          Approve
        </button>
      </div>
    </div>
  );
}
