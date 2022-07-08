export interface FeedbackCreatData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreatData) => Promise<void>;
}
