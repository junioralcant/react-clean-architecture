import {PostModel} from '../models/post.model';

export interface IPostList {
  list(): Promise<PostModel[]>;
}
