import { UserDTO } from './UserDTO';

export class User {
    constructor(
      public id: number,
      public username: string,
      public description: string,
      public pictureUrl: string,
      public numOfTweets: number,
      public numOfFollowing: number,
      public numOfFollowers: number,
      public following: boolean
    ) {}
  }

  export function userDTOToUser(user: UserDTO): User {
    return new User(
      user.id,
      user.username,
      'generic user description',
      'https://www.viawater.nl/files/default-user.png',
      user.numOfTweets,
      user.numOfFollowing,
      user.numOfFollowers,
      user.iFollowing
    );
  }

  export function toggleUserFollow(user: User): User {
    return new User(
      user.id,
      user.username,
      'generic user description',
      'https://www.viawater.nl/files/default-user.png',
      user.numOfTweets,
      user.numOfFollowing,
      user.following ? user.numOfFollowers - 1 : user.numOfFollowers,
      !user.following
    );
  }
