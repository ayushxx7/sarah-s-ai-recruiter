import { useState } from "react";
import { Upload, FileText, Briefcase, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

interface UploadViewProps {
  onAnalyze: () => void;
}

export function UploadView({ onAnalyze }: UploadViewProps) {
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleJdUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setJdFile(e.target.files[0]);
    }
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onAnalyze();
    }, 2000);
  };

  const bothUploaded = jdFile && resumeFile;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-ai/10 text-ai px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Analysis
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Upload & Analyze
          </h1>
          <p className="text-muted-foreground">
            Upload a Job Description and Resume to get instant AI insights
          </p>
        </div>

        {/* Upload Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* JD Upload */}
          <label 
            className={`relative group cursor-pointer block animate-fade-in`}
            style={{ animationDelay: "100ms" }}
          >
            <input 
              type="file" 
              className="sr-only" 
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleJdUpload}
            />
            <div className={`p-6 border-2 border-dashed rounded-xl transition-all ${
              jdFile 
                ? "border-success bg-success/5" 
                : "border-border hover:border-primary hover:bg-muted"
            }`}>
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                jdFile ? "bg-success/10" : "bg-primary/10"
              }`}>
                {jdFile ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <Briefcase className="w-6 h-6 text-primary" />
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {jdFile ? "Job Description Added" : "Job Description"}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {jdFile ? jdFile.name : "Upload the role requirements"}
              </p>
              <div className={`inline-flex items-center gap-2 text-sm font-medium ${
                jdFile ? "text-success" : "text-primary"
              }`}>
                {jdFile ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Uploaded
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Upload File
                  </>
                )}
              </div>
            </div>
          </label>

          {/* Resume Upload */}
          <label 
            className={`relative group cursor-pointer block animate-fade-in`}
            style={{ animationDelay: "200ms" }}
          >
            <input 
              type="file" 
              className="sr-only" 
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleResumeUpload}
            />
            <div className={`p-6 border-2 border-dashed rounded-xl transition-all ${
              resumeFile 
                ? "border-success bg-success/5" 
                : "border-border hover:border-primary hover:bg-muted"
            }`}>
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                resumeFile ? "bg-success/10" : "bg-ai/10"
              }`}>
                {resumeFile ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <FileText className="w-6 h-6 text-ai" />
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {resumeFile ? "Resume Added" : "Candidate Resume"}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {resumeFile ? resumeFile.name : "Upload the candidate's CV"}
              </p>
              <div className={`inline-flex items-center gap-2 text-sm font-medium ${
                resumeFile ? "text-success" : "text-ai"
              }`}>
                {resumeFile ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Uploaded
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Upload File
                  </>
                )}
              </div>
            </div>
          </label>
        </div>

        {/* Analyze Button */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <button
            onClick={handleAnalyze}
            disabled={!bothUploaded || isAnalyzing}
            className={`w-full py-4 px-6 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
              bothUploaded && !isAnalyzing
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {isAnalyzing ? (
              <>
                <Sparkles className="w-5 h-5 animate-pulse" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Analyze Match
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          {!bothUploaded && (
            <p className="text-center text-sm text-muted-foreground mt-3">
              Upload both files to enable analysis
            </p>
          )}
        </div>
      </div>
    </div>
  );
}