

import { TweetDTO } from './TweetDTO';
import { UserDTO } from './UserDTO';
import { TweetUserPair } from './TweetUserPair';

export interface CombinedDTO {
    users: UserDTO[];
    tweets: TweetDTO[];
}

export const combinedDTOtoTweetUserPairList: (CombinedDTO) => TweetUserPair[]
    = (combinedDTO: CombinedDTO) => {

        if ( combinedDTO.tweets.length === 0) {
            return combinedDTO.users.map(user => new TweetUserPair(user, null));
        }

        if ( combinedDTO.users.length === 0) {
            return combinedDTO.tweets.map(tweet => new TweetUserPair(null, tweet));
        }

        const usersMap: Map<number, UserDTO> = getUserDTOMap(combinedDTO.users);
        return combinedDTO.tweets.map(tweet => new TweetUserPair(usersMap.get(tweet.userID), tweet));
    };

const getUserDTOMap: (users: UserDTO[]) => Map<number, UserDTO> =
    (users: UserDTO[]) => {
        const usersMap: Map<number, UserDTO> = new Map<number, UserDTO>();
        users.forEach(user => usersMap.set(user.id, user));
        return usersMap;
};


