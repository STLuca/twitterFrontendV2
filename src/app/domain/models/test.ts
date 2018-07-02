import { TweetDTO } from './TweetDTO';
import { UserDTO } from './UserDTO';
import { tweetDTOToTweet, Tweet } from './Tweet';
import { User, userDTOToUser } from './User';

const testTweetDTO: TweetDTO = {
    id: '2',
    userID: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
             ' Aenean sed enim eu tellus vulputate ullamcorper. Nullam aliquet aliquam felis, vel amet.',
    timestamp: '100',
    replyTo: 0,
    numOfLikes: 0,
    numOfReplies: 0,
    iLiked: false
};

const testUserDTO: UserDTO = {
    id: 1,
    username: 'Bob',
    numOfTweets: 1,
    numOfFollowing: 0,
    numOfFollowers: 0,
    iFollowing: false
};

export const testTweet: Tweet = tweetDTOToTweet(testTweetDTO, testUserDTO);
export const testUser: User = userDTOToUser(testUserDTO);
// export const testUser = new TweetUserPair(testUserDTO, null);
// export const testTweet = new TweetUserPair(null, testTweetDTO);
