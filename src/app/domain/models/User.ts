import { UserDTO } from './UserDTO';

export class User {
    constructor(
      // public id: number,
      public username: string,
      public description: string,
      public numOfTweets: number,
      public numOfFollowing: number,
      public numOfFollowers: number) {}
  }

  export function userDTOToUser(x: UserDTO): User {
    return new User(
      // x.id,
      x.username,
      'generic user description',
      x.numOfTweets,
      x.numOfFollowing,
      x.numOfFollowers);
  }
