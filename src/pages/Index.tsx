import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { CandidateView } from "@/components/CandidateView";
import { ApprovalModal } from "@/components/ApprovalModal";

type ViewState = "dashboard" | "candidate";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        activeView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      
      {currentView === "dashboard" ? (
        <Dashboard onViewCandidate={() => setCurrentView("candidate")} />
      ) : (
        <CandidateView 
          onBack={() => setCurrentView("dashboard")}
          onApprove={() => setIsModalOpen(true)}
        />
      )}

      <ApprovalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
