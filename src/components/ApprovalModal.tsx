import { X, Sparkles, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailDraft: { subject: string; body: string };
  candidateName: string;
}

export function ApprovalModal({ isOpen, onClose, emailDraft, candidateName }: ApprovalModalProps) {
  const [autoReply, setAutoReply] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [subject, setSubject] = useState(emailDraft.subject);
  const [body, setBody] = useState(emailDraft.body);

  useEffect(() => {
    setSubject(emailDraft.subject);
    setBody(emailDraft.body);
  }, [emailDraft]);

  if (!isOpen) return null;

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      toast.success(`Email sent to ${candidateName}!`);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-t-3xl sm:rounded-2xl w-full max-w-lg mx-auto shadow-2xl animate-scale-in overflow-hidden">
        {/* Handle bar (mobile) */}
        <div className="flex justify-center pt-3 pb-2 sm:hidden">
          <div className="w-10 h-1 bg-border rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Review Agent Draft</h2>
            <p className="text-sm text-muted-foreground">Sending to {candidateName}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* AI Badge */}
        <div className="px-6 mb-6">
          <div className="ai-badge w-fit">
            <Sparkles className="w-4 h-4" />
            <span>AI Generated Draft</span>
          </div>
        </div>

        {/* Email Content */}
        <div className="px-6 space-y-4">
          {/* Subject */}
          <div>
            <label className="text-sm font-medium text-foreground">Subject</label>
            <input 
              className="mt-1.5 w-full p-3 bg-muted rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Message Body</label>
              <span className="text-xs text-muted-foreground">Editable</span>
            </div>
            <textarea 
              className="mt-1.5 w-full p-3 bg-muted rounded-lg text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[180px]"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-6 mt-4 border-t border-border space-y-4">
          {/* Auto-reply checkbox */}
          <label className="flex items-center gap-3 cursor-pointer">
            <div 
              className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                autoReply ? "bg-foreground" : "border-2 border-border"
              }`}
              onClick={() => setAutoReply(!autoReply)}
            >
              {autoReply && (
                <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-foreground">Auto-reply if candidate confirms</span>
          </label>

          {/* Send Button */}
          <button 
            onClick={handleSend}
            disabled={isSending}
            className="w-full py-4 bg-foreground text-background rounded-xl text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSending ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Email</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
