export interface TweetDTO {
  id: string;
  userID: number;
  message: string;
  timestamp: string;
  replyTo: number;
  numOfLikes: number;
  numOfReplies: number;
  iLiked: boolean;
}
