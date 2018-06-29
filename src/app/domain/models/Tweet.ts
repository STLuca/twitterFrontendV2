import { TweetDTO } from './TweetDTO';
import { User, userDTOToUser } from './User';
import { UserDTO } from './UserDTO';

export class Tweet {
    constructor(
      public id: number,
      public user: User,
      public message: string,
      public timestamp: string,
      public replyTo: number,
      public numOfLikes: number,
      public numOfReplies: number) {}
  }

export function tweetDTOToTweet(tweet: TweetDTO, user: UserDTO): Tweet {
  return new Tweet(
    tweet.id,
    userDTOToUser(user),
    tweet.message,
    tweet.timestamp,
    tweet.replyTo,
    tweet.numOfLikes,
    tweet.numOfReplies
  );
}

