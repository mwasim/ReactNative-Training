export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  description?: string;
  video?: string;
  nofComments: number;
  nofLikes: number;
  user: IUser;
  comments: IComment[];
}

export interface IUser {
  readonly id: string;
  readonly name: string;
  readonly email?: string;
  readonly username?: string;
  readonly bio?: string;
  readonly website?: string;
  readonly nofPosts: number;
  readonly nofFollowers: number;
  readonly nofFollowings: number;
  readonly image?: string;
  readonly Posts?: IPost[];
  readonly Comments?: IComment[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

export interface IComment {
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly user?: IUser;
  readonly post?: IPost;
  readonly updatedAt?: string;
}
