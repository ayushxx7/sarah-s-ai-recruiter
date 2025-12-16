import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CandidateView } from "@/components/CandidateView";
import { ApprovalModal } from "@/components/ApprovalModal";
import { UploadView } from "@/components/UploadView";
import { AnalysisResult } from "@/types/analysis";

type ViewState = "dashboard" | "candidate" | "upload";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [emailDraft, setEmailDraft] = useState({ subject: "", body: "" });

  const handleAnalyze = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setCurrentView("candidate");
  };

  const handleApprove = (draft: { subject: string; body: string }) => {
    setEmailDraft(draft);
    setIsModalOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard onViewCandidate={() => setCurrentView("candidate")} />;
      case "upload":
        return <UploadView onAnalyze={handleAnalyze} />;
      case "candidate":
        return (
          <CandidateView 
            onBack={() => setCurrentView("dashboard")}
            onApprove={handleApprove}
            analysis={analysisResult}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        activeView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      
      {renderView()}

      <ApprovalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        emailDraft={emailDraft}
        candidateName={analysisResult?.candidate_name || "Candidate"}
      />
    </div>
  );
};

export default Index;