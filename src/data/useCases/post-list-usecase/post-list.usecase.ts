import {IPostList} from '@domain/contracts';
import {PostModelAPI} from '@domain/models';
import {IHttpClient} from '@infra/contracts';

import {postModelAdapter} from '..';

export class PostListUseCase implements IPostList {
  constructor(
    private readonly httpClient: IHttpClient<PostModelAPI[]>
  ) {}

  async list(): Promise<IPostList.Model> {
    const {data} = await this.httpClient.request({
      method: 'get',
      url: 'http://localhost:3333/posts',
    });

    return data.map(postModelAdapter.toPostModel);
  }
}
