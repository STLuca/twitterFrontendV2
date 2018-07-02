import { TweetDTO } from './TweetDTO';
import { User, userDTOToUser } from './User';
import { UserDTO } from './UserDTO';

export class Tweet {
    constructor(
      public id: string,
      public user: User,
      public message: string,
      public timestamp: string,
      public replyTo: number,
      public numOfLikes: number,
      public numOfReplies: number,
      public liked: boolean) {}
  }

export function tweetDTOToTweet(tweet: TweetDTO, user: UserDTO): Tweet {
  return new Tweet(
    tweet.id,
    userDTOToUser(user),
    tweet.message,
    tweet.timestamp,
    tweet.replyTo,
    tweet.numOfLikes,
    tweet.numOfReplies,
    tweet.iLiked
  );
}

export function toggleTweetLike(tweet: Tweet): Tweet {
  return new Tweet(
    tweet.id,
    tweet.user,
    tweet.message,
    tweet.timestamp,
    tweet.replyTo,
    tweet.liked ? tweet.numOfLikes - 1 : tweet.numOfLikes + 1,
    tweet.numOfReplies,
    !tweet.liked
  );
}

