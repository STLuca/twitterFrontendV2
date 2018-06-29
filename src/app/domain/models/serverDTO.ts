import { UserDTO } from './UserDTO';
import { TweetDTO } from './TweetDTO';
import { Tweet, tweetDTOToTweet } from './Tweet';
import { User, userDTOToUser } from './User';

export interface ServerDTO {
    users: UserDTO[];
    tweets: TweetDTO[];
}

export function serverDTOToTweets(data: ServerDTO): Tweet[] {
    return data.tweets.map(tweet => tweetDTOToTweet(tweet, data.users.find(user => user.id === tweet.userID)));
}

export function serverDTOToUsers(data: ServerDTO): User[] {
    return data.users.map(user => userDTOToUser(user));
}
