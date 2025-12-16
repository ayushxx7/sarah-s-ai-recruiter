export interface AnalysisResult {
  score: number;
  status: string;
  summary: string;
  pros: string[];
  cons: string[];
  email_draft: {
    Subject: string;
    body: string;
  };
  candidate_name: string;
}
