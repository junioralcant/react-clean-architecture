import axios from 'axios';
import {IPostList} from '../../../domain/contracts/post.contracts';
import {
  PostModel,
  PostModelAPI,
} from '../../../domain/models/post.model';
import {postListAdapter} from './post-list.adapter';

export class PostListUseCase implements IPostList {
  async list(): Promise<PostModel[]> {
    const {data} = await axios.get<PostModelAPI[]>(
      'http://localhost:3333/posts'
    );
    return data.map(postListAdapter.toPostModel);
  }
}
