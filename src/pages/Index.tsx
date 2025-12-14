import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CandidateView } from "@/components/CandidateView";
import { ApprovalModal } from "@/components/ApprovalModal";
import { UploadView } from "@/components/UploadView";

type ViewState = "dashboard" | "candidate" | "upload";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard onViewCandidate={() => setCurrentView("candidate")} />;
      case "upload":
        return <UploadView onAnalyze={() => setCurrentView("candidate")} />;
      case "candidate":
        return (
          <CandidateView 
            onBack={() => setCurrentView("dashboard")}
            onApprove={() => setIsModalOpen(true)}
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
      />
    </div>
  );
};

export default Index;
